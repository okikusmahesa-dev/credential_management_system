import { Prisma } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { CredentialCategoryQueryDto } from './dto/credential-category-query.dto.js';
export declare class CredentialCategoriesRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findPaginated(userId: string, query: CredentialCategoryQueryDto): Promise<{
        data: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            deletedBy: string | null;
            description: string | null;
            userId: string;
            createdBy: string | null;
            updatedBy: string | null;
        }[];
        total: number;
    }>;
    findById(userId: string, id: string): Prisma.Prisma__CredentialCategoryClient<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        deletedBy: string | null;
        description: string | null;
        userId: string;
        createdBy: string | null;
        updatedBy: string | null;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    findDuplicate(userId: string, name: string, excludeId?: string): Prisma.Prisma__CredentialCategoryClient<{
        id: string;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    create(userId: string, name: string, description: string | null): Prisma.Prisma__CredentialCategoryClient<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        deletedBy: string | null;
        description: string | null;
        userId: string;
        createdBy: string | null;
        updatedBy: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    update(userId: string, id: string, data: {
        name?: string;
        description?: string | null;
    }): Prisma.Prisma__CredentialCategoryClient<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        deletedBy: string | null;
        description: string | null;
        userId: string;
        createdBy: string | null;
        updatedBy: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    softDelete(userId: string, id: string): Prisma.Prisma__CredentialCategoryClient<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        deletedBy: string | null;
        description: string | null;
        userId: string;
        createdBy: string | null;
        updatedBy: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
}
