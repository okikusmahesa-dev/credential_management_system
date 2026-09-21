import { EncryptionService } from '../encryption/encryption.service.js';
import { PaginatedResponse } from '../common/pagination/pagination.types.js';
import { CreateCredentialDto } from './dto/create-credential.dto.js';
import { CredentialQueryDto } from './dto/credential-query.dto.js';
import { UpdateCredentialDto } from './dto/update-credential.dto.js';
import { CredentialRecord, CredentialsRepository } from './credentials.repository.js';
export type CredentialResponse = Omit<CredentialRecord, 'encryptedValue'> & {
    password: string;
};
export declare class CredentialsService {
    private readonly repository;
    private readonly encryption;
    constructor(repository: CredentialsRepository, encryption: EncryptionService);
    private present;
    create(userId: string, dto: CreateCredentialDto): Promise<CredentialResponse>;
    findAll(userId: string, query: CredentialQueryDto): Promise<PaginatedResponse<CredentialResponse>>;
    findOne(userId: string, id: string): Promise<CredentialResponse>;
    update(userId: string, id: string, dto: UpdateCredentialDto): Promise<CredentialResponse>;
    remove(userId: string, id: string): Promise<void>;
}
