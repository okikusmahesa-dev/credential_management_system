import { PrismaService } from '../prisma/prisma.service.js';
import { CredentialGroupWithParent } from './types/credential-group.types.js';
import { CredentialGroupQueryDto } from './dto/credential-group-query.dto.js';
export declare class CredentialGroupsRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findPaginated(userId: string, query: CredentialGroupQueryDto): Promise<{
        data: CredentialGroupWithParent[];
        total: number;
    }>;
    findById(userId: string, id: string): Promise<CredentialGroupWithParent | null>;
    findActiveById(userId: string, id: string): Promise<CredentialGroupWithParent | null>;
    findDuplicate(userId: string, name: string, parentId: string | null, excludeId?: string): Promise<boolean>;
    create(userId: string, name: string, description: string | null, parentId: string | null): Promise<CredentialGroupWithParent>;
    update(userId: string, id: string, data: {
        name?: string;
        description?: string | null;
        parentId?: string | null;
    }): Promise<CredentialGroupWithParent>;
    countChildren(userId: string, groupId: string): Promise<number>;
    countCredentials(userId: string, groupId: string): Promise<number>;
    softDelete(userId: string, id: string): Promise<void>;
    findAllForMenu(userId: string): Promise<Array<{
        id: string;
        name: string;
        description: string | null;
        parentId: string | null;
    }>>;
}
