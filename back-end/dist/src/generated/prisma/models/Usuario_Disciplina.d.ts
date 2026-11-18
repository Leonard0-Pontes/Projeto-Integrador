import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type Usuario_DisciplinaModel = runtime.Types.Result.DefaultSelection<Prisma.$Usuario_DisciplinaPayload>;
export type AggregateUsuario_Disciplina = {
    _count: Usuario_DisciplinaCountAggregateOutputType | null;
    _avg: Usuario_DisciplinaAvgAggregateOutputType | null;
    _sum: Usuario_DisciplinaSumAggregateOutputType | null;
    _min: Usuario_DisciplinaMinAggregateOutputType | null;
    _max: Usuario_DisciplinaMaxAggregateOutputType | null;
};
export type Usuario_DisciplinaAvgAggregateOutputType = {
    id: number | null;
    usuario_id: number | null;
    disciplina_id: number | null;
};
export type Usuario_DisciplinaSumAggregateOutputType = {
    id: number | null;
    usuario_id: number | null;
    disciplina_id: number | null;
};
export type Usuario_DisciplinaMinAggregateOutputType = {
    id: number | null;
    usuario_id: number | null;
    disciplina_id: number | null;
    funcao: $Enums.funcaoUsuario | null;
    criado_em: Date | null;
};
export type Usuario_DisciplinaMaxAggregateOutputType = {
    id: number | null;
    usuario_id: number | null;
    disciplina_id: number | null;
    funcao: $Enums.funcaoUsuario | null;
    criado_em: Date | null;
};
export type Usuario_DisciplinaCountAggregateOutputType = {
    id: number;
    usuario_id: number;
    disciplina_id: number;
    funcao: number;
    criado_em: number;
    _all: number;
};
export type Usuario_DisciplinaAvgAggregateInputType = {
    id?: true;
    usuario_id?: true;
    disciplina_id?: true;
};
export type Usuario_DisciplinaSumAggregateInputType = {
    id?: true;
    usuario_id?: true;
    disciplina_id?: true;
};
export type Usuario_DisciplinaMinAggregateInputType = {
    id?: true;
    usuario_id?: true;
    disciplina_id?: true;
    funcao?: true;
    criado_em?: true;
};
export type Usuario_DisciplinaMaxAggregateInputType = {
    id?: true;
    usuario_id?: true;
    disciplina_id?: true;
    funcao?: true;
    criado_em?: true;
};
export type Usuario_DisciplinaCountAggregateInputType = {
    id?: true;
    usuario_id?: true;
    disciplina_id?: true;
    funcao?: true;
    criado_em?: true;
    _all?: true;
};
export type Usuario_DisciplinaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Usuario_DisciplinaWhereInput;
    orderBy?: Prisma.Usuario_DisciplinaOrderByWithRelationInput | Prisma.Usuario_DisciplinaOrderByWithRelationInput[];
    cursor?: Prisma.Usuario_DisciplinaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Usuario_DisciplinaCountAggregateInputType;
    _avg?: Usuario_DisciplinaAvgAggregateInputType;
    _sum?: Usuario_DisciplinaSumAggregateInputType;
    _min?: Usuario_DisciplinaMinAggregateInputType;
    _max?: Usuario_DisciplinaMaxAggregateInputType;
};
export type GetUsuario_DisciplinaAggregateType<T extends Usuario_DisciplinaAggregateArgs> = {
    [P in keyof T & keyof AggregateUsuario_Disciplina]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUsuario_Disciplina[P]> : Prisma.GetScalarType<T[P], AggregateUsuario_Disciplina[P]>;
};
export type Usuario_DisciplinaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Usuario_DisciplinaWhereInput;
    orderBy?: Prisma.Usuario_DisciplinaOrderByWithAggregationInput | Prisma.Usuario_DisciplinaOrderByWithAggregationInput[];
    by: Prisma.Usuario_DisciplinaScalarFieldEnum[] | Prisma.Usuario_DisciplinaScalarFieldEnum;
    having?: Prisma.Usuario_DisciplinaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Usuario_DisciplinaCountAggregateInputType | true;
    _avg?: Usuario_DisciplinaAvgAggregateInputType;
    _sum?: Usuario_DisciplinaSumAggregateInputType;
    _min?: Usuario_DisciplinaMinAggregateInputType;
    _max?: Usuario_DisciplinaMaxAggregateInputType;
};
export type Usuario_DisciplinaGroupByOutputType = {
    id: number;
    usuario_id: number;
    disciplina_id: number;
    funcao: $Enums.funcaoUsuario;
    criado_em: Date;
    _count: Usuario_DisciplinaCountAggregateOutputType | null;
    _avg: Usuario_DisciplinaAvgAggregateOutputType | null;
    _sum: Usuario_DisciplinaSumAggregateOutputType | null;
    _min: Usuario_DisciplinaMinAggregateOutputType | null;
    _max: Usuario_DisciplinaMaxAggregateOutputType | null;
};
export type GetUsuario_DisciplinaGroupByPayload<T extends Usuario_DisciplinaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Usuario_DisciplinaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Usuario_DisciplinaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Usuario_DisciplinaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Usuario_DisciplinaGroupByOutputType[P]>;
}>>;
export type Usuario_DisciplinaWhereInput = {
    AND?: Prisma.Usuario_DisciplinaWhereInput | Prisma.Usuario_DisciplinaWhereInput[];
    OR?: Prisma.Usuario_DisciplinaWhereInput[];
    NOT?: Prisma.Usuario_DisciplinaWhereInput | Prisma.Usuario_DisciplinaWhereInput[];
    id?: Prisma.IntFilter<"Usuario_Disciplina"> | number;
    usuario_id?: Prisma.IntFilter<"Usuario_Disciplina"> | number;
    disciplina_id?: Prisma.IntFilter<"Usuario_Disciplina"> | number;
    funcao?: Prisma.EnumfuncaoUsuarioFilter<"Usuario_Disciplina"> | $Enums.funcaoUsuario;
    criado_em?: Prisma.DateTimeFilter<"Usuario_Disciplina"> | Date | string;
    usuario?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    disciplina?: Prisma.XOR<Prisma.DisciplinasScalarRelationFilter, Prisma.DisciplinasWhereInput>;
};
export type Usuario_DisciplinaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    disciplina_id?: Prisma.SortOrder;
    funcao?: Prisma.SortOrder;
    criado_em?: Prisma.SortOrder;
    usuario?: Prisma.UsuarioOrderByWithRelationInput;
    disciplina?: Prisma.DisciplinasOrderByWithRelationInput;
};
export type Usuario_DisciplinaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    usuario_id_disciplina_id?: Prisma.Usuario_DisciplinaUsuario_idDisciplina_idCompoundUniqueInput;
    AND?: Prisma.Usuario_DisciplinaWhereInput | Prisma.Usuario_DisciplinaWhereInput[];
    OR?: Prisma.Usuario_DisciplinaWhereInput[];
    NOT?: Prisma.Usuario_DisciplinaWhereInput | Prisma.Usuario_DisciplinaWhereInput[];
    usuario_id?: Prisma.IntFilter<"Usuario_Disciplina"> | number;
    disciplina_id?: Prisma.IntFilter<"Usuario_Disciplina"> | number;
    funcao?: Prisma.EnumfuncaoUsuarioFilter<"Usuario_Disciplina"> | $Enums.funcaoUsuario;
    criado_em?: Prisma.DateTimeFilter<"Usuario_Disciplina"> | Date | string;
    usuario?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    disciplina?: Prisma.XOR<Prisma.DisciplinasScalarRelationFilter, Prisma.DisciplinasWhereInput>;
}, "id" | "usuario_id_disciplina_id">;
export type Usuario_DisciplinaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    disciplina_id?: Prisma.SortOrder;
    funcao?: Prisma.SortOrder;
    criado_em?: Prisma.SortOrder;
    _count?: Prisma.Usuario_DisciplinaCountOrderByAggregateInput;
    _avg?: Prisma.Usuario_DisciplinaAvgOrderByAggregateInput;
    _max?: Prisma.Usuario_DisciplinaMaxOrderByAggregateInput;
    _min?: Prisma.Usuario_DisciplinaMinOrderByAggregateInput;
    _sum?: Prisma.Usuario_DisciplinaSumOrderByAggregateInput;
};
export type Usuario_DisciplinaScalarWhereWithAggregatesInput = {
    AND?: Prisma.Usuario_DisciplinaScalarWhereWithAggregatesInput | Prisma.Usuario_DisciplinaScalarWhereWithAggregatesInput[];
    OR?: Prisma.Usuario_DisciplinaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.Usuario_DisciplinaScalarWhereWithAggregatesInput | Prisma.Usuario_DisciplinaScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Usuario_Disciplina"> | number;
    usuario_id?: Prisma.IntWithAggregatesFilter<"Usuario_Disciplina"> | number;
    disciplina_id?: Prisma.IntWithAggregatesFilter<"Usuario_Disciplina"> | number;
    funcao?: Prisma.EnumfuncaoUsuarioWithAggregatesFilter<"Usuario_Disciplina"> | $Enums.funcaoUsuario;
    criado_em?: Prisma.DateTimeWithAggregatesFilter<"Usuario_Disciplina"> | Date | string;
};
export type Usuario_DisciplinaCreateInput = {
    funcao: $Enums.funcaoUsuario;
    criado_em: Date | string;
    usuario: Prisma.UsuarioCreateNestedOneWithoutUser_materiaInput;
    disciplina: Prisma.DisciplinasCreateNestedOneWithoutUser_materiaInput;
};
export type Usuario_DisciplinaUncheckedCreateInput = {
    id?: number;
    usuario_id: number;
    disciplina_id: number;
    funcao: $Enums.funcaoUsuario;
    criado_em: Date | string;
};
export type Usuario_DisciplinaUpdateInput = {
    funcao?: Prisma.EnumfuncaoUsuarioFieldUpdateOperationsInput | $Enums.funcaoUsuario;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usuario?: Prisma.UsuarioUpdateOneRequiredWithoutUser_materiaNestedInput;
    disciplina?: Prisma.DisciplinasUpdateOneRequiredWithoutUser_materiaNestedInput;
};
export type Usuario_DisciplinaUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    usuario_id?: Prisma.IntFieldUpdateOperationsInput | number;
    disciplina_id?: Prisma.IntFieldUpdateOperationsInput | number;
    funcao?: Prisma.EnumfuncaoUsuarioFieldUpdateOperationsInput | $Enums.funcaoUsuario;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Usuario_DisciplinaCreateManyInput = {
    id?: number;
    usuario_id: number;
    disciplina_id: number;
    funcao: $Enums.funcaoUsuario;
    criado_em: Date | string;
};
export type Usuario_DisciplinaUpdateManyMutationInput = {
    funcao?: Prisma.EnumfuncaoUsuarioFieldUpdateOperationsInput | $Enums.funcaoUsuario;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Usuario_DisciplinaUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    usuario_id?: Prisma.IntFieldUpdateOperationsInput | number;
    disciplina_id?: Prisma.IntFieldUpdateOperationsInput | number;
    funcao?: Prisma.EnumfuncaoUsuarioFieldUpdateOperationsInput | $Enums.funcaoUsuario;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Usuario_DisciplinaListRelationFilter = {
    every?: Prisma.Usuario_DisciplinaWhereInput;
    some?: Prisma.Usuario_DisciplinaWhereInput;
    none?: Prisma.Usuario_DisciplinaWhereInput;
};
export type Usuario_DisciplinaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Usuario_DisciplinaUsuario_idDisciplina_idCompoundUniqueInput = {
    usuario_id: number;
    disciplina_id: number;
};
export type Usuario_DisciplinaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    disciplina_id?: Prisma.SortOrder;
    funcao?: Prisma.SortOrder;
    criado_em?: Prisma.SortOrder;
};
export type Usuario_DisciplinaAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    disciplina_id?: Prisma.SortOrder;
};
export type Usuario_DisciplinaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    disciplina_id?: Prisma.SortOrder;
    funcao?: Prisma.SortOrder;
    criado_em?: Prisma.SortOrder;
};
export type Usuario_DisciplinaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    disciplina_id?: Prisma.SortOrder;
    funcao?: Prisma.SortOrder;
    criado_em?: Prisma.SortOrder;
};
export type Usuario_DisciplinaSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
    disciplina_id?: Prisma.SortOrder;
};
export type Usuario_DisciplinaCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.Usuario_DisciplinaCreateWithoutUsuarioInput, Prisma.Usuario_DisciplinaUncheckedCreateWithoutUsuarioInput> | Prisma.Usuario_DisciplinaCreateWithoutUsuarioInput[] | Prisma.Usuario_DisciplinaUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.Usuario_DisciplinaCreateOrConnectWithoutUsuarioInput | Prisma.Usuario_DisciplinaCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.Usuario_DisciplinaCreateManyUsuarioInputEnvelope;
    connect?: Prisma.Usuario_DisciplinaWhereUniqueInput | Prisma.Usuario_DisciplinaWhereUniqueInput[];
};
export type Usuario_DisciplinaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.Usuario_DisciplinaCreateWithoutUsuarioInput, Prisma.Usuario_DisciplinaUncheckedCreateWithoutUsuarioInput> | Prisma.Usuario_DisciplinaCreateWithoutUsuarioInput[] | Prisma.Usuario_DisciplinaUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.Usuario_DisciplinaCreateOrConnectWithoutUsuarioInput | Prisma.Usuario_DisciplinaCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.Usuario_DisciplinaCreateManyUsuarioInputEnvelope;
    connect?: Prisma.Usuario_DisciplinaWhereUniqueInput | Prisma.Usuario_DisciplinaWhereUniqueInput[];
};
export type Usuario_DisciplinaUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.Usuario_DisciplinaCreateWithoutUsuarioInput, Prisma.Usuario_DisciplinaUncheckedCreateWithoutUsuarioInput> | Prisma.Usuario_DisciplinaCreateWithoutUsuarioInput[] | Prisma.Usuario_DisciplinaUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.Usuario_DisciplinaCreateOrConnectWithoutUsuarioInput | Prisma.Usuario_DisciplinaCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.Usuario_DisciplinaUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.Usuario_DisciplinaUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.Usuario_DisciplinaCreateManyUsuarioInputEnvelope;
    set?: Prisma.Usuario_DisciplinaWhereUniqueInput | Prisma.Usuario_DisciplinaWhereUniqueInput[];
    disconnect?: Prisma.Usuario_DisciplinaWhereUniqueInput | Prisma.Usuario_DisciplinaWhereUniqueInput[];
    delete?: Prisma.Usuario_DisciplinaWhereUniqueInput | Prisma.Usuario_DisciplinaWhereUniqueInput[];
    connect?: Prisma.Usuario_DisciplinaWhereUniqueInput | Prisma.Usuario_DisciplinaWhereUniqueInput[];
    update?: Prisma.Usuario_DisciplinaUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.Usuario_DisciplinaUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.Usuario_DisciplinaUpdateManyWithWhereWithoutUsuarioInput | Prisma.Usuario_DisciplinaUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.Usuario_DisciplinaScalarWhereInput | Prisma.Usuario_DisciplinaScalarWhereInput[];
};
export type Usuario_DisciplinaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.Usuario_DisciplinaCreateWithoutUsuarioInput, Prisma.Usuario_DisciplinaUncheckedCreateWithoutUsuarioInput> | Prisma.Usuario_DisciplinaCreateWithoutUsuarioInput[] | Prisma.Usuario_DisciplinaUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.Usuario_DisciplinaCreateOrConnectWithoutUsuarioInput | Prisma.Usuario_DisciplinaCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.Usuario_DisciplinaUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.Usuario_DisciplinaUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.Usuario_DisciplinaCreateManyUsuarioInputEnvelope;
    set?: Prisma.Usuario_DisciplinaWhereUniqueInput | Prisma.Usuario_DisciplinaWhereUniqueInput[];
    disconnect?: Prisma.Usuario_DisciplinaWhereUniqueInput | Prisma.Usuario_DisciplinaWhereUniqueInput[];
    delete?: Prisma.Usuario_DisciplinaWhereUniqueInput | Prisma.Usuario_DisciplinaWhereUniqueInput[];
    connect?: Prisma.Usuario_DisciplinaWhereUniqueInput | Prisma.Usuario_DisciplinaWhereUniqueInput[];
    update?: Prisma.Usuario_DisciplinaUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.Usuario_DisciplinaUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.Usuario_DisciplinaUpdateManyWithWhereWithoutUsuarioInput | Prisma.Usuario_DisciplinaUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.Usuario_DisciplinaScalarWhereInput | Prisma.Usuario_DisciplinaScalarWhereInput[];
};
export type Usuario_DisciplinaCreateNestedManyWithoutDisciplinaInput = {
    create?: Prisma.XOR<Prisma.Usuario_DisciplinaCreateWithoutDisciplinaInput, Prisma.Usuario_DisciplinaUncheckedCreateWithoutDisciplinaInput> | Prisma.Usuario_DisciplinaCreateWithoutDisciplinaInput[] | Prisma.Usuario_DisciplinaUncheckedCreateWithoutDisciplinaInput[];
    connectOrCreate?: Prisma.Usuario_DisciplinaCreateOrConnectWithoutDisciplinaInput | Prisma.Usuario_DisciplinaCreateOrConnectWithoutDisciplinaInput[];
    createMany?: Prisma.Usuario_DisciplinaCreateManyDisciplinaInputEnvelope;
    connect?: Prisma.Usuario_DisciplinaWhereUniqueInput | Prisma.Usuario_DisciplinaWhereUniqueInput[];
};
export type Usuario_DisciplinaUncheckedCreateNestedManyWithoutDisciplinaInput = {
    create?: Prisma.XOR<Prisma.Usuario_DisciplinaCreateWithoutDisciplinaInput, Prisma.Usuario_DisciplinaUncheckedCreateWithoutDisciplinaInput> | Prisma.Usuario_DisciplinaCreateWithoutDisciplinaInput[] | Prisma.Usuario_DisciplinaUncheckedCreateWithoutDisciplinaInput[];
    connectOrCreate?: Prisma.Usuario_DisciplinaCreateOrConnectWithoutDisciplinaInput | Prisma.Usuario_DisciplinaCreateOrConnectWithoutDisciplinaInput[];
    createMany?: Prisma.Usuario_DisciplinaCreateManyDisciplinaInputEnvelope;
    connect?: Prisma.Usuario_DisciplinaWhereUniqueInput | Prisma.Usuario_DisciplinaWhereUniqueInput[];
};
export type Usuario_DisciplinaUpdateManyWithoutDisciplinaNestedInput = {
    create?: Prisma.XOR<Prisma.Usuario_DisciplinaCreateWithoutDisciplinaInput, Prisma.Usuario_DisciplinaUncheckedCreateWithoutDisciplinaInput> | Prisma.Usuario_DisciplinaCreateWithoutDisciplinaInput[] | Prisma.Usuario_DisciplinaUncheckedCreateWithoutDisciplinaInput[];
    connectOrCreate?: Prisma.Usuario_DisciplinaCreateOrConnectWithoutDisciplinaInput | Prisma.Usuario_DisciplinaCreateOrConnectWithoutDisciplinaInput[];
    upsert?: Prisma.Usuario_DisciplinaUpsertWithWhereUniqueWithoutDisciplinaInput | Prisma.Usuario_DisciplinaUpsertWithWhereUniqueWithoutDisciplinaInput[];
    createMany?: Prisma.Usuario_DisciplinaCreateManyDisciplinaInputEnvelope;
    set?: Prisma.Usuario_DisciplinaWhereUniqueInput | Prisma.Usuario_DisciplinaWhereUniqueInput[];
    disconnect?: Prisma.Usuario_DisciplinaWhereUniqueInput | Prisma.Usuario_DisciplinaWhereUniqueInput[];
    delete?: Prisma.Usuario_DisciplinaWhereUniqueInput | Prisma.Usuario_DisciplinaWhereUniqueInput[];
    connect?: Prisma.Usuario_DisciplinaWhereUniqueInput | Prisma.Usuario_DisciplinaWhereUniqueInput[];
    update?: Prisma.Usuario_DisciplinaUpdateWithWhereUniqueWithoutDisciplinaInput | Prisma.Usuario_DisciplinaUpdateWithWhereUniqueWithoutDisciplinaInput[];
    updateMany?: Prisma.Usuario_DisciplinaUpdateManyWithWhereWithoutDisciplinaInput | Prisma.Usuario_DisciplinaUpdateManyWithWhereWithoutDisciplinaInput[];
    deleteMany?: Prisma.Usuario_DisciplinaScalarWhereInput | Prisma.Usuario_DisciplinaScalarWhereInput[];
};
export type Usuario_DisciplinaUncheckedUpdateManyWithoutDisciplinaNestedInput = {
    create?: Prisma.XOR<Prisma.Usuario_DisciplinaCreateWithoutDisciplinaInput, Prisma.Usuario_DisciplinaUncheckedCreateWithoutDisciplinaInput> | Prisma.Usuario_DisciplinaCreateWithoutDisciplinaInput[] | Prisma.Usuario_DisciplinaUncheckedCreateWithoutDisciplinaInput[];
    connectOrCreate?: Prisma.Usuario_DisciplinaCreateOrConnectWithoutDisciplinaInput | Prisma.Usuario_DisciplinaCreateOrConnectWithoutDisciplinaInput[];
    upsert?: Prisma.Usuario_DisciplinaUpsertWithWhereUniqueWithoutDisciplinaInput | Prisma.Usuario_DisciplinaUpsertWithWhereUniqueWithoutDisciplinaInput[];
    createMany?: Prisma.Usuario_DisciplinaCreateManyDisciplinaInputEnvelope;
    set?: Prisma.Usuario_DisciplinaWhereUniqueInput | Prisma.Usuario_DisciplinaWhereUniqueInput[];
    disconnect?: Prisma.Usuario_DisciplinaWhereUniqueInput | Prisma.Usuario_DisciplinaWhereUniqueInput[];
    delete?: Prisma.Usuario_DisciplinaWhereUniqueInput | Prisma.Usuario_DisciplinaWhereUniqueInput[];
    connect?: Prisma.Usuario_DisciplinaWhereUniqueInput | Prisma.Usuario_DisciplinaWhereUniqueInput[];
    update?: Prisma.Usuario_DisciplinaUpdateWithWhereUniqueWithoutDisciplinaInput | Prisma.Usuario_DisciplinaUpdateWithWhereUniqueWithoutDisciplinaInput[];
    updateMany?: Prisma.Usuario_DisciplinaUpdateManyWithWhereWithoutDisciplinaInput | Prisma.Usuario_DisciplinaUpdateManyWithWhereWithoutDisciplinaInput[];
    deleteMany?: Prisma.Usuario_DisciplinaScalarWhereInput | Prisma.Usuario_DisciplinaScalarWhereInput[];
};
export type Usuario_DisciplinaCreateWithoutUsuarioInput = {
    funcao: $Enums.funcaoUsuario;
    criado_em: Date | string;
    disciplina: Prisma.DisciplinasCreateNestedOneWithoutUser_materiaInput;
};
export type Usuario_DisciplinaUncheckedCreateWithoutUsuarioInput = {
    id?: number;
    disciplina_id: number;
    funcao: $Enums.funcaoUsuario;
    criado_em: Date | string;
};
export type Usuario_DisciplinaCreateOrConnectWithoutUsuarioInput = {
    where: Prisma.Usuario_DisciplinaWhereUniqueInput;
    create: Prisma.XOR<Prisma.Usuario_DisciplinaCreateWithoutUsuarioInput, Prisma.Usuario_DisciplinaUncheckedCreateWithoutUsuarioInput>;
};
export type Usuario_DisciplinaCreateManyUsuarioInputEnvelope = {
    data: Prisma.Usuario_DisciplinaCreateManyUsuarioInput | Prisma.Usuario_DisciplinaCreateManyUsuarioInput[];
    skipDuplicates?: boolean;
};
export type Usuario_DisciplinaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.Usuario_DisciplinaWhereUniqueInput;
    update: Prisma.XOR<Prisma.Usuario_DisciplinaUpdateWithoutUsuarioInput, Prisma.Usuario_DisciplinaUncheckedUpdateWithoutUsuarioInput>;
    create: Prisma.XOR<Prisma.Usuario_DisciplinaCreateWithoutUsuarioInput, Prisma.Usuario_DisciplinaUncheckedCreateWithoutUsuarioInput>;
};
export type Usuario_DisciplinaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.Usuario_DisciplinaWhereUniqueInput;
    data: Prisma.XOR<Prisma.Usuario_DisciplinaUpdateWithoutUsuarioInput, Prisma.Usuario_DisciplinaUncheckedUpdateWithoutUsuarioInput>;
};
export type Usuario_DisciplinaUpdateManyWithWhereWithoutUsuarioInput = {
    where: Prisma.Usuario_DisciplinaScalarWhereInput;
    data: Prisma.XOR<Prisma.Usuario_DisciplinaUpdateManyMutationInput, Prisma.Usuario_DisciplinaUncheckedUpdateManyWithoutUsuarioInput>;
};
export type Usuario_DisciplinaScalarWhereInput = {
    AND?: Prisma.Usuario_DisciplinaScalarWhereInput | Prisma.Usuario_DisciplinaScalarWhereInput[];
    OR?: Prisma.Usuario_DisciplinaScalarWhereInput[];
    NOT?: Prisma.Usuario_DisciplinaScalarWhereInput | Prisma.Usuario_DisciplinaScalarWhereInput[];
    id?: Prisma.IntFilter<"Usuario_Disciplina"> | number;
    usuario_id?: Prisma.IntFilter<"Usuario_Disciplina"> | number;
    disciplina_id?: Prisma.IntFilter<"Usuario_Disciplina"> | number;
    funcao?: Prisma.EnumfuncaoUsuarioFilter<"Usuario_Disciplina"> | $Enums.funcaoUsuario;
    criado_em?: Prisma.DateTimeFilter<"Usuario_Disciplina"> | Date | string;
};
export type Usuario_DisciplinaCreateWithoutDisciplinaInput = {
    funcao: $Enums.funcaoUsuario;
    criado_em: Date | string;
    usuario: Prisma.UsuarioCreateNestedOneWithoutUser_materiaInput;
};
export type Usuario_DisciplinaUncheckedCreateWithoutDisciplinaInput = {
    id?: number;
    usuario_id: number;
    funcao: $Enums.funcaoUsuario;
    criado_em: Date | string;
};
export type Usuario_DisciplinaCreateOrConnectWithoutDisciplinaInput = {
    where: Prisma.Usuario_DisciplinaWhereUniqueInput;
    create: Prisma.XOR<Prisma.Usuario_DisciplinaCreateWithoutDisciplinaInput, Prisma.Usuario_DisciplinaUncheckedCreateWithoutDisciplinaInput>;
};
export type Usuario_DisciplinaCreateManyDisciplinaInputEnvelope = {
    data: Prisma.Usuario_DisciplinaCreateManyDisciplinaInput | Prisma.Usuario_DisciplinaCreateManyDisciplinaInput[];
    skipDuplicates?: boolean;
};
export type Usuario_DisciplinaUpsertWithWhereUniqueWithoutDisciplinaInput = {
    where: Prisma.Usuario_DisciplinaWhereUniqueInput;
    update: Prisma.XOR<Prisma.Usuario_DisciplinaUpdateWithoutDisciplinaInput, Prisma.Usuario_DisciplinaUncheckedUpdateWithoutDisciplinaInput>;
    create: Prisma.XOR<Prisma.Usuario_DisciplinaCreateWithoutDisciplinaInput, Prisma.Usuario_DisciplinaUncheckedCreateWithoutDisciplinaInput>;
};
export type Usuario_DisciplinaUpdateWithWhereUniqueWithoutDisciplinaInput = {
    where: Prisma.Usuario_DisciplinaWhereUniqueInput;
    data: Prisma.XOR<Prisma.Usuario_DisciplinaUpdateWithoutDisciplinaInput, Prisma.Usuario_DisciplinaUncheckedUpdateWithoutDisciplinaInput>;
};
export type Usuario_DisciplinaUpdateManyWithWhereWithoutDisciplinaInput = {
    where: Prisma.Usuario_DisciplinaScalarWhereInput;
    data: Prisma.XOR<Prisma.Usuario_DisciplinaUpdateManyMutationInput, Prisma.Usuario_DisciplinaUncheckedUpdateManyWithoutDisciplinaInput>;
};
export type Usuario_DisciplinaCreateManyUsuarioInput = {
    id?: number;
    disciplina_id: number;
    funcao: $Enums.funcaoUsuario;
    criado_em: Date | string;
};
export type Usuario_DisciplinaUpdateWithoutUsuarioInput = {
    funcao?: Prisma.EnumfuncaoUsuarioFieldUpdateOperationsInput | $Enums.funcaoUsuario;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    disciplina?: Prisma.DisciplinasUpdateOneRequiredWithoutUser_materiaNestedInput;
};
export type Usuario_DisciplinaUncheckedUpdateWithoutUsuarioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    disciplina_id?: Prisma.IntFieldUpdateOperationsInput | number;
    funcao?: Prisma.EnumfuncaoUsuarioFieldUpdateOperationsInput | $Enums.funcaoUsuario;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Usuario_DisciplinaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    disciplina_id?: Prisma.IntFieldUpdateOperationsInput | number;
    funcao?: Prisma.EnumfuncaoUsuarioFieldUpdateOperationsInput | $Enums.funcaoUsuario;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Usuario_DisciplinaCreateManyDisciplinaInput = {
    id?: number;
    usuario_id: number;
    funcao: $Enums.funcaoUsuario;
    criado_em: Date | string;
};
export type Usuario_DisciplinaUpdateWithoutDisciplinaInput = {
    funcao?: Prisma.EnumfuncaoUsuarioFieldUpdateOperationsInput | $Enums.funcaoUsuario;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usuario?: Prisma.UsuarioUpdateOneRequiredWithoutUser_materiaNestedInput;
};
export type Usuario_DisciplinaUncheckedUpdateWithoutDisciplinaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    usuario_id?: Prisma.IntFieldUpdateOperationsInput | number;
    funcao?: Prisma.EnumfuncaoUsuarioFieldUpdateOperationsInput | $Enums.funcaoUsuario;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Usuario_DisciplinaUncheckedUpdateManyWithoutDisciplinaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    usuario_id?: Prisma.IntFieldUpdateOperationsInput | number;
    funcao?: Prisma.EnumfuncaoUsuarioFieldUpdateOperationsInput | $Enums.funcaoUsuario;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Usuario_DisciplinaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuario_id?: boolean;
    disciplina_id?: boolean;
    funcao?: boolean;
    criado_em?: boolean;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    disciplina?: boolean | Prisma.DisciplinasDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["usuario_Disciplina"]>;
export type Usuario_DisciplinaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuario_id?: boolean;
    disciplina_id?: boolean;
    funcao?: boolean;
    criado_em?: boolean;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    disciplina?: boolean | Prisma.DisciplinasDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["usuario_Disciplina"]>;
export type Usuario_DisciplinaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuario_id?: boolean;
    disciplina_id?: boolean;
    funcao?: boolean;
    criado_em?: boolean;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    disciplina?: boolean | Prisma.DisciplinasDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["usuario_Disciplina"]>;
export type Usuario_DisciplinaSelectScalar = {
    id?: boolean;
    usuario_id?: boolean;
    disciplina_id?: boolean;
    funcao?: boolean;
    criado_em?: boolean;
};
export type Usuario_DisciplinaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "usuario_id" | "disciplina_id" | "funcao" | "criado_em", ExtArgs["result"]["usuario_Disciplina"]>;
export type Usuario_DisciplinaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    disciplina?: boolean | Prisma.DisciplinasDefaultArgs<ExtArgs>;
};
export type Usuario_DisciplinaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    disciplina?: boolean | Prisma.DisciplinasDefaultArgs<ExtArgs>;
};
export type Usuario_DisciplinaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    disciplina?: boolean | Prisma.DisciplinasDefaultArgs<ExtArgs>;
};
export type $Usuario_DisciplinaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Usuario_Disciplina";
    objects: {
        usuario: Prisma.$UsuarioPayload<ExtArgs>;
        disciplina: Prisma.$DisciplinasPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        usuario_id: number;
        disciplina_id: number;
        funcao: $Enums.funcaoUsuario;
        criado_em: Date;
    }, ExtArgs["result"]["usuario_Disciplina"]>;
    composites: {};
};
export type Usuario_DisciplinaGetPayload<S extends boolean | null | undefined | Usuario_DisciplinaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$Usuario_DisciplinaPayload, S>;
export type Usuario_DisciplinaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<Usuario_DisciplinaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Usuario_DisciplinaCountAggregateInputType | true;
};
export interface Usuario_DisciplinaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Usuario_Disciplina'];
        meta: {
            name: 'Usuario_Disciplina';
        };
    };
    findUnique<T extends Usuario_DisciplinaFindUniqueArgs>(args: Prisma.SelectSubset<T, Usuario_DisciplinaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__Usuario_DisciplinaClient<runtime.Types.Result.GetResult<Prisma.$Usuario_DisciplinaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends Usuario_DisciplinaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, Usuario_DisciplinaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__Usuario_DisciplinaClient<runtime.Types.Result.GetResult<Prisma.$Usuario_DisciplinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends Usuario_DisciplinaFindFirstArgs>(args?: Prisma.SelectSubset<T, Usuario_DisciplinaFindFirstArgs<ExtArgs>>): Prisma.Prisma__Usuario_DisciplinaClient<runtime.Types.Result.GetResult<Prisma.$Usuario_DisciplinaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends Usuario_DisciplinaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, Usuario_DisciplinaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__Usuario_DisciplinaClient<runtime.Types.Result.GetResult<Prisma.$Usuario_DisciplinaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends Usuario_DisciplinaFindManyArgs>(args?: Prisma.SelectSubset<T, Usuario_DisciplinaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Usuario_DisciplinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends Usuario_DisciplinaCreateArgs>(args: Prisma.SelectSubset<T, Usuario_DisciplinaCreateArgs<ExtArgs>>): Prisma.Prisma__Usuario_DisciplinaClient<runtime.Types.Result.GetResult<Prisma.$Usuario_DisciplinaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends Usuario_DisciplinaCreateManyArgs>(args?: Prisma.SelectSubset<T, Usuario_DisciplinaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends Usuario_DisciplinaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, Usuario_DisciplinaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Usuario_DisciplinaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends Usuario_DisciplinaDeleteArgs>(args: Prisma.SelectSubset<T, Usuario_DisciplinaDeleteArgs<ExtArgs>>): Prisma.Prisma__Usuario_DisciplinaClient<runtime.Types.Result.GetResult<Prisma.$Usuario_DisciplinaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends Usuario_DisciplinaUpdateArgs>(args: Prisma.SelectSubset<T, Usuario_DisciplinaUpdateArgs<ExtArgs>>): Prisma.Prisma__Usuario_DisciplinaClient<runtime.Types.Result.GetResult<Prisma.$Usuario_DisciplinaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends Usuario_DisciplinaDeleteManyArgs>(args?: Prisma.SelectSubset<T, Usuario_DisciplinaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends Usuario_DisciplinaUpdateManyArgs>(args: Prisma.SelectSubset<T, Usuario_DisciplinaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends Usuario_DisciplinaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, Usuario_DisciplinaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Usuario_DisciplinaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends Usuario_DisciplinaUpsertArgs>(args: Prisma.SelectSubset<T, Usuario_DisciplinaUpsertArgs<ExtArgs>>): Prisma.Prisma__Usuario_DisciplinaClient<runtime.Types.Result.GetResult<Prisma.$Usuario_DisciplinaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends Usuario_DisciplinaCountArgs>(args?: Prisma.Subset<T, Usuario_DisciplinaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Usuario_DisciplinaCountAggregateOutputType> : number>;
    aggregate<T extends Usuario_DisciplinaAggregateArgs>(args: Prisma.Subset<T, Usuario_DisciplinaAggregateArgs>): Prisma.PrismaPromise<GetUsuario_DisciplinaAggregateType<T>>;
    groupBy<T extends Usuario_DisciplinaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: Usuario_DisciplinaGroupByArgs['orderBy'];
    } : {
        orderBy?: Usuario_DisciplinaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, Usuario_DisciplinaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuario_DisciplinaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: Usuario_DisciplinaFieldRefs;
}
export interface Prisma__Usuario_DisciplinaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    usuario<T extends Prisma.UsuarioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsuarioDefaultArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    disciplina<T extends Prisma.DisciplinasDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DisciplinasDefaultArgs<ExtArgs>>): Prisma.Prisma__DisciplinasClient<runtime.Types.Result.GetResult<Prisma.$DisciplinasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface Usuario_DisciplinaFieldRefs {
    readonly id: Prisma.FieldRef<"Usuario_Disciplina", 'Int'>;
    readonly usuario_id: Prisma.FieldRef<"Usuario_Disciplina", 'Int'>;
    readonly disciplina_id: Prisma.FieldRef<"Usuario_Disciplina", 'Int'>;
    readonly funcao: Prisma.FieldRef<"Usuario_Disciplina", 'funcaoUsuario'>;
    readonly criado_em: Prisma.FieldRef<"Usuario_Disciplina", 'DateTime'>;
}
export type Usuario_DisciplinaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Usuario_DisciplinaSelect<ExtArgs> | null;
    omit?: Prisma.Usuario_DisciplinaOmit<ExtArgs> | null;
    include?: Prisma.Usuario_DisciplinaInclude<ExtArgs> | null;
    where: Prisma.Usuario_DisciplinaWhereUniqueInput;
};
export type Usuario_DisciplinaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Usuario_DisciplinaSelect<ExtArgs> | null;
    omit?: Prisma.Usuario_DisciplinaOmit<ExtArgs> | null;
    include?: Prisma.Usuario_DisciplinaInclude<ExtArgs> | null;
    where: Prisma.Usuario_DisciplinaWhereUniqueInput;
};
export type Usuario_DisciplinaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Usuario_DisciplinaSelect<ExtArgs> | null;
    omit?: Prisma.Usuario_DisciplinaOmit<ExtArgs> | null;
    include?: Prisma.Usuario_DisciplinaInclude<ExtArgs> | null;
    where?: Prisma.Usuario_DisciplinaWhereInput;
    orderBy?: Prisma.Usuario_DisciplinaOrderByWithRelationInput | Prisma.Usuario_DisciplinaOrderByWithRelationInput[];
    cursor?: Prisma.Usuario_DisciplinaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Usuario_DisciplinaScalarFieldEnum | Prisma.Usuario_DisciplinaScalarFieldEnum[];
};
export type Usuario_DisciplinaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Usuario_DisciplinaSelect<ExtArgs> | null;
    omit?: Prisma.Usuario_DisciplinaOmit<ExtArgs> | null;
    include?: Prisma.Usuario_DisciplinaInclude<ExtArgs> | null;
    where?: Prisma.Usuario_DisciplinaWhereInput;
    orderBy?: Prisma.Usuario_DisciplinaOrderByWithRelationInput | Prisma.Usuario_DisciplinaOrderByWithRelationInput[];
    cursor?: Prisma.Usuario_DisciplinaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Usuario_DisciplinaScalarFieldEnum | Prisma.Usuario_DisciplinaScalarFieldEnum[];
};
export type Usuario_DisciplinaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Usuario_DisciplinaSelect<ExtArgs> | null;
    omit?: Prisma.Usuario_DisciplinaOmit<ExtArgs> | null;
    include?: Prisma.Usuario_DisciplinaInclude<ExtArgs> | null;
    where?: Prisma.Usuario_DisciplinaWhereInput;
    orderBy?: Prisma.Usuario_DisciplinaOrderByWithRelationInput | Prisma.Usuario_DisciplinaOrderByWithRelationInput[];
    cursor?: Prisma.Usuario_DisciplinaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Usuario_DisciplinaScalarFieldEnum | Prisma.Usuario_DisciplinaScalarFieldEnum[];
};
export type Usuario_DisciplinaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Usuario_DisciplinaSelect<ExtArgs> | null;
    omit?: Prisma.Usuario_DisciplinaOmit<ExtArgs> | null;
    include?: Prisma.Usuario_DisciplinaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.Usuario_DisciplinaCreateInput, Prisma.Usuario_DisciplinaUncheckedCreateInput>;
};
export type Usuario_DisciplinaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.Usuario_DisciplinaCreateManyInput | Prisma.Usuario_DisciplinaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type Usuario_DisciplinaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Usuario_DisciplinaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.Usuario_DisciplinaOmit<ExtArgs> | null;
    data: Prisma.Usuario_DisciplinaCreateManyInput | Prisma.Usuario_DisciplinaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.Usuario_DisciplinaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type Usuario_DisciplinaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Usuario_DisciplinaSelect<ExtArgs> | null;
    omit?: Prisma.Usuario_DisciplinaOmit<ExtArgs> | null;
    include?: Prisma.Usuario_DisciplinaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.Usuario_DisciplinaUpdateInput, Prisma.Usuario_DisciplinaUncheckedUpdateInput>;
    where: Prisma.Usuario_DisciplinaWhereUniqueInput;
};
export type Usuario_DisciplinaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.Usuario_DisciplinaUpdateManyMutationInput, Prisma.Usuario_DisciplinaUncheckedUpdateManyInput>;
    where?: Prisma.Usuario_DisciplinaWhereInput;
    limit?: number;
};
export type Usuario_DisciplinaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Usuario_DisciplinaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.Usuario_DisciplinaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.Usuario_DisciplinaUpdateManyMutationInput, Prisma.Usuario_DisciplinaUncheckedUpdateManyInput>;
    where?: Prisma.Usuario_DisciplinaWhereInput;
    limit?: number;
    include?: Prisma.Usuario_DisciplinaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type Usuario_DisciplinaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Usuario_DisciplinaSelect<ExtArgs> | null;
    omit?: Prisma.Usuario_DisciplinaOmit<ExtArgs> | null;
    include?: Prisma.Usuario_DisciplinaInclude<ExtArgs> | null;
    where: Prisma.Usuario_DisciplinaWhereUniqueInput;
    create: Prisma.XOR<Prisma.Usuario_DisciplinaCreateInput, Prisma.Usuario_DisciplinaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.Usuario_DisciplinaUpdateInput, Prisma.Usuario_DisciplinaUncheckedUpdateInput>;
};
export type Usuario_DisciplinaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Usuario_DisciplinaSelect<ExtArgs> | null;
    omit?: Prisma.Usuario_DisciplinaOmit<ExtArgs> | null;
    include?: Prisma.Usuario_DisciplinaInclude<ExtArgs> | null;
    where: Prisma.Usuario_DisciplinaWhereUniqueInput;
};
export type Usuario_DisciplinaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Usuario_DisciplinaWhereInput;
    limit?: number;
};
export type Usuario_DisciplinaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Usuario_DisciplinaSelect<ExtArgs> | null;
    omit?: Prisma.Usuario_DisciplinaOmit<ExtArgs> | null;
    include?: Prisma.Usuario_DisciplinaInclude<ExtArgs> | null;
};
