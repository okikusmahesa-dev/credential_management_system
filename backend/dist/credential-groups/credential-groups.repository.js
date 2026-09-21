var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
let CredentialGroupsRepository = class CredentialGroupsRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findPaginated(userId, query) {
        const where = {
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
    async findById(userId, id) {
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
    async findActiveById(userId, id) {
        return this.findById(userId, id);
    }
    async findDuplicate(userId, name, parentId, excludeId) {
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
    async create(userId, name, description, parentId) {
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
    async update(userId, id, data) {
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
    async countChildren(userId, groupId) {
        return this.prisma.credentialGroup.count({
            where: {
                userId,
                parentId: groupId,
                deletedAt: null,
            },
        });
    }
    async countCredentials(userId, groupId) {
        return this.prisma.credential.count({
            where: {
                userId,
                groupId,
                deletedAt: null,
            },
        });
    }
    async softDelete(userId, id) {
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
    async findAllForMenu(userId) {
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
};
CredentialGroupsRepository = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], CredentialGroupsRepository);
export { CredentialGroupsRepository };
//# sourceMappingURL=credential-groups.repository.js.map