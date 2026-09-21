import type { AuthenticatedUser } from '../auth/types/auth.types.js';
import { CreateCredentialDto } from './dto/create-credential.dto.js';
import { CredentialQueryDto } from './dto/credential-query.dto.js';
import { UpdateCredentialDto } from './dto/update-credential.dto.js';
import { CredentialsService } from './credentials.service.js';
export declare class CredentialsController {
    private readonly service;
    constructor(service: CredentialsService);
    create(user: AuthenticatedUser, dto: CreateCredentialDto): Promise<import("./credentials.service.js").CredentialResponse>;
    findAll(user: AuthenticatedUser, query: CredentialQueryDto): Promise<import("../common/pagination/pagination.types.js").PaginatedResponse<import("./credentials.service.js").CredentialResponse>>;
    findOne(user: AuthenticatedUser, id: string): Promise<import("./credentials.service.js").CredentialResponse>;
    update(user: AuthenticatedUser, id: string, dto: UpdateCredentialDto): Promise<import("./credentials.service.js").CredentialResponse>;
    remove(user: AuthenticatedUser, id: string): Promise<void>;
}
