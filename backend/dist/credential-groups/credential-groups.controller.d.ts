import type { AuthenticatedUser } from '../auth/types/auth.types.js';
import { CreateCredentialGroupDto } from './dto/create-credential-group.dto.js';
import { CredentialGroupQueryDto } from './dto/credential-group-query.dto.js';
import { UpdateCredentialGroupDto } from './dto/update-credential-group.dto.js';
import { CredentialGroupsService } from './credential-groups.service.js';
export declare class CredentialGroupsController {
    private readonly service;
    constructor(service: CredentialGroupsService);
    create(user: AuthenticatedUser, dto: CreateCredentialGroupDto): Promise<import("./types/credential-group.types.js").CredentialGroupWithParent>;
    findAll(user: AuthenticatedUser, query: CredentialGroupQueryDto): Promise<import("../common/pagination/pagination.types.js").PaginatedResponse<import("./types/credential-group.types.js").CredentialGroupWithParent>>;
    menu(user: AuthenticatedUser): Promise<import("./types/credential-group.types.js").CredentialGroupMenuItem[]>;
    findOne(user: AuthenticatedUser, id: string): Promise<import("./types/credential-group.types.js").CredentialGroupWithParent>;
    update(user: AuthenticatedUser, id: string, dto: UpdateCredentialGroupDto): Promise<import("./types/credential-group.types.js").CredentialGroupWithParent>;
    remove(user: AuthenticatedUser, id: string): Promise<void>;
}
