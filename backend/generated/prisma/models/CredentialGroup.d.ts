import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CredentialGroupModel = runtime.Types.Result.DefaultSelection<Prisma.$CredentialGroupPayload>;
export type AggregateCredentialGroup = {
    _count: CredentialGroupCountAggregateOutputType | null;
    _min: CredentialGroupMinAggregateOutputType | null;
    _max: CredentialGroupMaxAggregateOutputType | null;
};
export type CredentialGroupMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    parentId: string | null;
    name: string | null;
    description: string | null;
    createdAt: Date | null;
    createdBy: string | null;
    updatedAt: Date | null;
    updatedBy: string | null;
    deletedAt: Date | null;
    deletedBy: string | null;
};
export type CredentialGroupMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    parentId: string | null;
    name: string | null;
    description: string | null;
    createdAt: Date | null;
    createdBy: string | null;
    updatedAt: Date | null;
    updatedBy: string | null;
    deletedAt: Date | null;
    deletedBy: string | null;
};
export type CredentialGroupCountAggregateOutputType = {
    id: number;
    userId: number;
    parentId: number;
    name: number;
    description: number;
    createdAt: number;
    createdBy: number;
    updatedAt: number;
    updatedBy: number;
    deletedAt: number;
    deletedBy: number;
    _all: number;
};
export type CredentialGroupMinAggregateInputType = {
    id?: true;
    userId?: true;
    parentId?: true;
    name?: true;
    description?: true;
    createdAt?: true;
    createdBy?: true;
    updatedAt?: true;
    updatedBy?: true;
    deletedAt?: true;
    deletedBy?: true;
};
export type CredentialGroupMaxAggregateInputType = {
    id?: true;
    userId?: true;
    parentId?: true;
    name?: true;
    description?: true;
    createdAt?: true;
    createdBy?: true;
    updatedAt?: true;
    updatedBy?: true;
    deletedAt?: true;
    deletedBy?: true;
};
export type CredentialGroupCountAggregateInputType = {
    id?: true;
    userId?: true;
    parentId?: true;
    name?: true;
    description?: true;
    createdAt?: true;
    createdBy?: true;
    updatedAt?: true;
    updatedBy?: true;
    deletedAt?: true;
    deletedBy?: true;
    _all?: true;
};
export type CredentialGroupAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CredentialGroupWhereInput;
    orderBy?: Prisma.CredentialGroupOrderByWithRelationInput | Prisma.CredentialGroupOrderByWithRelationInput[];
    cursor?: Prisma.CredentialGroupWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CredentialGroupCountAggregateInputType;
    _min?: CredentialGroupMinAggregateInputType;
    _max?: CredentialGroupMaxAggregateInputType;
};
export type GetCredentialGroupAggregateType<T extends CredentialGroupAggregateArgs> = {
    [P in keyof T & keyof AggregateCredentialGroup]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCredentialGroup[P]> : Prisma.GetScalarType<T[P], AggregateCredentialGroup[P]>;
};
export type CredentialGroupGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CredentialGroupWhereInput;
    orderBy?: Prisma.CredentialGroupOrderByWithAggregationInput | Prisma.CredentialGroupOrderByWithAggregationInput[];
    by: Prisma.CredentialGroupScalarFieldEnum[] | Prisma.CredentialGroupScalarFieldEnum;
    having?: Prisma.CredentialGroupScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CredentialGroupCountAggregateInputType | true;
    _min?: CredentialGroupMinAggregateInputType;
    _max?: CredentialGroupMaxAggregateInputType;
};
export type CredentialGroupGroupByOutputType = {
    id: string;
    userId: string;
    parentId: string | null;
    name: string;
    description: string | null;
    createdAt: Date;
    createdBy: string | null;
    updatedAt: Date;
    updatedBy: string | null;
    deletedAt: Date | null;
    deletedBy: string | null;
    _count: CredentialGroupCountAggregateOutputType | null;
    _min: CredentialGroupMinAggregateOutputType | null;
    _max: CredentialGroupMaxAggregateOutputType | null;
};
export type GetCredentialGroupGroupByPayload<T extends CredentialGroupGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CredentialGroupGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CredentialGroupGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CredentialGroupGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CredentialGroupGroupByOutputType[P]>;
}>>;
export type CredentialGroupWhereInput = {
    AND?: Prisma.CredentialGroupWhereInput | Prisma.CredentialGroupWhereInput[];
    OR?: Prisma.CredentialGroupWhereInput[];
    NOT?: Prisma.CredentialGroupWhereInput | Prisma.CredentialGroupWhereInput[];
    id?: Prisma.UuidFilter<"CredentialGroup"> | string;
    userId?: Prisma.UuidFilter<"CredentialGroup"> | string;
    parentId?: Prisma.UuidNullableFilter<"CredentialGroup"> | string | null;
    name?: Prisma.StringFilter<"CredentialGroup"> | string;
    description?: Prisma.StringNullableFilter<"CredentialGroup"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CredentialGroup"> | Date | string;
    createdBy?: Prisma.UuidNullableFilter<"CredentialGroup"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"CredentialGroup"> | Date | string;
    updatedBy?: Prisma.UuidNullableFilter<"CredentialGroup"> | string | null;
    deletedAt?: Prisma.DateTimeNullableFilter<"CredentialGroup"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableFilter<"CredentialGroup"> | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    parent?: Prisma.XOR<Prisma.CredentialGroupNullableScalarRelationFilter, Prisma.CredentialGroupWhereInput> | null;
    children?: Prisma.CredentialGroupListRelationFilter;
    credentials?: Prisma.CredentialListRelationFilter;
};
export type CredentialGroupOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    parentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    updatedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    deletedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    parent?: Prisma.CredentialGroupOrderByWithRelationInput;
    children?: Prisma.CredentialGroupOrderByRelationAggregateInput;
    credentials?: Prisma.CredentialOrderByRelationAggregateInput;
};
export type CredentialGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CredentialGroupWhereInput | Prisma.CredentialGroupWhereInput[];
    OR?: Prisma.CredentialGroupWhereInput[];
    NOT?: Prisma.CredentialGroupWhereInput | Prisma.CredentialGroupWhereInput[];
    userId?: Prisma.UuidFilter<"CredentialGroup"> | string;
    parentId?: Prisma.UuidNullableFilter<"CredentialGroup"> | string | null;
    name?: Prisma.StringFilter<"CredentialGroup"> | string;
    description?: Prisma.StringNullableFilter<"CredentialGroup"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CredentialGroup"> | Date | string;
    createdBy?: Prisma.UuidNullableFilter<"CredentialGroup"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"CredentialGroup"> | Date | string;
    updatedBy?: Prisma.UuidNullableFilter<"CredentialGroup"> | string | null;
    deletedAt?: Prisma.DateTimeNullableFilter<"CredentialGroup"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableFilter<"CredentialGroup"> | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    parent?: Prisma.XOR<Prisma.CredentialGroupNullableScalarRelationFilter, Prisma.CredentialGroupWhereInput> | null;
    children?: Prisma.CredentialGroupListRelationFilter;
    credentials?: Prisma.CredentialListRelationFilter;
}, "id">;
export type CredentialGroupOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    parentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    updatedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    deletedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.CredentialGroupCountOrderByAggregateInput;
    _max?: Prisma.CredentialGroupMaxOrderByAggregateInput;
    _min?: Prisma.CredentialGroupMinOrderByAggregateInput;
};
export type CredentialGroupScalarWhereWithAggregatesInput = {
    AND?: Prisma.CredentialGroupScalarWhereWithAggregatesInput | Prisma.CredentialGroupScalarWhereWithAggregatesInput[];
    OR?: Prisma.CredentialGroupScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CredentialGroupScalarWhereWithAggregatesInput | Prisma.CredentialGroupScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"CredentialGroup"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"CredentialGroup"> | string;
    parentId?: Prisma.UuidNullableWithAggregatesFilter<"CredentialGroup"> | string | null;
    name?: Prisma.StringWithAggregatesFilter<"CredentialGroup"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"CredentialGroup"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CredentialGroup"> | Date | string;
    createdBy?: Prisma.UuidNullableWithAggregatesFilter<"CredentialGroup"> | string | null;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"CredentialGroup"> | Date | string;
    updatedBy?: Prisma.UuidNullableWithAggregatesFilter<"CredentialGroup"> | string | null;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"CredentialGroup"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableWithAggregatesFilter<"CredentialGroup"> | string | null;
};
export type CredentialGroupCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    createdBy?: string | null;
    updatedAt?: Date | string;
    updatedBy?: string | null;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    user: Prisma.UserCreateNestedOneWithoutGroupsInput;
    parent?: Prisma.CredentialGroupCreateNestedOneWithoutChildrenInput;
    children?: Prisma.CredentialGroupCreateNestedManyWithoutParentInput;
    credentials?: Prisma.CredentialCreateNestedManyWithoutGroupInput;
};
export type CredentialGroupUncheckedCreateInput = {
    id?: string;
    userId: string;
    parentId?: string | null;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    createdBy?: string | null;
    updatedAt?: Date | string;
    updatedBy?: string | null;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    children?: Prisma.CredentialGroupUncheckedCreateNestedManyWithoutParentInput;
    credentials?: Prisma.CredentialUncheckedCreateNestedManyWithoutGroupInput;
};
export type CredentialGroupUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutGroupsNestedInput;
    parent?: Prisma.CredentialGroupUpdateOneWithoutChildrenNestedInput;
    children?: Prisma.CredentialGroupUpdateManyWithoutParentNestedInput;
    credentials?: Prisma.CredentialUpdateManyWithoutGroupNestedInput;
};
export type CredentialGroupUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    parentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    children?: Prisma.CredentialGroupUncheckedUpdateManyWithoutParentNestedInput;
    credentials?: Prisma.CredentialUncheckedUpdateManyWithoutGroupNestedInput;
};
export type CredentialGroupCreateManyInput = {
    id?: string;
    userId: string;
    parentId?: string | null;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    createdBy?: string | null;
    updatedAt?: Date | string;
    updatedBy?: string | null;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
};
export type CredentialGroupUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CredentialGroupUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    parentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CredentialGroupListRelationFilter = {
    every?: Prisma.CredentialGroupWhereInput;
    some?: Prisma.CredentialGroupWhereInput;
    none?: Prisma.CredentialGroupWhereInput;
};
export type CredentialGroupOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CredentialGroupNullableScalarRelationFilter = {
    is?: Prisma.CredentialGroupWhereInput | null;
    isNot?: Prisma.CredentialGroupWhereInput | null;
};
export type CredentialGroupCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    parentId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    updatedBy?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    deletedBy?: Prisma.SortOrder;
};
export type CredentialGroupMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    parentId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    updatedBy?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    deletedBy?: Prisma.SortOrder;
};
export type CredentialGroupMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    parentId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    updatedBy?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    deletedBy?: Prisma.SortOrder;
};
export type CredentialGroupScalarRelationFilter = {
    is?: Prisma.CredentialGroupWhereInput;
    isNot?: Prisma.CredentialGroupWhereInput;
};
export type CredentialGroupCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CredentialGroupCreateWithoutUserInput, Prisma.CredentialGroupUncheckedCreateWithoutUserInput> | Prisma.CredentialGroupCreateWithoutUserInput[] | Prisma.CredentialGroupUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CredentialGroupCreateOrConnectWithoutUserInput | Prisma.CredentialGroupCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CredentialGroupCreateManyUserInputEnvelope;
    connect?: Prisma.CredentialGroupWhereUniqueInput | Prisma.CredentialGroupWhereUniqueInput[];
};
export type CredentialGroupUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CredentialGroupCreateWithoutUserInput, Prisma.CredentialGroupUncheckedCreateWithoutUserInput> | Prisma.CredentialGroupCreateWithoutUserInput[] | Prisma.CredentialGroupUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CredentialGroupCreateOrConnectWithoutUserInput | Prisma.CredentialGroupCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CredentialGroupCreateManyUserInputEnvelope;
    connect?: Prisma.CredentialGroupWhereUniqueInput | Prisma.CredentialGroupWhereUniqueInput[];
};
export type CredentialGroupUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CredentialGroupCreateWithoutUserInput, Prisma.CredentialGroupUncheckedCreateWithoutUserInput> | Prisma.CredentialGroupCreateWithoutUserInput[] | Prisma.CredentialGroupUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CredentialGroupCreateOrConnectWithoutUserInput | Prisma.CredentialGroupCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CredentialGroupUpsertWithWhereUniqueWithoutUserInput | Prisma.CredentialGroupUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CredentialGroupCreateManyUserInputEnvelope;
    set?: Prisma.CredentialGroupWhereUniqueInput | Prisma.CredentialGroupWhereUniqueInput[];
    disconnect?: Prisma.CredentialGroupWhereUniqueInput | Prisma.CredentialGroupWhereUniqueInput[];
    delete?: Prisma.CredentialGroupWhereUniqueInput | Prisma.CredentialGroupWhereUniqueInput[];
    connect?: Prisma.CredentialGroupWhereUniqueInput | Prisma.CredentialGroupWhereUniqueInput[];
    update?: Prisma.CredentialGroupUpdateWithWhereUniqueWithoutUserInput | Prisma.CredentialGroupUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CredentialGroupUpdateManyWithWhereWithoutUserInput | Prisma.CredentialGroupUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CredentialGroupScalarWhereInput | Prisma.CredentialGroupScalarWhereInput[];
};
export type CredentialGroupUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CredentialGroupCreateWithoutUserInput, Prisma.CredentialGroupUncheckedCreateWithoutUserInput> | Prisma.CredentialGroupCreateWithoutUserInput[] | Prisma.CredentialGroupUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CredentialGroupCreateOrConnectWithoutUserInput | Prisma.CredentialGroupCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CredentialGroupUpsertWithWhereUniqueWithoutUserInput | Prisma.CredentialGroupUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CredentialGroupCreateManyUserInputEnvelope;
    set?: Prisma.CredentialGroupWhereUniqueInput | Prisma.CredentialGroupWhereUniqueInput[];
    disconnect?: Prisma.CredentialGroupWhereUniqueInput | Prisma.CredentialGroupWhereUniqueInput[];
    delete?: Prisma.CredentialGroupWhereUniqueInput | Prisma.CredentialGroupWhereUniqueInput[];
    connect?: Prisma.CredentialGroupWhereUniqueInput | Prisma.CredentialGroupWhereUniqueInput[];
    update?: Prisma.CredentialGroupUpdateWithWhereUniqueWithoutUserInput | Prisma.CredentialGroupUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CredentialGroupUpdateManyWithWhereWithoutUserInput | Prisma.CredentialGroupUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CredentialGroupScalarWhereInput | Prisma.CredentialGroupScalarWhereInput[];
};
export type CredentialGroupCreateNestedOneWithoutChildrenInput = {
    create?: Prisma.XOR<Prisma.CredentialGroupCreateWithoutChildrenInput, Prisma.CredentialGroupUncheckedCreateWithoutChildrenInput>;
    connectOrCreate?: Prisma.CredentialGroupCreateOrConnectWithoutChildrenInput;
    connect?: Prisma.CredentialGroupWhereUniqueInput;
};
export type CredentialGroupCreateNestedManyWithoutParentInput = {
    create?: Prisma.XOR<Prisma.CredentialGroupCreateWithoutParentInput, Prisma.CredentialGroupUncheckedCreateWithoutParentInput> | Prisma.CredentialGroupCreateWithoutParentInput[] | Prisma.CredentialGroupUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.CredentialGroupCreateOrConnectWithoutParentInput | Prisma.CredentialGroupCreateOrConnectWithoutParentInput[];
    createMany?: Prisma.CredentialGroupCreateManyParentInputEnvelope;
    connect?: Prisma.CredentialGroupWhereUniqueInput | Prisma.CredentialGroupWhereUniqueInput[];
};
export type CredentialGroupUncheckedCreateNestedManyWithoutParentInput = {
    create?: Prisma.XOR<Prisma.CredentialGroupCreateWithoutParentInput, Prisma.CredentialGroupUncheckedCreateWithoutParentInput> | Prisma.CredentialGroupCreateWithoutParentInput[] | Prisma.CredentialGroupUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.CredentialGroupCreateOrConnectWithoutParentInput | Prisma.CredentialGroupCreateOrConnectWithoutParentInput[];
    createMany?: Prisma.CredentialGroupCreateManyParentInputEnvelope;
    connect?: Prisma.CredentialGroupWhereUniqueInput | Prisma.CredentialGroupWhereUniqueInput[];
};
export type CredentialGroupUpdateOneWithoutChildrenNestedInput = {
    create?: Prisma.XOR<Prisma.CredentialGroupCreateWithoutChildrenInput, Prisma.CredentialGroupUncheckedCreateWithoutChildrenInput>;
    connectOrCreate?: Prisma.CredentialGroupCreateOrConnectWithoutChildrenInput;
    upsert?: Prisma.CredentialGroupUpsertWithoutChildrenInput;
    disconnect?: Prisma.CredentialGroupWhereInput | boolean;
    delete?: Prisma.CredentialGroupWhereInput | boolean;
    connect?: Prisma.CredentialGroupWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CredentialGroupUpdateToOneWithWhereWithoutChildrenInput, Prisma.CredentialGroupUpdateWithoutChildrenInput>, Prisma.CredentialGroupUncheckedUpdateWithoutChildrenInput>;
};
export type CredentialGroupUpdateManyWithoutParentNestedInput = {
    create?: Prisma.XOR<Prisma.CredentialGroupCreateWithoutParentInput, Prisma.CredentialGroupUncheckedCreateWithoutParentInput> | Prisma.CredentialGroupCreateWithoutParentInput[] | Prisma.CredentialGroupUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.CredentialGroupCreateOrConnectWithoutParentInput | Prisma.CredentialGroupCreateOrConnectWithoutParentInput[];
    upsert?: Prisma.CredentialGroupUpsertWithWhereUniqueWithoutParentInput | Prisma.CredentialGroupUpsertWithWhereUniqueWithoutParentInput[];
    createMany?: Prisma.CredentialGroupCreateManyParentInputEnvelope;
    set?: Prisma.CredentialGroupWhereUniqueInput | Prisma.CredentialGroupWhereUniqueInput[];
    disconnect?: Prisma.CredentialGroupWhereUniqueInput | Prisma.CredentialGroupWhereUniqueInput[];
    delete?: Prisma.CredentialGroupWhereUniqueInput | Prisma.CredentialGroupWhereUniqueInput[];
    connect?: Prisma.CredentialGroupWhereUniqueInput | Prisma.CredentialGroupWhereUniqueInput[];
    update?: Prisma.CredentialGroupUpdateWithWhereUniqueWithoutParentInput | Prisma.CredentialGroupUpdateWithWhereUniqueWithoutParentInput[];
    updateMany?: Prisma.CredentialGroupUpdateManyWithWhereWithoutParentInput | Prisma.CredentialGroupUpdateManyWithWhereWithoutParentInput[];
    deleteMany?: Prisma.CredentialGroupScalarWhereInput | Prisma.CredentialGroupScalarWhereInput[];
};
export type CredentialGroupUncheckedUpdateManyWithoutParentNestedInput = {
    create?: Prisma.XOR<Prisma.CredentialGroupCreateWithoutParentInput, Prisma.CredentialGroupUncheckedCreateWithoutParentInput> | Prisma.CredentialGroupCreateWithoutParentInput[] | Prisma.CredentialGroupUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.CredentialGroupCreateOrConnectWithoutParentInput | Prisma.CredentialGroupCreateOrConnectWithoutParentInput[];
    upsert?: Prisma.CredentialGroupUpsertWithWhereUniqueWithoutParentInput | Prisma.CredentialGroupUpsertWithWhereUniqueWithoutParentInput[];
    createMany?: Prisma.CredentialGroupCreateManyParentInputEnvelope;
    set?: Prisma.CredentialGroupWhereUniqueInput | Prisma.CredentialGroupWhereUniqueInput[];
    disconnect?: Prisma.CredentialGroupWhereUniqueInput | Prisma.CredentialGroupWhereUniqueInput[];
    delete?: Prisma.CredentialGroupWhereUniqueInput | Prisma.CredentialGroupWhereUniqueInput[];
    connect?: Prisma.CredentialGroupWhereUniqueInput | Prisma.CredentialGroupWhereUniqueInput[];
    update?: Prisma.CredentialGroupUpdateWithWhereUniqueWithoutParentInput | Prisma.CredentialGroupUpdateWithWhereUniqueWithoutParentInput[];
    updateMany?: Prisma.CredentialGroupUpdateManyWithWhereWithoutParentInput | Prisma.CredentialGroupUpdateManyWithWhereWithoutParentInput[];
    deleteMany?: Prisma.CredentialGroupScalarWhereInput | Prisma.CredentialGroupScalarWhereInput[];
};
export type CredentialGroupCreateNestedOneWithoutCredentialsInput = {
    create?: Prisma.XOR<Prisma.CredentialGroupCreateWithoutCredentialsInput, Prisma.CredentialGroupUncheckedCreateWithoutCredentialsInput>;
    connectOrCreate?: Prisma.CredentialGroupCreateOrConnectWithoutCredentialsInput;
    connect?: Prisma.CredentialGroupWhereUniqueInput;
};
export type CredentialGroupUpdateOneRequiredWithoutCredentialsNestedInput = {
    create?: Prisma.XOR<Prisma.CredentialGroupCreateWithoutCredentialsInput, Prisma.CredentialGroupUncheckedCreateWithoutCredentialsInput>;
    connectOrCreate?: Prisma.CredentialGroupCreateOrConnectWithoutCredentialsInput;
    upsert?: Prisma.CredentialGroupUpsertWithoutCredentialsInput;
    connect?: Prisma.CredentialGroupWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CredentialGroupUpdateToOneWithWhereWithoutCredentialsInput, Prisma.CredentialGroupUpdateWithoutCredentialsInput>, Prisma.CredentialGroupUncheckedUpdateWithoutCredentialsInput>;
};
export type CredentialGroupCreateWithoutUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    createdBy?: string | null;
    updatedAt?: Date | string;
    updatedBy?: string | null;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    parent?: Prisma.CredentialGroupCreateNestedOneWithoutChildrenInput;
    children?: Prisma.CredentialGroupCreateNestedManyWithoutParentInput;
    credentials?: Prisma.CredentialCreateNestedManyWithoutGroupInput;
};
export type CredentialGroupUncheckedCreateWithoutUserInput = {
    id?: string;
    parentId?: string | null;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    createdBy?: string | null;
    updatedAt?: Date | string;
    updatedBy?: string | null;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    children?: Prisma.CredentialGroupUncheckedCreateNestedManyWithoutParentInput;
    credentials?: Prisma.CredentialUncheckedCreateNestedManyWithoutGroupInput;
};
export type CredentialGroupCreateOrConnectWithoutUserInput = {
    where: Prisma.CredentialGroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.CredentialGroupCreateWithoutUserInput, Prisma.CredentialGroupUncheckedCreateWithoutUserInput>;
};
export type CredentialGroupCreateManyUserInputEnvelope = {
    data: Prisma.CredentialGroupCreateManyUserInput | Prisma.CredentialGroupCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type CredentialGroupUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.CredentialGroupWhereUniqueInput;
    update: Prisma.XOR<Prisma.CredentialGroupUpdateWithoutUserInput, Prisma.CredentialGroupUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.CredentialGroupCreateWithoutUserInput, Prisma.CredentialGroupUncheckedCreateWithoutUserInput>;
};
export type CredentialGroupUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.CredentialGroupWhereUniqueInput;
    data: Prisma.XOR<Prisma.CredentialGroupUpdateWithoutUserInput, Prisma.CredentialGroupUncheckedUpdateWithoutUserInput>;
};
export type CredentialGroupUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.CredentialGroupScalarWhereInput;
    data: Prisma.XOR<Prisma.CredentialGroupUpdateManyMutationInput, Prisma.CredentialGroupUncheckedUpdateManyWithoutUserInput>;
};
export type CredentialGroupScalarWhereInput = {
    AND?: Prisma.CredentialGroupScalarWhereInput | Prisma.CredentialGroupScalarWhereInput[];
    OR?: Prisma.CredentialGroupScalarWhereInput[];
    NOT?: Prisma.CredentialGroupScalarWhereInput | Prisma.CredentialGroupScalarWhereInput[];
    id?: Prisma.UuidFilter<"CredentialGroup"> | string;
    userId?: Prisma.UuidFilter<"CredentialGroup"> | string;
    parentId?: Prisma.UuidNullableFilter<"CredentialGroup"> | string | null;
    name?: Prisma.StringFilter<"CredentialGroup"> | string;
    description?: Prisma.StringNullableFilter<"CredentialGroup"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CredentialGroup"> | Date | string;
    createdBy?: Prisma.UuidNullableFilter<"CredentialGroup"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"CredentialGroup"> | Date | string;
    updatedBy?: Prisma.UuidNullableFilter<"CredentialGroup"> | string | null;
    deletedAt?: Prisma.DateTimeNullableFilter<"CredentialGroup"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableFilter<"CredentialGroup"> | string | null;
};
export type CredentialGroupCreateWithoutChildrenInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    createdBy?: string | null;
    updatedAt?: Date | string;
    updatedBy?: string | null;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    user: Prisma.UserCreateNestedOneWithoutGroupsInput;
    parent?: Prisma.CredentialGroupCreateNestedOneWithoutChildrenInput;
    credentials?: Prisma.CredentialCreateNestedManyWithoutGroupInput;
};
export type CredentialGroupUncheckedCreateWithoutChildrenInput = {
    id?: string;
    userId: string;
    parentId?: string | null;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    createdBy?: string | null;
    updatedAt?: Date | string;
    updatedBy?: string | null;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    credentials?: Prisma.CredentialUncheckedCreateNestedManyWithoutGroupInput;
};
export type CredentialGroupCreateOrConnectWithoutChildrenInput = {
    where: Prisma.CredentialGroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.CredentialGroupCreateWithoutChildrenInput, Prisma.CredentialGroupUncheckedCreateWithoutChildrenInput>;
};
export type CredentialGroupCreateWithoutParentInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    createdBy?: string | null;
    updatedAt?: Date | string;
    updatedBy?: string | null;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    user: Prisma.UserCreateNestedOneWithoutGroupsInput;
    children?: Prisma.CredentialGroupCreateNestedManyWithoutParentInput;
    credentials?: Prisma.CredentialCreateNestedManyWithoutGroupInput;
};
export type CredentialGroupUncheckedCreateWithoutParentInput = {
    id?: string;
    userId: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    createdBy?: string | null;
    updatedAt?: Date | string;
    updatedBy?: string | null;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    children?: Prisma.CredentialGroupUncheckedCreateNestedManyWithoutParentInput;
    credentials?: Prisma.CredentialUncheckedCreateNestedManyWithoutGroupInput;
};
export type CredentialGroupCreateOrConnectWithoutParentInput = {
    where: Prisma.CredentialGroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.CredentialGroupCreateWithoutParentInput, Prisma.CredentialGroupUncheckedCreateWithoutParentInput>;
};
export type CredentialGroupCreateManyParentInputEnvelope = {
    data: Prisma.CredentialGroupCreateManyParentInput | Prisma.CredentialGroupCreateManyParentInput[];
    skipDuplicates?: boolean;
};
export type CredentialGroupUpsertWithoutChildrenInput = {
    update: Prisma.XOR<Prisma.CredentialGroupUpdateWithoutChildrenInput, Prisma.CredentialGroupUncheckedUpdateWithoutChildrenInput>;
    create: Prisma.XOR<Prisma.CredentialGroupCreateWithoutChildrenInput, Prisma.CredentialGroupUncheckedCreateWithoutChildrenInput>;
    where?: Prisma.CredentialGroupWhereInput;
};
export type CredentialGroupUpdateToOneWithWhereWithoutChildrenInput = {
    where?: Prisma.CredentialGroupWhereInput;
    data: Prisma.XOR<Prisma.CredentialGroupUpdateWithoutChildrenInput, Prisma.CredentialGroupUncheckedUpdateWithoutChildrenInput>;
};
export type CredentialGroupUpdateWithoutChildrenInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutGroupsNestedInput;
    parent?: Prisma.CredentialGroupUpdateOneWithoutChildrenNestedInput;
    credentials?: Prisma.CredentialUpdateManyWithoutGroupNestedInput;
};
export type CredentialGroupUncheckedUpdateWithoutChildrenInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    parentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    credentials?: Prisma.CredentialUncheckedUpdateManyWithoutGroupNestedInput;
};
export type CredentialGroupUpsertWithWhereUniqueWithoutParentInput = {
    where: Prisma.CredentialGroupWhereUniqueInput;
    update: Prisma.XOR<Prisma.CredentialGroupUpdateWithoutParentInput, Prisma.CredentialGroupUncheckedUpdateWithoutParentInput>;
    create: Prisma.XOR<Prisma.CredentialGroupCreateWithoutParentInput, Prisma.CredentialGroupUncheckedCreateWithoutParentInput>;
};
export type CredentialGroupUpdateWithWhereUniqueWithoutParentInput = {
    where: Prisma.CredentialGroupWhereUniqueInput;
    data: Prisma.XOR<Prisma.CredentialGroupUpdateWithoutParentInput, Prisma.CredentialGroupUncheckedUpdateWithoutParentInput>;
};
export type CredentialGroupUpdateManyWithWhereWithoutParentInput = {
    where: Prisma.CredentialGroupScalarWhereInput;
    data: Prisma.XOR<Prisma.CredentialGroupUpdateManyMutationInput, Prisma.CredentialGroupUncheckedUpdateManyWithoutParentInput>;
};
export type CredentialGroupCreateWithoutCredentialsInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    createdBy?: string | null;
    updatedAt?: Date | string;
    updatedBy?: string | null;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    user: Prisma.UserCreateNestedOneWithoutGroupsInput;
    parent?: Prisma.CredentialGroupCreateNestedOneWithoutChildrenInput;
    children?: Prisma.CredentialGroupCreateNestedManyWithoutParentInput;
};
export type CredentialGroupUncheckedCreateWithoutCredentialsInput = {
    id?: string;
    userId: string;
    parentId?: string | null;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    createdBy?: string | null;
    updatedAt?: Date | string;
    updatedBy?: string | null;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    children?: Prisma.CredentialGroupUncheckedCreateNestedManyWithoutParentInput;
};
export type CredentialGroupCreateOrConnectWithoutCredentialsInput = {
    where: Prisma.CredentialGroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.CredentialGroupCreateWithoutCredentialsInput, Prisma.CredentialGroupUncheckedCreateWithoutCredentialsInput>;
};
export type CredentialGroupUpsertWithoutCredentialsInput = {
    update: Prisma.XOR<Prisma.CredentialGroupUpdateWithoutCredentialsInput, Prisma.CredentialGroupUncheckedUpdateWithoutCredentialsInput>;
    create: Prisma.XOR<Prisma.CredentialGroupCreateWithoutCredentialsInput, Prisma.CredentialGroupUncheckedCreateWithoutCredentialsInput>;
    where?: Prisma.CredentialGroupWhereInput;
};
export type CredentialGroupUpdateToOneWithWhereWithoutCredentialsInput = {
    where?: Prisma.CredentialGroupWhereInput;
    data: Prisma.XOR<Prisma.CredentialGroupUpdateWithoutCredentialsInput, Prisma.CredentialGroupUncheckedUpdateWithoutCredentialsInput>;
};
export type CredentialGroupUpdateWithoutCredentialsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutGroupsNestedInput;
    parent?: Prisma.CredentialGroupUpdateOneWithoutChildrenNestedInput;
    children?: Prisma.CredentialGroupUpdateManyWithoutParentNestedInput;
};
export type CredentialGroupUncheckedUpdateWithoutCredentialsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    parentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    children?: Prisma.CredentialGroupUncheckedUpdateManyWithoutParentNestedInput;
};
export type CredentialGroupCreateManyUserInput = {
    id?: string;
    parentId?: string | null;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    createdBy?: string | null;
    updatedAt?: Date | string;
    updatedBy?: string | null;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
};
export type CredentialGroupUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    parent?: Prisma.CredentialGroupUpdateOneWithoutChildrenNestedInput;
    children?: Prisma.CredentialGroupUpdateManyWithoutParentNestedInput;
    credentials?: Prisma.CredentialUpdateManyWithoutGroupNestedInput;
};
export type CredentialGroupUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    children?: Prisma.CredentialGroupUncheckedUpdateManyWithoutParentNestedInput;
    credentials?: Prisma.CredentialUncheckedUpdateManyWithoutGroupNestedInput;
};
export type CredentialGroupUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    parentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CredentialGroupCreateManyParentInput = {
    id?: string;
    userId: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    createdBy?: string | null;
    updatedAt?: Date | string;
    updatedBy?: string | null;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
};
export type CredentialGroupUpdateWithoutParentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutGroupsNestedInput;
    children?: Prisma.CredentialGroupUpdateManyWithoutParentNestedInput;
    credentials?: Prisma.CredentialUpdateManyWithoutGroupNestedInput;
};
export type CredentialGroupUncheckedUpdateWithoutParentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    children?: Prisma.CredentialGroupUncheckedUpdateManyWithoutParentNestedInput;
    credentials?: Prisma.CredentialUncheckedUpdateManyWithoutGroupNestedInput;
};
export type CredentialGroupUncheckedUpdateManyWithoutParentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CredentialGroupCountOutputType = {
    children: number;
    credentials: number;
};
export type CredentialGroupCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    children?: boolean | CredentialGroupCountOutputTypeCountChildrenArgs;
    credentials?: boolean | CredentialGroupCountOutputTypeCountCredentialsArgs;
};
export type CredentialGroupCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CredentialGroupCountOutputTypeSelect<ExtArgs> | null;
};
export type CredentialGroupCountOutputTypeCountChildrenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CredentialGroupWhereInput;
};
export type CredentialGroupCountOutputTypeCountCredentialsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CredentialWhereInput;
};
export type CredentialGroupSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    parentId?: boolean;
    name?: boolean;
    description?: boolean;
    createdAt?: boolean;
    createdBy?: boolean;
    updatedAt?: boolean;
    updatedBy?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    parent?: boolean | Prisma.CredentialGroup$parentArgs<ExtArgs>;
    children?: boolean | Prisma.CredentialGroup$childrenArgs<ExtArgs>;
    credentials?: boolean | Prisma.CredentialGroup$credentialsArgs<ExtArgs>;
    _count?: boolean | Prisma.CredentialGroupCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["credentialGroup"]>;
export type CredentialGroupSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    parentId?: boolean;
    name?: boolean;
    description?: boolean;
    createdAt?: boolean;
    createdBy?: boolean;
    updatedAt?: boolean;
    updatedBy?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    parent?: boolean | Prisma.CredentialGroup$parentArgs<ExtArgs>;
}, ExtArgs["result"]["credentialGroup"]>;
export type CredentialGroupSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    parentId?: boolean;
    name?: boolean;
    description?: boolean;
    createdAt?: boolean;
    createdBy?: boolean;
    updatedAt?: boolean;
    updatedBy?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    parent?: boolean | Prisma.CredentialGroup$parentArgs<ExtArgs>;
}, ExtArgs["result"]["credentialGroup"]>;
export type CredentialGroupSelectScalar = {
    id?: boolean;
    userId?: boolean;
    parentId?: boolean;
    name?: boolean;
    description?: boolean;
    createdAt?: boolean;
    createdBy?: boolean;
    updatedAt?: boolean;
    updatedBy?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
};
export type CredentialGroupOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "parentId" | "name" | "description" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "deletedAt" | "deletedBy", ExtArgs["result"]["credentialGroup"]>;
export type CredentialGroupInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    parent?: boolean | Prisma.CredentialGroup$parentArgs<ExtArgs>;
    children?: boolean | Prisma.CredentialGroup$childrenArgs<ExtArgs>;
    credentials?: boolean | Prisma.CredentialGroup$credentialsArgs<ExtArgs>;
    _count?: boolean | Prisma.CredentialGroupCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CredentialGroupIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    parent?: boolean | Prisma.CredentialGroup$parentArgs<ExtArgs>;
};
export type CredentialGroupIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    parent?: boolean | Prisma.CredentialGroup$parentArgs<ExtArgs>;
};
export type $CredentialGroupPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CredentialGroup";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        parent: Prisma.$CredentialGroupPayload<ExtArgs> | null;
        children: Prisma.$CredentialGroupPayload<ExtArgs>[];
        credentials: Prisma.$CredentialPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        parentId: string | null;
        name: string;
        description: string | null;
        createdAt: Date;
        createdBy: string | null;
        updatedAt: Date;
        updatedBy: string | null;
        deletedAt: Date | null;
        deletedBy: string | null;
    }, ExtArgs["result"]["credentialGroup"]>;
    composites: {};
};
export type CredentialGroupGetPayload<S extends boolean | null | undefined | CredentialGroupDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CredentialGroupPayload, S>;
export type CredentialGroupCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CredentialGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CredentialGroupCountAggregateInputType | true;
};
export interface CredentialGroupDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CredentialGroup'];
        meta: {
            name: 'CredentialGroup';
        };
    };
    findUnique<T extends CredentialGroupFindUniqueArgs>(args: Prisma.SelectSubset<T, CredentialGroupFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CredentialGroupClient<runtime.Types.Result.GetResult<Prisma.$CredentialGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CredentialGroupFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CredentialGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CredentialGroupClient<runtime.Types.Result.GetResult<Prisma.$CredentialGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CredentialGroupFindFirstArgs>(args?: Prisma.SelectSubset<T, CredentialGroupFindFirstArgs<ExtArgs>>): Prisma.Prisma__CredentialGroupClient<runtime.Types.Result.GetResult<Prisma.$CredentialGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CredentialGroupFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CredentialGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CredentialGroupClient<runtime.Types.Result.GetResult<Prisma.$CredentialGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CredentialGroupFindManyArgs>(args?: Prisma.SelectSubset<T, CredentialGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CredentialGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CredentialGroupCreateArgs>(args: Prisma.SelectSubset<T, CredentialGroupCreateArgs<ExtArgs>>): Prisma.Prisma__CredentialGroupClient<runtime.Types.Result.GetResult<Prisma.$CredentialGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CredentialGroupCreateManyArgs>(args?: Prisma.SelectSubset<T, CredentialGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CredentialGroupCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CredentialGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CredentialGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CredentialGroupDeleteArgs>(args: Prisma.SelectSubset<T, CredentialGroupDeleteArgs<ExtArgs>>): Prisma.Prisma__CredentialGroupClient<runtime.Types.Result.GetResult<Prisma.$CredentialGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CredentialGroupUpdateArgs>(args: Prisma.SelectSubset<T, CredentialGroupUpdateArgs<ExtArgs>>): Prisma.Prisma__CredentialGroupClient<runtime.Types.Result.GetResult<Prisma.$CredentialGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CredentialGroupDeleteManyArgs>(args?: Prisma.SelectSubset<T, CredentialGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CredentialGroupUpdateManyArgs>(args: Prisma.SelectSubset<T, CredentialGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CredentialGroupUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CredentialGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CredentialGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CredentialGroupUpsertArgs>(args: Prisma.SelectSubset<T, CredentialGroupUpsertArgs<ExtArgs>>): Prisma.Prisma__CredentialGroupClient<runtime.Types.Result.GetResult<Prisma.$CredentialGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CredentialGroupCountArgs>(args?: Prisma.Subset<T, CredentialGroupCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CredentialGroupCountAggregateOutputType> : number>;
    aggregate<T extends CredentialGroupAggregateArgs>(args: Prisma.Subset<T, CredentialGroupAggregateArgs>): Prisma.PrismaPromise<GetCredentialGroupAggregateType<T>>;
    groupBy<T extends CredentialGroupGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CredentialGroupGroupByArgs['orderBy'];
    } : {
        orderBy?: CredentialGroupGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CredentialGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCredentialGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CredentialGroupFieldRefs;
}
export interface Prisma__CredentialGroupClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    parent<T extends Prisma.CredentialGroup$parentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CredentialGroup$parentArgs<ExtArgs>>): Prisma.Prisma__CredentialGroupClient<runtime.Types.Result.GetResult<Prisma.$CredentialGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    children<T extends Prisma.CredentialGroup$childrenArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CredentialGroup$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CredentialGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    credentials<T extends Prisma.CredentialGroup$credentialsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CredentialGroup$credentialsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CredentialGroupFieldRefs {
    readonly id: Prisma.FieldRef<"CredentialGroup", 'String'>;
    readonly userId: Prisma.FieldRef<"CredentialGroup", 'String'>;
    readonly parentId: Prisma.FieldRef<"CredentialGroup", 'String'>;
    readonly name: Prisma.FieldRef<"CredentialGroup", 'String'>;
    readonly description: Prisma.FieldRef<"CredentialGroup", 'String'>;
    readonly createdAt: Prisma.FieldRef<"CredentialGroup", 'DateTime'>;
    readonly createdBy: Prisma.FieldRef<"CredentialGroup", 'String'>;
    readonly updatedAt: Prisma.FieldRef<"CredentialGroup", 'DateTime'>;
    readonly updatedBy: Prisma.FieldRef<"CredentialGroup", 'String'>;
    readonly deletedAt: Prisma.FieldRef<"CredentialGroup", 'DateTime'>;
    readonly deletedBy: Prisma.FieldRef<"CredentialGroup", 'String'>;
}
export type CredentialGroupFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CredentialGroupSelect<ExtArgs> | null;
    omit?: Prisma.CredentialGroupOmit<ExtArgs> | null;
    include?: Prisma.CredentialGroupInclude<ExtArgs> | null;
    where: Prisma.CredentialGroupWhereUniqueInput;
};
export type CredentialGroupFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CredentialGroupSelect<ExtArgs> | null;
    omit?: Prisma.CredentialGroupOmit<ExtArgs> | null;
    include?: Prisma.CredentialGroupInclude<ExtArgs> | null;
    where: Prisma.CredentialGroupWhereUniqueInput;
};
export type CredentialGroupFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CredentialGroupSelect<ExtArgs> | null;
    omit?: Prisma.CredentialGroupOmit<ExtArgs> | null;
    include?: Prisma.CredentialGroupInclude<ExtArgs> | null;
    where?: Prisma.CredentialGroupWhereInput;
    orderBy?: Prisma.CredentialGroupOrderByWithRelationInput | Prisma.CredentialGroupOrderByWithRelationInput[];
    cursor?: Prisma.CredentialGroupWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CredentialGroupScalarFieldEnum | Prisma.CredentialGroupScalarFieldEnum[];
};
export type CredentialGroupFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CredentialGroupSelect<ExtArgs> | null;
    omit?: Prisma.CredentialGroupOmit<ExtArgs> | null;
    include?: Prisma.CredentialGroupInclude<ExtArgs> | null;
    where?: Prisma.CredentialGroupWhereInput;
    orderBy?: Prisma.CredentialGroupOrderByWithRelationInput | Prisma.CredentialGroupOrderByWithRelationInput[];
    cursor?: Prisma.CredentialGroupWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CredentialGroupScalarFieldEnum | Prisma.CredentialGroupScalarFieldEnum[];
};
export type CredentialGroupFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CredentialGroupSelect<ExtArgs> | null;
    omit?: Prisma.CredentialGroupOmit<ExtArgs> | null;
    include?: Prisma.CredentialGroupInclude<ExtArgs> | null;
    where?: Prisma.CredentialGroupWhereInput;
    orderBy?: Prisma.CredentialGroupOrderByWithRelationInput | Prisma.CredentialGroupOrderByWithRelationInput[];
    cursor?: Prisma.CredentialGroupWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CredentialGroupScalarFieldEnum | Prisma.CredentialGroupScalarFieldEnum[];
};
export type CredentialGroupCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CredentialGroupSelect<ExtArgs> | null;
    omit?: Prisma.CredentialGroupOmit<ExtArgs> | null;
    include?: Prisma.CredentialGroupInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CredentialGroupCreateInput, Prisma.CredentialGroupUncheckedCreateInput>;
};
export type CredentialGroupCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CredentialGroupCreateManyInput | Prisma.CredentialGroupCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CredentialGroupCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CredentialGroupSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CredentialGroupOmit<ExtArgs> | null;
    data: Prisma.CredentialGroupCreateManyInput | Prisma.CredentialGroupCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CredentialGroupIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CredentialGroupUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CredentialGroupSelect<ExtArgs> | null;
    omit?: Prisma.CredentialGroupOmit<ExtArgs> | null;
    include?: Prisma.CredentialGroupInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CredentialGroupUpdateInput, Prisma.CredentialGroupUncheckedUpdateInput>;
    where: Prisma.CredentialGroupWhereUniqueInput;
};
export type CredentialGroupUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CredentialGroupUpdateManyMutationInput, Prisma.CredentialGroupUncheckedUpdateManyInput>;
    where?: Prisma.CredentialGroupWhereInput;
    limit?: number;
};
export type CredentialGroupUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CredentialGroupSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CredentialGroupOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CredentialGroupUpdateManyMutationInput, Prisma.CredentialGroupUncheckedUpdateManyInput>;
    where?: Prisma.CredentialGroupWhereInput;
    limit?: number;
    include?: Prisma.CredentialGroupIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CredentialGroupUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CredentialGroupSelect<ExtArgs> | null;
    omit?: Prisma.CredentialGroupOmit<ExtArgs> | null;
    include?: Prisma.CredentialGroupInclude<ExtArgs> | null;
    where: Prisma.CredentialGroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.CredentialGroupCreateInput, Prisma.CredentialGroupUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CredentialGroupUpdateInput, Prisma.CredentialGroupUncheckedUpdateInput>;
};
export type CredentialGroupDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CredentialGroupSelect<ExtArgs> | null;
    omit?: Prisma.CredentialGroupOmit<ExtArgs> | null;
    include?: Prisma.CredentialGroupInclude<ExtArgs> | null;
    where: Prisma.CredentialGroupWhereUniqueInput;
};
export type CredentialGroupDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CredentialGroupWhereInput;
    limit?: number;
};
export type CredentialGroup$parentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CredentialGroupSelect<ExtArgs> | null;
    omit?: Prisma.CredentialGroupOmit<ExtArgs> | null;
    include?: Prisma.CredentialGroupInclude<ExtArgs> | null;
    where?: Prisma.CredentialGroupWhereInput;
};
export type CredentialGroup$childrenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CredentialGroupSelect<ExtArgs> | null;
    omit?: Prisma.CredentialGroupOmit<ExtArgs> | null;
    include?: Prisma.CredentialGroupInclude<ExtArgs> | null;
    where?: Prisma.CredentialGroupWhereInput;
    orderBy?: Prisma.CredentialGroupOrderByWithRelationInput | Prisma.CredentialGroupOrderByWithRelationInput[];
    cursor?: Prisma.CredentialGroupWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CredentialGroupScalarFieldEnum | Prisma.CredentialGroupScalarFieldEnum[];
};
export type CredentialGroup$credentialsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CredentialSelect<ExtArgs> | null;
    omit?: Prisma.CredentialOmit<ExtArgs> | null;
    include?: Prisma.CredentialInclude<ExtArgs> | null;
    where?: Prisma.CredentialWhereInput;
    orderBy?: Prisma.CredentialOrderByWithRelationInput | Prisma.CredentialOrderByWithRelationInput[];
    cursor?: Prisma.CredentialWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CredentialScalarFieldEnum | Prisma.CredentialScalarFieldEnum[];
};
export type CredentialGroupDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CredentialGroupSelect<ExtArgs> | null;
    omit?: Prisma.CredentialGroupOmit<ExtArgs> | null;
    include?: Prisma.CredentialGroupInclude<ExtArgs> | null;
};
