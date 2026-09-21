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
let CredentialCategoriesRepository = class CredentialCategoriesRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findPaginated(userId, query) {
        const where = { userId, deletedAt: null };
        if (query.search)
            where.OR = [{ name: { contains: query.search, mode: 'insensitive' } }, { description: { contains: query.search, mode: 'insensitive' } }];
        const [data, total] = await this.prisma.$transaction([
            this.prisma.credentialCategory.findMany({ where, skip: (query.page - 1) * query.limit, take: query.limit, orderBy: { name: 'asc' } }),
            this.prisma.credentialCategory.count({ where }),
        ]);
        return { data, total };
    }
    findById(userId, id) { return this.prisma.credentialCategory.findFirst({ where: { id, userId, deletedAt: null } }); }
    findDuplicate(userId, name, excludeId) {
        return this.prisma.credentialCategory.findFirst({ where: { userId, name: { equals: name, mode: 'insensitive' }, deletedAt: null, ...(excludeId ? { id: { not: excludeId } } : {}) }, select: { id: true } });
    }
    create(userId, name, description) { return this.prisma.credentialCategory.create({ data: { userId, name, description, createdBy: userId } }); }
    update(userId, id, data) { return this.prisma.credentialCategory.update({ where: { id }, data: { ...data, updatedBy: userId } }); }
    softDelete(userId, id) { return this.prisma.credentialCategory.update({ where: { id }, data: { deletedAt: new Date(), deletedBy: userId } }); }
};
CredentialCategoriesRepository = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], CredentialCategoriesRepository);
export { CredentialCategoriesRepository };
//# sourceMappingURL=credential-categories.repository.js.map