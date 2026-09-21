import { Prisma } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { CredentialQueryDto } from './dto/credential-query.dto.js';
export interface CredentialRecord {
    id: string;
    userId: string;
    groupId: string;
    categoryId: string;
    name: string;
    username: string;
    encryptedValue: string;
    url: string | null;
    notes: string | null;
    createdAt: Date;
    updatedAt: Date;
    group: {
        id: string;
        name: string;
    };
    category: {
        id: string;
        name: string;
    };
}
export declare class CredentialsRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private readonly include;
    findPaginated(userId: string, query: CredentialQueryDto): Promise<{
        data: CredentialRecord[];
        total: number;
    }>;
    findById(userId: string, id: string): Prisma.Prisma__CredentialClient<({
        group: {
            name: string;
            id: string;
        };
        category: {
            name: string;
            id: string;
        };
    } & {
        name: string;
        id: string;
        username: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        deletedBy: string | null;
        userId: string;
        createdBy: string | null;
        updatedBy: string | null;
        groupId: string;
        categoryId: string;
        url: string | null;
        notes: string | null;
        encryptedValue: string;
    }) | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    create(userId: string, data: {
        groupId: string;
        categoryId: string;
        name: string;
        username: string;
        encryptedValue: string;
        url?: string | null;
        notes?: string | null;
    }): Prisma.Prisma__CredentialClient<{
        group: {
            name: string;
            id: string;
        };
        category: {
            name: string;
            id: string;
        };
    } & {
        name: string;
        id: string;
        username: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        deletedBy: string | null;
        userId: string;
        createdBy: string | null;
        updatedBy: string | null;
        groupId: string;
        categoryId: string;
        url: string | null;
        notes: string | null;
        encryptedValue: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    update(userId: string, id: string, data: Partial<{
        groupId: string;
        categoryId: string;
        name: string;
        username: string;
        encryptedValue: string;
        url: string | null;
        notes: string | null;
    }>): Prisma.Prisma__CredentialClient<{
        group: {
            name: string;
            id: string;
        };
        category: {
            name: string;
            id: string;
        };
    } & {
        name: string;
        id: string;
        username: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        deletedBy: string | null;
        userId: string;
        createdBy: string | null;
        updatedBy: string | null;
        groupId: string;
        categoryId: string;
        url: string | null;
        notes: string | null;
        encryptedValue: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    softDelete(userId: string, id: string): Prisma.Prisma__CredentialClient<{
        name: string;
        id: string;
        username: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        deletedBy: string | null;
        userId: string;
        createdBy: string | null;
        updatedBy: string | null;
        groupId: string;
        categoryId: string;
        url: string | null;
        notes: string | null;
        encryptedValue: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
}
