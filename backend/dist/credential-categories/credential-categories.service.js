var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CredentialCategoriesRepository } from './credential-categories.repository.js';
let CredentialCategoriesService = class CredentialCategoriesService {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async create(userId, dto) { const name = dto.name.trim(); if (await this.repository.findDuplicate(userId, name))
        throw new BadRequestException('Category name already exists'); return this.repository.create(userId, name, dto.description?.trim() || null); }
    async findAll(userId, query) { const result = await this.repository.findPaginated(userId, query); return { data: result.data, meta: { page: query.page, limit: query.limit, total: result.total, totalPages: Math.ceil(result.total / query.limit) } }; }
    async findOne(userId, id) { const category = await this.repository.findById(userId, id); if (!category)
        throw new NotFoundException('Credential category not found'); return category; }
    async update(userId, id, dto) { await this.findOne(userId, id); const name = dto.name?.trim(); if (name && await this.repository.findDuplicate(userId, name, id))
        throw new BadRequestException('Category name already exists'); return this.repository.update(userId, id, { ...(name ? { name } : {}), ...(dto.description !== undefined ? { description: dto.description.trim() || null } : {}) }); }
    async remove(userId, id) { await this.findOne(userId, id); await this.repository.softDelete(userId, id); }
};
CredentialCategoriesService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [CredentialCategoriesRepository])
], CredentialCategoriesService);
export { CredentialCategoriesService };
//# sourceMappingURL=credential-categories.service.js.map