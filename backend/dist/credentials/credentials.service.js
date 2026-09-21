var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NotFoundException } from '@nestjs/common';
import { EncryptionService } from '../encryption/encryption.service.js';
import { CredentialsRepository } from './credentials.repository.js';
let CredentialsService = class CredentialsService {
    repository;
    encryption;
    constructor(repository, encryption) {
        this.repository = repository;
        this.encryption = encryption;
    }
    present(record) { const { encryptedValue, ...safe } = record; return { ...safe, password: this.encryption.decrypt(encryptedValue) }; }
    async create(userId, dto) { const record = await this.repository.create(userId, { ...dto, encryptedValue: this.encryption.encrypt(dto.password), name: dto.name.trim(), url: dto.url?.trim() || null, notes: dto.notes?.trim() || null }); return this.present(record); }
    async findAll(userId, query) { const result = await this.repository.findPaginated(userId, query); return { data: result.data.map((record) => this.present(record)), meta: { page: query.page, limit: query.limit, total: result.total, totalPages: Math.ceil(result.total / query.limit) } }; }
    async findOne(userId, id) { const record = await this.repository.findById(userId, id); if (!record)
        throw new NotFoundException('Credential not found'); return this.present(record); }
    async update(userId, id, dto) { await this.findOne(userId, id); const { password, ...rest } = dto; const data = { ...rest, ...(password !== undefined ? { encryptedValue: this.encryption.encrypt(password) } : {}), ...(rest.name !== undefined ? { name: rest.name.trim() } : {}), ...(rest.url !== undefined ? { url: rest.url.trim() || null } : {}), ...(rest.notes !== undefined ? { notes: rest.notes.trim() || null } : {}) }; const record = await this.repository.update(userId, id, data); return this.present(record); }
    async remove(userId, id) { await this.findOne(userId, id); await this.repository.softDelete(userId, id); }
};
CredentialsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [CredentialsRepository, EncryptionService])
], CredentialsService);
export { CredentialsService };
//# sourceMappingURL=credentials.service.js.map