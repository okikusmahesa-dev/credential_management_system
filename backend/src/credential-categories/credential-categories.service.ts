import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PaginatedResponse } from '../common/pagination/pagination.types.js';
import { CreateCredentialCategoryDto } from './dto/create-credential-category.dto.js';
import { CredentialCategoryQueryDto } from './dto/credential-category-query.dto.js';
import { UpdateCredentialCategoryDto } from './dto/update-credential-category.dto.js';
import { CredentialCategoriesRepository } from './credential-categories.repository.js';

@Injectable()
export class CredentialCategoriesService {
  constructor(private readonly repository: CredentialCategoriesRepository) {}
  async create(userId: string, dto: CreateCredentialCategoryDto) { const name = dto.name.trim(); if (await this.repository.findDuplicate(userId, name)) throw new BadRequestException('Category name already exists'); return this.repository.create(userId, name, dto.description?.trim() || null); }
  async findAll(userId: string, query: CredentialCategoryQueryDto): Promise<PaginatedResponse<Awaited<ReturnType<CredentialCategoriesRepository['findById']>> extends infer T ? NonNullable<T> : never>> { const result = await this.repository.findPaginated(userId, query); return { data: result.data, meta: { page: query.page, limit: query.limit, total: result.total, totalPages: Math.ceil(result.total / query.limit) } }; }
  async findOne(userId: string, id: string) { const category = await this.repository.findById(userId, id); if (!category) throw new NotFoundException('Credential category not found'); return category; }
  async update(userId: string, id: string, dto: UpdateCredentialCategoryDto) { await this.findOne(userId, id); const name = dto.name?.trim(); if (name && await this.repository.findDuplicate(userId, name, id)) throw new BadRequestException('Category name already exists'); return this.repository.update(userId, id, { ...(name ? { name } : {}), ...(dto.description !== undefined ? { description: dto.description.trim() || null } : {}) }); }
  async remove(userId: string, id: string) { await this.findOne(userId, id); await this.repository.softDelete(userId, id); }
}
