import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PaginatedResponse } from '../common/pagination/pagination.types.js';
import { CreateCredentialGroupDto } from './dto/create-credential-group.dto.js';
import { CredentialGroupQueryDto } from './dto/credential-group-query.dto.js';
import { UpdateCredentialGroupDto } from './dto/update-credential-group.dto.js';
import { CredentialGroupsRepository } from './credential-groups.repository.js';
import {
  CredentialGroupMenuItem,
  CredentialGroupWithParent,
} from './types/credential-group.types.js';

@Injectable()
export class CredentialGroupsService {
  constructor(
    private readonly repository: CredentialGroupsRepository,
  ) {}

  async create(
    userId: string,
    dto: CreateCredentialGroupDto,
  ): Promise<CredentialGroupWithParent> {
    const parentId = dto.parentId ?? null;

    await this.validateParent(userId, parentId);

    const duplicate = await this.repository.findDuplicate(
      userId,
      dto.name.trim(),
      parentId,
    );

    if (duplicate) {
      throw new BadRequestException(
        'A group with the same name already exists under this parent',
      );
    }

    return this.repository.create(
      userId,
      dto.name.trim(),
      dto.description?.trim() ?? null,
      parentId,
    );
  }

  async findAll(
    userId: string,
    query: CredentialGroupQueryDto,
  ): Promise<PaginatedResponse<CredentialGroupWithParent>> {
    const result = await this.repository.findPaginated(
      userId,
      query,
    );

    return {
      data: result.data,
      meta: {
        page: query.page,
        limit: query.limit,
        total: result.total,
        totalPages: Math.ceil(result.total / query.limit),
      },
    };
  }

  async findOne(
    userId: string,
    id: string,
  ): Promise<CredentialGroupWithParent> {
    const group = await this.repository.findById(userId, id);

    if (!group) {
      throw new NotFoundException('Credential group not found');
    }

    return group;
  }

  async update(
    userId: string,
    id: string,
    dto: UpdateCredentialGroupDto,
  ): Promise<CredentialGroupWithParent> {
    const group = await this.findOne(userId, id);

    const parentId =
      dto.parentId !== undefined
        ? dto.parentId
        : group.parent?.id ?? null;

    if (parentId === id) {
      throw new BadRequestException(
        'A group cannot be its own parent',
      );
    }

    await this.validateParent(userId, parentId);

    if (parentId) {
      await this.validateNoCycle(userId, id, parentId);
    }

    const name = dto.name?.trim();

    if (name) {
      const duplicate = await this.repository.findDuplicate(
        userId,
        name,
        parentId,
        id,
      );

      if (duplicate) {
        throw new BadRequestException(
          'A group with the same name already exists under this parent',
        );
      }
    }

    return this.repository.update(userId, id, {
      ...(name !== undefined ? { name } : {}),
      ...(dto.description !== undefined
        ? {
            description: dto.description.trim() || null,
          }
        : {}),
      ...(dto.parentId !== undefined ? { parentId } : {}),
    });
  }

  async remove(
    userId: string,
    id: string,
  ): Promise<void> {
    await this.findOne(userId, id);

    const children = await this.repository.countChildren(
      userId,
      id,
    );

    if (children > 0) {
      throw new BadRequestException(
        'Cannot delete a group that has active child groups',
      );
    }

    const credentials = await this.repository.countCredentials(
      userId,
      id,
    );

    if (credentials > 0) {
      throw new BadRequestException(
        'Cannot delete a group that still contains active credentials',
      );
    }

    await this.repository.softDelete(userId, id);
  }

  async getMenu(
    userId: string,
  ): Promise<CredentialGroupMenuItem[]> {
    const groups = await this.repository.findAllForMenu(userId);

    const nodes = new Map<string, CredentialGroupMenuItem>();

    for (const group of groups) {
      nodes.set(group.id, {
        id: group.id,
        name: group.name,
        description: group.description,
        children: [],
      });
    }

    const roots: CredentialGroupMenuItem[] = [];

    for (const group of groups) {
      const node = nodes.get(group.id);

      if (!node) {
        continue;
      }

      if (!group.parentId) {
        roots.push(node);
        continue;
      }

      const parent = nodes.get(group.parentId);

      if (parent) {
        parent.children.push(node);
      } else {
        roots.push(node);
      }
    }

    return roots;
  }

  private async validateParent(
    userId: string,
    parentId: string | null,
  ): Promise<void> {
    if (!parentId) {
      return;
    }

    const parent = await this.repository.findActiveById(
      userId,
      parentId,
    );

    if (!parent) {
      throw new NotFoundException(
        'Parent credential group not found',
      );
    }
  }

  private async validateNoCycle(
    userId: string,
    groupId: string,
    parentId: string,
  ): Promise<void> {
    let currentId: string | null = parentId;

    while (currentId) {
      if (currentId === groupId) {
        throw new BadRequestException(
          'Invalid group hierarchy',
        );
      }

      const current =
        await this.repository.findActiveById(
          userId,
          currentId,
        );

      currentId = current?.parent?.id ?? null;
    }
  }
}