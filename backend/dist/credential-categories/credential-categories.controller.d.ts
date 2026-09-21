import type { AuthenticatedUser } from '../auth/types/auth.types.js';
import { CreateCredentialCategoryDto } from './dto/create-credential-category.dto.js';
import { CredentialCategoryQueryDto } from './dto/credential-category-query.dto.js';
import { UpdateCredentialCategoryDto } from './dto/update-credential-category.dto.js';
import { CredentialCategoriesService } from './credential-categories.service.js';
export declare class CredentialCategoriesController {
    private readonly service;
    constructor(service: CredentialCategoriesService);
    create(user: AuthenticatedUser, dto: CreateCredentialCategoryDto): Promise<{
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
    }>;
    findAll(user: AuthenticatedUser, query: CredentialCategoryQueryDto): Promise<import("../common/pagination/pagination.types.js").PaginatedResponse<{
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
    }>>;
    findOne(user: AuthenticatedUser, id: string): Promise<{
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
    }>;
    update(user: AuthenticatedUser, id: string, dto: UpdateCredentialCategoryDto): Promise<{
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
    }>;
    remove(user: AuthenticatedUser, id: string): Promise<void>;
}
