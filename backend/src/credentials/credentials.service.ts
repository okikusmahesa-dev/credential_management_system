import { Injectable, NotFoundException } from '@nestjs/common';
import { EncryptionService } from '../encryption/encryption.service.js';
import { PaginatedResponse } from '../common/pagination/pagination.types.js';
import { CreateCredentialDto } from './dto/create-credential.dto.js';
import { CredentialQueryDto } from './dto/credential-query.dto.js';
import { UpdateCredentialDto } from './dto/update-credential.dto.js';
import { CredentialRecord, CredentialsRepository } from './credentials.repository.js';

export type CredentialResponse = Omit<CredentialRecord, 'encryptedValue'> & { password: string };

@Injectable()
export class CredentialsService {
  constructor(private readonly repository: CredentialsRepository, private readonly encryption: EncryptionService) {}
  private present(record: CredentialRecord): CredentialResponse { const { encryptedValue, ...safe } = record; return { ...safe, password: this.encryption.decrypt(encryptedValue) }; }
  async create(userId: string, dto: CreateCredentialDto): Promise<CredentialResponse> { const record = await this.repository.create(userId, { ...dto, encryptedValue: this.encryption.encrypt(dto.password), name: dto.name.trim(), url: dto.url?.trim() || null, notes: dto.notes?.trim() || null }); return this.present(record as CredentialRecord); }
  async findAll(userId: string, query: CredentialQueryDto): Promise<PaginatedResponse<CredentialResponse>> { const result = await this.repository.findPaginated(userId, query); return { data: result.data.map((record) => this.present(record)), meta: { page: query.page, limit: query.limit, total: result.total, totalPages: Math.ceil(result.total / query.limit) } }; }
  async findOne(userId: string, id: string): Promise<CredentialResponse> { const record = await this.repository.findById(userId, id); if (!record) throw new NotFoundException('Credential not found'); return this.present(record as CredentialRecord); }
  async update(userId: string, id: string, dto: UpdateCredentialDto): Promise<CredentialResponse> { await this.findOne(userId, id); const { password, ...rest } = dto; const data = { ...rest, ...(password !== undefined ? { encryptedValue: this.encryption.encrypt(password) } : {}), ...(rest.name !== undefined ? { name: rest.name.trim() } : {}), ...(rest.url !== undefined ? { url: rest.url.trim() || null } : {}), ...(rest.notes !== undefined ? { notes: rest.notes.trim() || null } : {}) }; const record = await this.repository.update(userId, id, data); return this.present(record as CredentialRecord); }
  async remove(userId: string, id: string): Promise<void> { await this.findOne(userId, id); await this.repository.softDelete(userId, id); }
}
