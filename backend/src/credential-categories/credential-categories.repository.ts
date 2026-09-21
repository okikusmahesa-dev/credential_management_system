import { Injectable } from '@nestjs/common';
import { Prisma } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { CredentialCategoryQueryDto } from './dto/credential-category-query.dto.js';

@Injectable()
export class CredentialCategoriesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findPaginated(userId: string, query: CredentialCategoryQueryDto) {
    const where: Prisma.CredentialCategoryWhereInput = { userId, deletedAt: null };
    if (query.search) where.OR = [{ name: { contains: query.search, mode: 'insensitive' } }, { description: { contains: query.search, mode: 'insensitive' } }];
    const [data, total] = await this.prisma.$transaction([
      this.prisma.credentialCategory.findMany({ where, skip: (query.page - 1) * query.limit, take: query.limit, orderBy: { name: 'asc' } }),
      this.prisma.credentialCategory.count({ where }),
    ]);
    return { data, total };
  }

  findById(userId: string, id: string) { return this.prisma.credentialCategory.findFirst({ where: { id, userId, deletedAt: null } }); }
  findDuplicate(userId: string, name: string, excludeId?: string) {
    return this.prisma.credentialCategory.findFirst({ where: { userId, name: { equals: name, mode: 'insensitive' }, deletedAt: null, ...(excludeId ? { id: { not: excludeId } } : {}) }, select: { id: true } });
  }
  create(userId: string, name: string, description: string | null) { return this.prisma.credentialCategory.create({ data: { userId, name, description, createdBy: userId } }); }
  update(userId: string, id: string, data: { name?: string; description?: string | null }) { return this.prisma.credentialCategory.update({ where: { id }, data: { ...data, updatedBy: userId } }); }
  softDelete(userId: string, id: string) { return this.prisma.credentialCategory.update({ where: { id }, data: { deletedAt: new Date(), deletedBy: userId } }); }
}
