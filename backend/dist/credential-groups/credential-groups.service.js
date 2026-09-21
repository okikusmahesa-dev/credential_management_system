var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadRequestException, Injectable, NotFoundException, } from '@nestjs/common';
import { CredentialGroupsRepository } from './credential-groups.repository.js';
let CredentialGroupsService = class CredentialGroupsService {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async create(userId, dto) {
        const parentId = dto.parentId ?? null;
        await this.validateParent(userId, parentId);
        const duplicate = await this.repository.findDuplicate(userId, dto.name.trim(), parentId);
        if (duplicate) {
            throw new BadRequestException('A group with the same name already exists under this parent');
        }
        return this.repository.create(userId, dto.name.trim(), dto.description?.trim() ?? null, parentId);
    }
    async findAll(userId, query) {
        const result = await this.repository.findPaginated(userId, query);
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
    async findOne(userId, id) {
        const group = await this.repository.findById(userId, id);
        if (!group) {
            throw new NotFoundException('Credential group not found');
        }
        return group;
    }
    async update(userId, id, dto) {
        const group = await this.findOne(userId, id);
        const parentId = dto.parentId !== undefined
            ? dto.parentId
            : group.parent?.id ?? null;
        if (parentId === id) {
            throw new BadRequestException('A group cannot be its own parent');
        }
        await this.validateParent(userId, parentId);
        if (parentId) {
            await this.validateNoCycle(userId, id, parentId);
        }
        const name = dto.name?.trim();
        if (name) {
            const duplicate = await this.repository.findDuplicate(userId, name, parentId, id);
            if (duplicate) {
                throw new BadRequestException('A group with the same name already exists under this parent');
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
    async remove(userId, id) {
        await this.findOne(userId, id);
        const children = await this.repository.countChildren(userId, id);
        if (children > 0) {
            throw new BadRequestException('Cannot delete a group that has active child groups');
        }
        const credentials = await this.repository.countCredentials(userId, id);
        if (credentials > 0) {
            throw new BadRequestException('Cannot delete a group that still contains active credentials');
        }
        await this.repository.softDelete(userId, id);
    }
    async getMenu(userId) {
        const groups = await this.repository.findAllForMenu(userId);
        const nodes = new Map();
        for (const group of groups) {
            nodes.set(group.id, {
                id: group.id,
                name: group.name,
                description: group.description,
                children: [],
            });
        }
        const roots = [];
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
            }
            else {
                roots.push(node);
            }
        }
        return roots;
    }
    async validateParent(userId, parentId) {
        if (!parentId) {
            return;
        }
        const parent = await this.repository.findActiveById(userId, parentId);
        if (!parent) {
            throw new NotFoundException('Parent credential group not found');
        }
    }
    async validateNoCycle(userId, groupId, parentId) {
        let currentId = parentId;
        while (currentId) {
            if (currentId === groupId) {
                throw new BadRequestException('Invalid group hierarchy');
            }
            const current = await this.repository.findActiveById(userId, currentId);
            currentId = current?.parent?.id ?? null;
        }
    }
};
CredentialGroupsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [CredentialGroupsRepository])
], CredentialGroupsService);
export { CredentialGroupsService };
//# sourceMappingURL=credential-groups.service.js.map