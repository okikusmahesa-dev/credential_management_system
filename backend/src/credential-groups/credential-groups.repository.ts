import { Injectable } from '@nestjs/common';
import { Prisma } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
import {
  CredentialGroupMenuItem,
  CredentialGroupWithParent,
} from './types/credential-group.types.js';
import { CredentialGroupQueryDto } from './dto/credential-group-query.dto.js';

@Injectable()
export class CredentialGroupsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findPaginated(
    userId: string,
    query: CredentialGroupQueryDto,
  ): Promise<{
    data: CredentialGroupWithParent[];
    total: number;
  }> {
    const where: Prisma.CredentialGroupWhereInput = {
      userId,
      deletedAt: null,
    };

    if (query.search) {
      where.OR = [
        {
          name: {
            contains: query.search,
            mode: 'insensitive',
          },
        },
        {
          description: {
            contains: query.search,
            mode: 'insensitive',
          },
        },
      ];
    }

    if (query.parentId) {
      where.parentId = query.parentId;
    }

    const skip = (query.page - 1) * query.limit;

    const [data, total] = await this.prisma.$transaction([
      this.prisma.credentialGroup.findMany({
        where,
        skip,
        take: query.limit,
        orderBy: {
          name: 'asc',
        },
        include: {
          parent: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      }),
      this.prisma.credentialGroup.count({
        where,
      }),
    ]);

    return {
      data,
      total,
    };
  }

  async findById(
    userId: string,
    id: string,
  ): Promise<CredentialGroupWithParent | null> {
    return this.prisma.credentialGroup.findFirst({
      where: {
        id,
        userId,
        deletedAt: null,
      },
      include: {
        parent: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  async findActiveById(
    userId: string,
    id: string,
  ): Promise<CredentialGroupWithParent | null> {
    return this.findById(userId, id);
  }

  async findDuplicate(
    userId: string,
    name: string,
    parentId: string | null,
    excludeId?: string,
  ): Promise<boolean> {
    const existing = await this.prisma.credentialGroup.findFirst({
      where: {
        userId,
        name: {
          equals: name,
          mode: 'insensitive',
        },
        parentId,
        deletedAt: null,
        ...(excludeId
          ? {
              id: {
                not: excludeId,
              },
            }
          : {}),
      },
      select: {
        id: true,
      },
    });

    return existing !== null;
  }

  async create(
    userId: string,
    name: string,
    description: string | null,
    parentId: string | null,
  ): Promise<CredentialGroupWithParent> {
    return this.prisma.credentialGroup.create({
      data: {
        userId,
        name,
        description,
        parentId,
        createdBy: userId,
      },
      include: {
        parent: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  async update(
    userId: string,
    id: string,
    data: {
      name?: string;
      description?: string | null;
      parentId?: string | null;
    },
  ): Promise<CredentialGroupWithParent> {
    return this.prisma.credentialGroup.update({
      where: {
        id,
      },
      data: {
        ...data,
        updatedBy: userId,
      },
      include: {
        parent: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  async countChildren(
    userId: string,
    groupId: string,
  ): Promise<number> {
    return this.prisma.credentialGroup.count({
      where: {
        userId,
        parentId: groupId,
        deletedAt: null,
      },
    });
  }

  async countCredentials(
    userId: string,
    groupId: string,
  ): Promise<number> {
    return this.prisma.credential.count({
      where: {
        userId,
        groupId,
        deletedAt: null,
      },
    });
  }

  async softDelete(
    userId: string,
    id: string,
  ): Promise<void> {
    await this.prisma.credentialGroup.update({
      where: {
        id,
      },
      data: {
        deletedAt: new Date(),
        deletedBy: userId,
      },
    });
  }

  async findAllForMenu(
    userId: string,
  ): Promise<
    Array<{
      id: string;
      name: string;
      description: string | null;
      parentId: string | null;
    }>
  > {
    return this.prisma.credentialGroup.findMany({
      where: {
        userId,
        deletedAt: null,
      },
      select: {
        id: true,
        name: true,
        description: true,
        parentId: true,
      },
      orderBy: {
        name: 'asc',
      },
    });
  }
}