import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly CredentialGroup: "CredentialGroup";
    readonly CredentialCategory: "CredentialCategory";
    readonly Credential: "Credential";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly username: "username";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
    readonly deletedBy: "deletedBy";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const CredentialGroupScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly parentId: "parentId";
    readonly name: "name";
    readonly description: "description";
    readonly createdAt: "createdAt";
    readonly createdBy: "createdBy";
    readonly updatedAt: "updatedAt";
    readonly updatedBy: "updatedBy";
    readonly deletedAt: "deletedAt";
    readonly deletedBy: "deletedBy";
};
export type CredentialGroupScalarFieldEnum = (typeof CredentialGroupScalarFieldEnum)[keyof typeof CredentialGroupScalarFieldEnum];
export declare const CredentialCategoryScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly name: "name";
    readonly description: "description";
    readonly createdAt: "createdAt";
    readonly createdBy: "createdBy";
    readonly updatedAt: "updatedAt";
    readonly updatedBy: "updatedBy";
    readonly deletedAt: "deletedAt";
    readonly deletedBy: "deletedBy";
};
export type CredentialCategoryScalarFieldEnum = (typeof CredentialCategoryScalarFieldEnum)[keyof typeof CredentialCategoryScalarFieldEnum];
export declare const CredentialScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly groupId: "groupId";
    readonly categoryId: "categoryId";
    readonly name: "name";
    readonly username: "username";
    readonly encryptedValue: "encryptedValue";
    readonly url: "url";
    readonly notes: "notes";
    readonly createdAt: "createdAt";
    readonly createdBy: "createdBy";
    readonly updatedAt: "updatedAt";
    readonly updatedBy: "updatedBy";
    readonly deletedAt: "deletedAt";
    readonly deletedBy: "deletedBy";
};
export type CredentialScalarFieldEnum = (typeof CredentialScalarFieldEnum)[keyof typeof CredentialScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
