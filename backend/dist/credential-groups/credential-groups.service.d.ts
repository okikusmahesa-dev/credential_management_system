import { PaginatedResponse } from '../common/pagination/pagination.types.js';
import { CreateCredentialGroupDto } from './dto/create-credential-group.dto.js';
import { CredentialGroupQueryDto } from './dto/credential-group-query.dto.js';
import { UpdateCredentialGroupDto } from './dto/update-credential-group.dto.js';
import { CredentialGroupsRepository } from './credential-groups.repository.js';
import { CredentialGroupMenuItem, CredentialGroupWithParent } from './types/credential-group.types.js';
export declare class CredentialGroupsService {
    private readonly repository;
    constructor(repository: CredentialGroupsRepository);
    create(userId: string, dto: CreateCredentialGroupDto): Promise<CredentialGroupWithParent>;
    findAll(userId: string, query: CredentialGroupQueryDto): Promise<PaginatedResponse<CredentialGroupWithParent>>;
    findOne(userId: string, id: string): Promise<CredentialGroupWithParent>;
    update(userId: string, id: string, dto: UpdateCredentialGroupDto): Promise<CredentialGroupWithParent>;
    remove(userId: string, id: string): Promise<void>;
    getMenu(userId: string): Promise<CredentialGroupMenuItem[]>;
    private validateParent;
    private validateNoCycle;
}
