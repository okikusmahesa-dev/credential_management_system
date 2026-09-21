import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CredentialCategoryModel = runtime.Types.Result.DefaultSelection<Prisma.$CredentialCategoryPayload>;
export type AggregateCredentialCategory = {
    _count: CredentialCategoryCountAggregateOutputType | null;
    _min: CredentialCategoryMinAggregateOutputType | null;
    _max: CredentialCategoryMaxAggregateOutputType | null;
};
export type CredentialCategoryMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    name: string | null;
    description: string | null;
    createdAt: Date | null;
    createdBy: string | null;
    updatedAt: Date | null;
    updatedBy: string | null;
    deletedAt: Date | null;
    deletedBy: string | null;
};
export type CredentialCategoryMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    name: string | null;
    description: string | null;
    createdAt: Date | null;
    createdBy: string | null;
    updatedAt: Date | null;
    updatedBy: string | null;
    deletedAt: Date | null;
    deletedBy: string | null;
};
export type CredentialCategoryCountAggregateOutputType = {
    id: number;
    userId: number;
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
export type CredentialCategoryMinAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    description?: true;
    createdAt?: true;
    createdBy?: true;
    updatedAt?: true;
    updatedBy?: true;
    deletedAt?: true;
    deletedBy?: true;
};
export type CredentialCategoryMaxAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    description?: true;
    createdAt?: true;
    createdBy?: true;
    updatedAt?: true;
    updatedBy?: true;
    deletedAt?: true;
    deletedBy?: true;
};
export type CredentialCategoryCountAggregateInputType = {
    id?: true;
    userId?: true;
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
export type CredentialCategoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CredentialCategoryWhereInput;
    orderBy?: Prisma.CredentialCategoryOrderByWithRelationInput | Prisma.CredentialCategoryOrderByWithRelationInput[];
    cursor?: Prisma.CredentialCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CredentialCategoryCountAggregateInputType;
    _min?: CredentialCategoryMinAggregateInputType;
    _max?: CredentialCategoryMaxAggregateInputType;
};
export type GetCredentialCategoryAggregateType<T extends CredentialCategoryAggregateArgs> = {
    [P in keyof T & keyof AggregateCredentialCategory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCredentialCategory[P]> : Prisma.GetScalarType<T[P], AggregateCredentialCategory[P]>;
};
export type CredentialCategoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CredentialCategoryWhereInput;
    orderBy?: Prisma.CredentialCategoryOrderByWithAggregationInput | Prisma.CredentialCategoryOrderByWithAggregationInput[];
    by: Prisma.CredentialCategoryScalarFieldEnum[] | Prisma.CredentialCategoryScalarFieldEnum;
    having?: Prisma.CredentialCategoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CredentialCategoryCountAggregateInputType | true;
    _min?: CredentialCategoryMinAggregateInputType;
    _max?: CredentialCategoryMaxAggregateInputType;
};
export type CredentialCategoryGroupByOutputType = {
    id: string;
    userId: string;
    name: string;
    description: string | null;
    createdAt: Date;
    createdBy: string | null;
    updatedAt: Date;
    updatedBy: string | null;
    deletedAt: Date | null;
    deletedBy: string | null;
    _count: CredentialCategoryCountAggregateOutputType | null;
    _min: CredentialCategoryMinAggregateOutputType | null;
    _max: CredentialCategoryMaxAggregateOutputType | null;
};
export type GetCredentialCategoryGroupByPayload<T extends CredentialCategoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CredentialCategoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CredentialCategoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CredentialCategoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CredentialCategoryGroupByOutputType[P]>;
}>>;
export type CredentialCategoryWhereInput = {
    AND?: Prisma.CredentialCategoryWhereInput | Prisma.CredentialCategoryWhereInput[];
    OR?: Prisma.CredentialCategoryWhereInput[];
    NOT?: Prisma.CredentialCategoryWhereInput | Prisma.CredentialCategoryWhereInput[];
    id?: Prisma.UuidFilter<"CredentialCategory"> | string;
    userId?: Prisma.UuidFilter<"CredentialCategory"> | string;
    name?: Prisma.StringFilter<"CredentialCategory"> | string;
    description?: Prisma.StringNullableFilter<"CredentialCategory"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CredentialCategory"> | Date | string;
    createdBy?: Prisma.UuidNullableFilter<"CredentialCategory"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"CredentialCategory"> | Date | string;
    updatedBy?: Prisma.UuidNullableFilter<"CredentialCategory"> | string | null;
    deletedAt?: Prisma.DateTimeNullableFilter<"CredentialCategory"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableFilter<"CredentialCategory"> | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    credentials?: Prisma.CredentialListRelationFilter;
};
export type CredentialCategoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    updatedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    deletedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    credentials?: Prisma.CredentialOrderByRelationAggregateInput;
};
export type CredentialCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CredentialCategoryWhereInput | Prisma.CredentialCategoryWhereInput[];
    OR?: Prisma.CredentialCategoryWhereInput[];
    NOT?: Prisma.CredentialCategoryWhereInput | Prisma.CredentialCategoryWhereInput[];
    userId?: Prisma.UuidFilter<"CredentialCategory"> | string;
    name?: Prisma.StringFilter<"CredentialCategory"> | string;
    description?: Prisma.StringNullableFilter<"CredentialCategory"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CredentialCategory"> | Date | string;
    createdBy?: Prisma.UuidNullableFilter<"CredentialCategory"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"CredentialCategory"> | Date | string;
    updatedBy?: Prisma.UuidNullableFilter<"CredentialCategory"> | string | null;
    deletedAt?: Prisma.DateTimeNullableFilter<"CredentialCategory"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableFilter<"CredentialCategory"> | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    credentials?: Prisma.CredentialListRelationFilter;
}, "id">;
export type CredentialCategoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    updatedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    deletedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.CredentialCategoryCountOrderByAggregateInput;
    _max?: Prisma.CredentialCategoryMaxOrderByAggregateInput;
    _min?: Prisma.CredentialCategoryMinOrderByAggregateInput;
};
export type CredentialCategoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.CredentialCategoryScalarWhereWithAggregatesInput | Prisma.CredentialCategoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.CredentialCategoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CredentialCategoryScalarWhereWithAggregatesInput | Prisma.CredentialCategoryScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"CredentialCategory"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"CredentialCategory"> | string;
    name?: Prisma.StringWithAggregatesFilter<"CredentialCategory"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"CredentialCategory"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CredentialCategory"> | Date | string;
    createdBy?: Prisma.UuidNullableWithAggregatesFilter<"CredentialCategory"> | string | null;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"CredentialCategory"> | Date | string;
    updatedBy?: Prisma.UuidNullableWithAggregatesFilter<"CredentialCategory"> | string | null;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"CredentialCategory"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableWithAggregatesFilter<"CredentialCategory"> | string | null;
};
export type CredentialCategoryCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    createdBy?: string | null;
    updatedAt?: Date | string;
    updatedBy?: string | null;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    user: Prisma.UserCreateNestedOneWithoutCategoriesInput;
    credentials?: Prisma.CredentialCreateNestedManyWithoutCategoryInput;
};
export type CredentialCategoryUncheckedCreateInput = {
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
    credentials?: Prisma.CredentialUncheckedCreateNestedManyWithoutCategoryInput;
};
export type CredentialCategoryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutCategoriesNestedInput;
    credentials?: Prisma.CredentialUpdateManyWithoutCategoryNestedInput;
};
export type CredentialCategoryUncheckedUpdateInput = {
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
    credentials?: Prisma.CredentialUncheckedUpdateManyWithoutCategoryNestedInput;
};
export type CredentialCategoryCreateManyInput = {
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
export type CredentialCategoryUpdateManyMutationInput = {
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
export type CredentialCategoryUncheckedUpdateManyInput = {
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
export type CredentialCategoryListRelationFilter = {
    every?: Prisma.CredentialCategoryWhereInput;
    some?: Prisma.CredentialCategoryWhereInput;
    none?: Prisma.CredentialCategoryWhereInput;
};
export type CredentialCategoryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CredentialCategoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    updatedBy?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    deletedBy?: Prisma.SortOrder;
};
export type CredentialCategoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    updatedBy?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    deletedBy?: Prisma.SortOrder;
};
export type CredentialCategoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    updatedBy?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    deletedBy?: Prisma.SortOrder;
};
export type CredentialCategoryScalarRelationFilter = {
    is?: Prisma.CredentialCategoryWhereInput;
    isNot?: Prisma.CredentialCategoryWhereInput;
};
export type CredentialCategoryCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CredentialCategoryCreateWithoutUserInput, Prisma.CredentialCategoryUncheckedCreateWithoutUserInput> | Prisma.CredentialCategoryCreateWithoutUserInput[] | Prisma.CredentialCategoryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CredentialCategoryCreateOrConnectWithoutUserInput | Prisma.CredentialCategoryCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CredentialCategoryCreateManyUserInputEnvelope;
    connect?: Prisma.CredentialCategoryWhereUniqueInput | Prisma.CredentialCategoryWhereUniqueInput[];
};
export type CredentialCategoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CredentialCategoryCreateWithoutUserInput, Prisma.CredentialCategoryUncheckedCreateWithoutUserInput> | Prisma.CredentialCategoryCreateWithoutUserInput[] | Prisma.CredentialCategoryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CredentialCategoryCreateOrConnectWithoutUserInput | Prisma.CredentialCategoryCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CredentialCategoryCreateManyUserInputEnvelope;
    connect?: Prisma.CredentialCategoryWhereUniqueInput | Prisma.CredentialCategoryWhereUniqueInput[];
};
export type CredentialCategoryUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CredentialCategoryCreateWithoutUserInput, Prisma.CredentialCategoryUncheckedCreateWithoutUserInput> | Prisma.CredentialCategoryCreateWithoutUserInput[] | Prisma.CredentialCategoryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CredentialCategoryCreateOrConnectWithoutUserInput | Prisma.CredentialCategoryCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CredentialCategoryUpsertWithWhereUniqueWithoutUserInput | Prisma.CredentialCategoryUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CredentialCategoryCreateManyUserInputEnvelope;
    set?: Prisma.CredentialCategoryWhereUniqueInput | Prisma.CredentialCategoryWhereUniqueInput[];
    disconnect?: Prisma.CredentialCategoryWhereUniqueInput | Prisma.CredentialCategoryWhereUniqueInput[];
    delete?: Prisma.CredentialCategoryWhereUniqueInput | Prisma.CredentialCategoryWhereUniqueInput[];
    connect?: Prisma.CredentialCategoryWhereUniqueInput | Prisma.CredentialCategoryWhereUniqueInput[];
    update?: Prisma.CredentialCategoryUpdateWithWhereUniqueWithoutUserInput | Prisma.CredentialCategoryUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CredentialCategoryUpdateManyWithWhereWithoutUserInput | Prisma.CredentialCategoryUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CredentialCategoryScalarWhereInput | Prisma.CredentialCategoryScalarWhereInput[];
};
export type CredentialCategoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CredentialCategoryCreateWithoutUserInput, Prisma.CredentialCategoryUncheckedCreateWithoutUserInput> | Prisma.CredentialCategoryCreateWithoutUserInput[] | Prisma.CredentialCategoryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CredentialCategoryCreateOrConnectWithoutUserInput | Prisma.CredentialCategoryCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CredentialCategoryUpsertWithWhereUniqueWithoutUserInput | Prisma.CredentialCategoryUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CredentialCategoryCreateManyUserInputEnvelope;
    set?: Prisma.CredentialCategoryWhereUniqueInput | Prisma.CredentialCategoryWhereUniqueInput[];
    disconnect?: Prisma.CredentialCategoryWhereUniqueInput | Prisma.CredentialCategoryWhereUniqueInput[];
    delete?: Prisma.CredentialCategoryWhereUniqueInput | Prisma.CredentialCategoryWhereUniqueInput[];
    connect?: Prisma.CredentialCategoryWhereUniqueInput | Prisma.CredentialCategoryWhereUniqueInput[];
    update?: Prisma.CredentialCategoryUpdateWithWhereUniqueWithoutUserInput | Prisma.CredentialCategoryUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CredentialCategoryUpdateManyWithWhereWithoutUserInput | Prisma.CredentialCategoryUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CredentialCategoryScalarWhereInput | Prisma.CredentialCategoryScalarWhereInput[];
};
export type CredentialCategoryCreateNestedOneWithoutCredentialsInput = {
    create?: Prisma.XOR<Prisma.CredentialCategoryCreateWithoutCredentialsInput, Prisma.CredentialCategoryUncheckedCreateWithoutCredentialsInput>;
    connectOrCreate?: Prisma.CredentialCategoryCreateOrConnectWithoutCredentialsInput;
    connect?: Prisma.CredentialCategoryWhereUniqueInput;
};
export type CredentialCategoryUpdateOneRequiredWithoutCredentialsNestedInput = {
    create?: Prisma.XOR<Prisma.CredentialCategoryCreateWithoutCredentialsInput, Prisma.CredentialCategoryUncheckedCreateWithoutCredentialsInput>;
    connectOrCreate?: Prisma.CredentialCategoryCreateOrConnectWithoutCredentialsInput;
    upsert?: Prisma.CredentialCategoryUpsertWithoutCredentialsInput;
    connect?: Prisma.CredentialCategoryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CredentialCategoryUpdateToOneWithWhereWithoutCredentialsInput, Prisma.CredentialCategoryUpdateWithoutCredentialsInput>, Prisma.CredentialCategoryUncheckedUpdateWithoutCredentialsInput>;
};
export type CredentialCategoryCreateWithoutUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    createdBy?: string | null;
    updatedAt?: Date | string;
    updatedBy?: string | null;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    credentials?: Prisma.CredentialCreateNestedManyWithoutCategoryInput;
};
export type CredentialCategoryUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    createdBy?: string | null;
    updatedAt?: Date | string;
    updatedBy?: string | null;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    credentials?: Prisma.CredentialUncheckedCreateNestedManyWithoutCategoryInput;
};
export type CredentialCategoryCreateOrConnectWithoutUserInput = {
    where: Prisma.CredentialCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.CredentialCategoryCreateWithoutUserInput, Prisma.CredentialCategoryUncheckedCreateWithoutUserInput>;
};
export type CredentialCategoryCreateManyUserInputEnvelope = {
    data: Prisma.CredentialCategoryCreateManyUserInput | Prisma.CredentialCategoryCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type CredentialCategoryUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.CredentialCategoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.CredentialCategoryUpdateWithoutUserInput, Prisma.CredentialCategoryUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.CredentialCategoryCreateWithoutUserInput, Prisma.CredentialCategoryUncheckedCreateWithoutUserInput>;
};
export type CredentialCategoryUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.CredentialCategoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.CredentialCategoryUpdateWithoutUserInput, Prisma.CredentialCategoryUncheckedUpdateWithoutUserInput>;
};
export type CredentialCategoryUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.CredentialCategoryScalarWhereInput;
    data: Prisma.XOR<Prisma.CredentialCategoryUpdateManyMutationInput, Prisma.CredentialCategoryUncheckedUpdateManyWithoutUserInput>;
};
export type CredentialCategoryScalarWhereInput = {
    AND?: Prisma.CredentialCategoryScalarWhereInput | Prisma.CredentialCategoryScalarWhereInput[];
    OR?: Prisma.CredentialCategoryScalarWhereInput[];
    NOT?: Prisma.CredentialCategoryScalarWhereInput | Prisma.CredentialCategoryScalarWhereInput[];
    id?: Prisma.UuidFilter<"CredentialCategory"> | string;
    userId?: Prisma.UuidFilter<"CredentialCategory"> | string;
    name?: Prisma.StringFilter<"CredentialCategory"> | string;
    description?: Prisma.StringNullableFilter<"CredentialCategory"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CredentialCategory"> | Date | string;
    createdBy?: Prisma.UuidNullableFilter<"CredentialCategory"> | string | null;
    updatedAt?: Prisma.DateTimeFilter<"CredentialCategory"> | Date | string;
    updatedBy?: Prisma.UuidNullableFilter<"CredentialCategory"> | string | null;
    deletedAt?: Prisma.DateTimeNullableFilter<"CredentialCategory"> | Date | string | null;
    deletedBy?: Prisma.UuidNullableFilter<"CredentialCategory"> | string | null;
};
export type CredentialCategoryCreateWithoutCredentialsInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    createdBy?: string | null;
    updatedAt?: Date | string;
    updatedBy?: string | null;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
    user: Prisma.UserCreateNestedOneWithoutCategoriesInput;
};
export type CredentialCategoryUncheckedCreateWithoutCredentialsInput = {
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
export type CredentialCategoryCreateOrConnectWithoutCredentialsInput = {
    where: Prisma.CredentialCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.CredentialCategoryCreateWithoutCredentialsInput, Prisma.CredentialCategoryUncheckedCreateWithoutCredentialsInput>;
};
export type CredentialCategoryUpsertWithoutCredentialsInput = {
    update: Prisma.XOR<Prisma.CredentialCategoryUpdateWithoutCredentialsInput, Prisma.CredentialCategoryUncheckedUpdateWithoutCredentialsInput>;
    create: Prisma.XOR<Prisma.CredentialCategoryCreateWithoutCredentialsInput, Prisma.CredentialCategoryUncheckedCreateWithoutCredentialsInput>;
    where?: Prisma.CredentialCategoryWhereInput;
};
export type CredentialCategoryUpdateToOneWithWhereWithoutCredentialsInput = {
    where?: Prisma.CredentialCategoryWhereInput;
    data: Prisma.XOR<Prisma.CredentialCategoryUpdateWithoutCredentialsInput, Prisma.CredentialCategoryUncheckedUpdateWithoutCredentialsInput>;
};
export type CredentialCategoryUpdateWithoutCredentialsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutCategoriesNestedInput;
};
export type CredentialCategoryUncheckedUpdateWithoutCredentialsInput = {
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
export type CredentialCategoryCreateManyUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    createdAt?: Date | string;
    createdBy?: string | null;
    updatedAt?: Date | string;
    updatedBy?: string | null;
    deletedAt?: Date | string | null;
    deletedBy?: string | null;
};
export type CredentialCategoryUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    credentials?: Prisma.CredentialUpdateManyWithoutCategoryNestedInput;
};
export type CredentialCategoryUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deletedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    credentials?: Prisma.CredentialUncheckedUpdateManyWithoutCategoryNestedInput;
};
export type CredentialCategoryUncheckedUpdateManyWithoutUserInput = {
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
export type CredentialCategoryCountOutputType = {
    credentials: number;
};
export type CredentialCategoryCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    credentials?: boolean | CredentialCategoryCountOutputTypeCountCredentialsArgs;
};
export type CredentialCategoryCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CredentialCategoryCountOutputTypeSelect<ExtArgs> | null;
};
export type CredentialCategoryCountOutputTypeCountCredentialsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CredentialWhereInput;
};
export type CredentialCategorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    description?: boolean;
    createdAt?: boolean;
    createdBy?: boolean;
    updatedAt?: boolean;
    updatedBy?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    credentials?: boolean | Prisma.CredentialCategory$credentialsArgs<ExtArgs>;
    _count?: boolean | Prisma.CredentialCategoryCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["credentialCategory"]>;
export type CredentialCategorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    description?: boolean;
    createdAt?: boolean;
    createdBy?: boolean;
    updatedAt?: boolean;
    updatedBy?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["credentialCategory"]>;
export type CredentialCategorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    description?: boolean;
    createdAt?: boolean;
    createdBy?: boolean;
    updatedAt?: boolean;
    updatedBy?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["credentialCategory"]>;
export type CredentialCategorySelectScalar = {
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    description?: boolean;
    createdAt?: boolean;
    createdBy?: boolean;
    updatedAt?: boolean;
    updatedBy?: boolean;
    deletedAt?: boolean;
    deletedBy?: boolean;
};
export type CredentialCategoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "name" | "description" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "deletedAt" | "deletedBy", ExtArgs["result"]["credentialCategory"]>;
export type CredentialCategoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    credentials?: boolean | Prisma.CredentialCategory$credentialsArgs<ExtArgs>;
    _count?: boolean | Prisma.CredentialCategoryCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CredentialCategoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type CredentialCategoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $CredentialCategoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CredentialCategory";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        credentials: Prisma.$CredentialPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        name: string;
        description: string | null;
        createdAt: Date;
        createdBy: string | null;
        updatedAt: Date;
        updatedBy: string | null;
        deletedAt: Date | null;
        deletedBy: string | null;
    }, ExtArgs["result"]["credentialCategory"]>;
    composites: {};
};
export type CredentialCategoryGetPayload<S extends boolean | null | undefined | CredentialCategoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CredentialCategoryPayload, S>;
export type CredentialCategoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CredentialCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CredentialCategoryCountAggregateInputType | true;
};
export interface CredentialCategoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CredentialCategory'];
        meta: {
            name: 'CredentialCategory';
        };
    };
    findUnique<T extends CredentialCategoryFindUniqueArgs>(args: Prisma.SelectSubset<T, CredentialCategoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CredentialCategoryClient<runtime.Types.Result.GetResult<Prisma.$CredentialCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CredentialCategoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CredentialCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CredentialCategoryClient<runtime.Types.Result.GetResult<Prisma.$CredentialCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CredentialCategoryFindFirstArgs>(args?: Prisma.SelectSubset<T, CredentialCategoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__CredentialCategoryClient<runtime.Types.Result.GetResult<Prisma.$CredentialCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CredentialCategoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CredentialCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CredentialCategoryClient<runtime.Types.Result.GetResult<Prisma.$CredentialCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CredentialCategoryFindManyArgs>(args?: Prisma.SelectSubset<T, CredentialCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CredentialCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CredentialCategoryCreateArgs>(args: Prisma.SelectSubset<T, CredentialCategoryCreateArgs<ExtArgs>>): Prisma.Prisma__CredentialCategoryClient<runtime.Types.Result.GetResult<Prisma.$CredentialCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CredentialCategoryCreateManyArgs>(args?: Prisma.SelectSubset<T, CredentialCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CredentialCategoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CredentialCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CredentialCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CredentialCategoryDeleteArgs>(args: Prisma.SelectSubset<T, CredentialCategoryDeleteArgs<ExtArgs>>): Prisma.Prisma__CredentialCategoryClient<runtime.Types.Result.GetResult<Prisma.$CredentialCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CredentialCategoryUpdateArgs>(args: Prisma.SelectSubset<T, CredentialCategoryUpdateArgs<ExtArgs>>): Prisma.Prisma__CredentialCategoryClient<runtime.Types.Result.GetResult<Prisma.$CredentialCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CredentialCategoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, CredentialCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CredentialCategoryUpdateManyArgs>(args: Prisma.SelectSubset<T, CredentialCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CredentialCategoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CredentialCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CredentialCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CredentialCategoryUpsertArgs>(args: Prisma.SelectSubset<T, CredentialCategoryUpsertArgs<ExtArgs>>): Prisma.Prisma__CredentialCategoryClient<runtime.Types.Result.GetResult<Prisma.$CredentialCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CredentialCategoryCountArgs>(args?: Prisma.Subset<T, CredentialCategoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CredentialCategoryCountAggregateOutputType> : number>;
    aggregate<T extends CredentialCategoryAggregateArgs>(args: Prisma.Subset<T, CredentialCategoryAggregateArgs>): Prisma.PrismaPromise<GetCredentialCategoryAggregateType<T>>;
    groupBy<T extends CredentialCategoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CredentialCategoryGroupByArgs['orderBy'];
    } : {
        orderBy?: CredentialCategoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CredentialCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCredentialCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CredentialCategoryFieldRefs;
}
export interface Prisma__CredentialCategoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    credentials<T extends Prisma.CredentialCategory$credentialsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CredentialCategory$credentialsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CredentialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CredentialCategoryFieldRefs {
    readonly id: Prisma.FieldRef<"CredentialCategory", 'String'>;
    readonly userId: Prisma.FieldRef<"CredentialCategory", 'String'>;
    readonly name: Prisma.FieldRef<"CredentialCategory", 'String'>;
    readonly description: Prisma.FieldRef<"CredentialCategory", 'String'>;
    readonly createdAt: Prisma.FieldRef<"CredentialCategory", 'DateTime'>;
    readonly createdBy: Prisma.FieldRef<"CredentialCategory", 'String'>;
    readonly updatedAt: Prisma.FieldRef<"CredentialCategory", 'DateTime'>;
    readonly updatedBy: Prisma.FieldRef<"CredentialCategory", 'String'>;
    readonly deletedAt: Prisma.FieldRef<"CredentialCategory", 'DateTime'>;
    readonly deletedBy: Prisma.FieldRef<"CredentialCategory", 'String'>;
}
export type CredentialCategoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CredentialCategorySelect<ExtArgs> | null;
    omit?: Prisma.CredentialCategoryOmit<ExtArgs> | null;
    include?: Prisma.CredentialCategoryInclude<ExtArgs> | null;
    where: Prisma.CredentialCategoryWhereUniqueInput;
};
export type CredentialCategoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CredentialCategorySelect<ExtArgs> | null;
    omit?: Prisma.CredentialCategoryOmit<ExtArgs> | null;
    include?: Prisma.CredentialCategoryInclude<ExtArgs> | null;
    where: Prisma.CredentialCategoryWhereUniqueInput;
};
export type CredentialCategoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CredentialCategorySelect<ExtArgs> | null;
    omit?: Prisma.CredentialCategoryOmit<ExtArgs> | null;
    include?: Prisma.CredentialCategoryInclude<ExtArgs> | null;
    where?: Prisma.CredentialCategoryWhereInput;
    orderBy?: Prisma.CredentialCategoryOrderByWithRelationInput | Prisma.CredentialCategoryOrderByWithRelationInput[];
    cursor?: Prisma.CredentialCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CredentialCategoryScalarFieldEnum | Prisma.CredentialCategoryScalarFieldEnum[];
};
export type CredentialCategoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CredentialCategorySelect<ExtArgs> | null;
    omit?: Prisma.CredentialCategoryOmit<ExtArgs> | null;
    include?: Prisma.CredentialCategoryInclude<ExtArgs> | null;
    where?: Prisma.CredentialCategoryWhereInput;
    orderBy?: Prisma.CredentialCategoryOrderByWithRelationInput | Prisma.CredentialCategoryOrderByWithRelationInput[];
    cursor?: Prisma.CredentialCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CredentialCategoryScalarFieldEnum | Prisma.CredentialCategoryScalarFieldEnum[];
};
export type CredentialCategoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CredentialCategorySelect<ExtArgs> | null;
    omit?: Prisma.CredentialCategoryOmit<ExtArgs> | null;
    include?: Prisma.CredentialCategoryInclude<ExtArgs> | null;
    where?: Prisma.CredentialCategoryWhereInput;
    orderBy?: Prisma.CredentialCategoryOrderByWithRelationInput | Prisma.CredentialCategoryOrderByWithRelationInput[];
    cursor?: Prisma.CredentialCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CredentialCategoryScalarFieldEnum | Prisma.CredentialCategoryScalarFieldEnum[];
};
export type CredentialCategoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CredentialCategorySelect<ExtArgs> | null;
    omit?: Prisma.CredentialCategoryOmit<ExtArgs> | null;
    include?: Prisma.CredentialCategoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CredentialCategoryCreateInput, Prisma.CredentialCategoryUncheckedCreateInput>;
};
export type CredentialCategoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CredentialCategoryCreateManyInput | Prisma.CredentialCategoryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CredentialCategoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CredentialCategorySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CredentialCategoryOmit<ExtArgs> | null;
    data: Prisma.CredentialCategoryCreateManyInput | Prisma.CredentialCategoryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CredentialCategoryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CredentialCategoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CredentialCategorySelect<ExtArgs> | null;
    omit?: Prisma.CredentialCategoryOmit<ExtArgs> | null;
    include?: Prisma.CredentialCategoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CredentialCategoryUpdateInput, Prisma.CredentialCategoryUncheckedUpdateInput>;
    where: Prisma.CredentialCategoryWhereUniqueInput;
};
export type CredentialCategoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CredentialCategoryUpdateManyMutationInput, Prisma.CredentialCategoryUncheckedUpdateManyInput>;
    where?: Prisma.CredentialCategoryWhereInput;
    limit?: number;
};
export type CredentialCategoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CredentialCategorySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CredentialCategoryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CredentialCategoryUpdateManyMutationInput, Prisma.CredentialCategoryUncheckedUpdateManyInput>;
    where?: Prisma.CredentialCategoryWhereInput;
    limit?: number;
    include?: Prisma.CredentialCategoryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CredentialCategoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CredentialCategorySelect<ExtArgs> | null;
    omit?: Prisma.CredentialCategoryOmit<ExtArgs> | null;
    include?: Prisma.CredentialCategoryInclude<ExtArgs> | null;
    where: Prisma.CredentialCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.CredentialCategoryCreateInput, Prisma.CredentialCategoryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CredentialCategoryUpdateInput, Prisma.CredentialCategoryUncheckedUpdateInput>;
};
export type CredentialCategoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CredentialCategorySelect<ExtArgs> | null;
    omit?: Prisma.CredentialCategoryOmit<ExtArgs> | null;
    include?: Prisma.CredentialCategoryInclude<ExtArgs> | null;
    where: Prisma.CredentialCategoryWhereUniqueInput;
};
export type CredentialCategoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CredentialCategoryWhereInput;
    limit?: number;
};
export type CredentialCategory$credentialsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CredentialCategoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CredentialCategorySelect<ExtArgs> | null;
    omit?: Prisma.CredentialCategoryOmit<ExtArgs> | null;
    include?: Prisma.CredentialCategoryInclude<ExtArgs> | null;
};
