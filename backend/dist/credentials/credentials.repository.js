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
let CredentialsRepository = class CredentialsRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    include = { group: { select: { id: true, name: true } }, category: { select: { id: true, name: true } } };
    async findPaginated(userId, query) {
        const where = { userId, deletedAt: null, ...(query.groupId ? { groupId: query.groupId } : {}), ...(query.categoryId ? { categoryId: query.categoryId } : {}) };
        if (query.search)
            where.OR = [{ name: { contains: query.search, mode: 'insensitive' } }, { username: { contains: query.search, mode: 'insensitive' } }];
        const [data, total] = await this.prisma.$transaction([
            this.prisma.credential.findMany({ where, skip: (query.page - 1) * query.limit, take: query.limit, orderBy: { name: 'asc' }, include: this.include }),
            this.prisma.credential.count({ where }),
        ]);
        return { data: data, total };
    }
    findById(userId, id) { return this.prisma.credential.findFirst({ where: { id, userId, deletedAt: null }, include: this.include }); }
    create(userId, data) { return this.prisma.credential.create({ data: { ...data, userId, createdBy: userId }, include: this.include }); }
    update(userId, id, data) { return this.prisma.credential.update({ where: { id }, data: { ...data, updatedBy: userId }, include: this.include }); }
    softDelete(userId, id) { return this.prisma.credential.update({ where: { id }, data: { deletedAt: new Date(), deletedBy: userId } }); }
};
CredentialsRepository = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], CredentialsRepository);
export { CredentialsRepository };
//# sourceMappingURL=credentials.repository.js.map