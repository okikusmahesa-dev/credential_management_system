import { Injectable } from '@nestjs/common';
import { Prisma } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { CredentialQueryDto } from './dto/credential-query.dto.js';

export interface CredentialRecord {
  id: string; userId: string; groupId: string; categoryId: string; name: string; username: string; encryptedValue: string; url: string | null; notes: string | null; createdAt: Date; updatedAt: Date; group: { id: string; name: string }; category: { id: string; name: string };
}

@Injectable()
export class CredentialsRepository {
  constructor(private readonly prisma: PrismaService) {}
  private readonly include = { group: { select: { id: true, name: true } }, category: { select: { id: true, name: true } } } as const;
  async findPaginated(userId: string, query: CredentialQueryDto): Promise<{ data: CredentialRecord[]; total: number }> {
    const where: Prisma.CredentialWhereInput = { userId, deletedAt: null, ...(query.groupId ? { groupId: query.groupId } : {}), ...(query.categoryId ? { categoryId: query.categoryId } : {}) };
    if (query.search) where.OR = [{ name: { contains: query.search, mode: 'insensitive' } }, { username: { contains: query.search, mode: 'insensitive' } }];
    const [data, total] = await this.prisma.$transaction([
      this.prisma.credential.findMany({ where, skip: (query.page - 1) * query.limit, take: query.limit, orderBy: { name: 'asc' }, include: this.include }),
      this.prisma.credential.count({ where }),
    ]);
    return { data: data as CredentialRecord[], total };
  }
  findById(userId: string, id: string) { return this.prisma.credential.findFirst({ where: { id, userId, deletedAt: null }, include: this.include }); }
  create(userId: string, data: { groupId: string; categoryId: string; name: string; username: string; encryptedValue: string; url?: string | null; notes?: string | null }) { return this.prisma.credential.create({ data: { ...data, userId, createdBy: userId }, include: this.include }); }
  update(userId: string, id: string, data: Partial<{ groupId: string; categoryId: string; name: string; username: string; encryptedValue: string; url: string | null; notes: string | null }>) { return this.prisma.credential.update({ where: { id }, data: { ...data, updatedBy: userId }, include: this.include }); }
  softDelete(userId: string, id: string) { return this.prisma.credential.update({ where: { id }, data: { deletedAt: new Date(), deletedBy: userId } }); }
}
