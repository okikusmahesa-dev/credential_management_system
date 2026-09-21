import { PaginatedResponse } from '../common/pagination/pagination.types.js';
import { CreateCredentialCategoryDto } from './dto/create-credential-category.dto.js';
import { CredentialCategoryQueryDto } from './dto/credential-category-query.dto.js';
import { UpdateCredentialCategoryDto } from './dto/update-credential-category.dto.js';
import { CredentialCategoriesRepository } from './credential-categories.repository.js';
export declare class CredentialCategoriesService {
    private readonly repository;
    constructor(repository: CredentialCategoriesRepository);
    create(userId: string, dto: CreateCredentialCategoryDto): Promise<{
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
    findAll(userId: string, query: CredentialCategoryQueryDto): Promise<PaginatedResponse<Awaited<ReturnType<CredentialCategoriesRepository['findById']>> extends infer T ? NonNullable<T> : never>>;
    findOne(userId: string, id: string): Promise<{
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
    update(userId: string, id: string, dto: UpdateCredentialCategoryDto): Promise<{
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
    remove(userId: string, id: string): Promise<void>;
}
