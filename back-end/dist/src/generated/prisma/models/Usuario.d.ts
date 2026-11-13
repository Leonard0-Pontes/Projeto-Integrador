import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UsuarioModel = runtime.Types.Result.DefaultSelection<Prisma.$UsuarioPayload>;
export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null;
    _avg: UsuarioAvgAggregateOutputType | null;
    _sum: UsuarioSumAggregateOutputType | null;
    _min: UsuarioMinAggregateOutputType | null;
    _max: UsuarioMaxAggregateOutputType | null;
};
export type UsuarioAvgAggregateOutputType = {
    id: number | null;
};
export type UsuarioSumAggregateOutputType = {
    id: number | null;
};
export type UsuarioMinAggregateOutputType = {
    id: number | null;
    nome: string | null;
    email: string | null;
    senha_hash: string | null;
    funcao: $Enums.funcaoUsuario | null;
    curso: string | null;
    periodo: $Enums.periodos | null;
    is_admin: boolean | null;
    ativo: boolean | null;
    criado_em: Date | null;
    atualizado_em: Date | null;
};
export type UsuarioMaxAggregateOutputType = {
    id: number | null;
    nome: string | null;
    email: string | null;
    senha_hash: string | null;
    funcao: $Enums.funcaoUsuario | null;
    curso: string | null;
    periodo: $Enums.periodos | null;
    is_admin: boolean | null;
    ativo: boolean | null;
    criado_em: Date | null;
    atualizado_em: Date | null;
};
export type UsuarioCountAggregateOutputType = {
    id: number;
    nome: number;
    email: number;
    senha_hash: number;
    funcao: number;
    curso: number;
    periodo: number;
    is_admin: number;
    ativo: number;
    criado_em: number;
    atualizado_em: number;
    _all: number;
};
export type UsuarioAvgAggregateInputType = {
    id?: true;
};
export type UsuarioSumAggregateInputType = {
    id?: true;
};
export type UsuarioMinAggregateInputType = {
    id?: true;
    nome?: true;
    email?: true;
    senha_hash?: true;
    funcao?: true;
    curso?: true;
    periodo?: true;
    is_admin?: true;
    ativo?: true;
    criado_em?: true;
    atualizado_em?: true;
};
export type UsuarioMaxAggregateInputType = {
    id?: true;
    nome?: true;
    email?: true;
    senha_hash?: true;
    funcao?: true;
    curso?: true;
    periodo?: true;
    is_admin?: true;
    ativo?: true;
    criado_em?: true;
    atualizado_em?: true;
};
export type UsuarioCountAggregateInputType = {
    id?: true;
    nome?: true;
    email?: true;
    senha_hash?: true;
    funcao?: true;
    curso?: true;
    periodo?: true;
    is_admin?: true;
    ativo?: true;
    criado_em?: true;
    atualizado_em?: true;
    _all?: true;
};
export type UsuarioAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithRelationInput | Prisma.UsuarioOrderByWithRelationInput[];
    cursor?: Prisma.UsuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UsuarioCountAggregateInputType;
    _avg?: UsuarioAvgAggregateInputType;
    _sum?: UsuarioSumAggregateInputType;
    _min?: UsuarioMinAggregateInputType;
    _max?: UsuarioMaxAggregateInputType;
};
export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
    [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUsuario[P]> : Prisma.GetScalarType<T[P], AggregateUsuario[P]>;
};
export type UsuarioGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithAggregationInput | Prisma.UsuarioOrderByWithAggregationInput[];
    by: Prisma.UsuarioScalarFieldEnum[] | Prisma.UsuarioScalarFieldEnum;
    having?: Prisma.UsuarioScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsuarioCountAggregateInputType | true;
    _avg?: UsuarioAvgAggregateInputType;
    _sum?: UsuarioSumAggregateInputType;
    _min?: UsuarioMinAggregateInputType;
    _max?: UsuarioMaxAggregateInputType;
};
export type UsuarioGroupByOutputType = {
    id: number;
    nome: string;
    email: string;
    senha_hash: string;
    funcao: $Enums.funcaoUsuario;
    curso: string;
    periodo: $Enums.periodos;
    is_admin: boolean;
    ativo: boolean;
    criado_em: Date;
    atualizado_em: Date;
    _count: UsuarioCountAggregateOutputType | null;
    _avg: UsuarioAvgAggregateOutputType | null;
    _sum: UsuarioSumAggregateOutputType | null;
    _min: UsuarioMinAggregateOutputType | null;
    _max: UsuarioMaxAggregateOutputType | null;
};
export type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UsuarioGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UsuarioGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UsuarioGroupByOutputType[P]>;
}>>;
export type UsuarioWhereInput = {
    AND?: Prisma.UsuarioWhereInput | Prisma.UsuarioWhereInput[];
    OR?: Prisma.UsuarioWhereInput[];
    NOT?: Prisma.UsuarioWhereInput | Prisma.UsuarioWhereInput[];
    id?: Prisma.IntFilter<"Usuario"> | number;
    nome?: Prisma.StringFilter<"Usuario"> | string;
    email?: Prisma.StringFilter<"Usuario"> | string;
    senha_hash?: Prisma.StringFilter<"Usuario"> | string;
    funcao?: Prisma.EnumfuncaoUsuarioFilter<"Usuario"> | $Enums.funcaoUsuario;
    curso?: Prisma.StringFilter<"Usuario"> | string;
    periodo?: Prisma.EnumperiodosFilter<"Usuario"> | $Enums.periodos;
    is_admin?: Prisma.BoolFilter<"Usuario"> | boolean;
    ativo?: Prisma.BoolFilter<"Usuario"> | boolean;
    criado_em?: Prisma.DateTimeFilter<"Usuario"> | Date | string;
    atualizado_em?: Prisma.DateTimeFilter<"Usuario"> | Date | string;
    solicitacoes?: Prisma.SolicitacoesListRelationFilter;
    monitoria?: Prisma.MonitoriaListRelationFilter;
    user_materia?: Prisma.Usuario_DisciplinaListRelationFilter;
};
export type UsuarioOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    senha_hash?: Prisma.SortOrder;
    funcao?: Prisma.SortOrder;
    curso?: Prisma.SortOrder;
    periodo?: Prisma.SortOrder;
    is_admin?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    criado_em?: Prisma.SortOrder;
    atualizado_em?: Prisma.SortOrder;
    solicitacoes?: Prisma.SolicitacoesOrderByRelationAggregateInput;
    monitoria?: Prisma.MonitoriaOrderByRelationAggregateInput;
    user_materia?: Prisma.Usuario_DisciplinaOrderByRelationAggregateInput;
};
export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    email?: string;
    AND?: Prisma.UsuarioWhereInput | Prisma.UsuarioWhereInput[];
    OR?: Prisma.UsuarioWhereInput[];
    NOT?: Prisma.UsuarioWhereInput | Prisma.UsuarioWhereInput[];
    nome?: Prisma.StringFilter<"Usuario"> | string;
    senha_hash?: Prisma.StringFilter<"Usuario"> | string;
    funcao?: Prisma.EnumfuncaoUsuarioFilter<"Usuario"> | $Enums.funcaoUsuario;
    curso?: Prisma.StringFilter<"Usuario"> | string;
    periodo?: Prisma.EnumperiodosFilter<"Usuario"> | $Enums.periodos;
    is_admin?: Prisma.BoolFilter<"Usuario"> | boolean;
    ativo?: Prisma.BoolFilter<"Usuario"> | boolean;
    criado_em?: Prisma.DateTimeFilter<"Usuario"> | Date | string;
    atualizado_em?: Prisma.DateTimeFilter<"Usuario"> | Date | string;
    solicitacoes?: Prisma.SolicitacoesListRelationFilter;
    monitoria?: Prisma.MonitoriaListRelationFilter;
    user_materia?: Prisma.Usuario_DisciplinaListRelationFilter;
}, "id" | "email">;
export type UsuarioOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    senha_hash?: Prisma.SortOrder;
    funcao?: Prisma.SortOrder;
    curso?: Prisma.SortOrder;
    periodo?: Prisma.SortOrder;
    is_admin?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    criado_em?: Prisma.SortOrder;
    atualizado_em?: Prisma.SortOrder;
    _count?: Prisma.UsuarioCountOrderByAggregateInput;
    _avg?: Prisma.UsuarioAvgOrderByAggregateInput;
    _max?: Prisma.UsuarioMaxOrderByAggregateInput;
    _min?: Prisma.UsuarioMinOrderByAggregateInput;
    _sum?: Prisma.UsuarioSumOrderByAggregateInput;
};
export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: Prisma.UsuarioScalarWhereWithAggregatesInput | Prisma.UsuarioScalarWhereWithAggregatesInput[];
    OR?: Prisma.UsuarioScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UsuarioScalarWhereWithAggregatesInput | Prisma.UsuarioScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Usuario"> | number;
    nome?: Prisma.StringWithAggregatesFilter<"Usuario"> | string;
    email?: Prisma.StringWithAggregatesFilter<"Usuario"> | string;
    senha_hash?: Prisma.StringWithAggregatesFilter<"Usuario"> | string;
    funcao?: Prisma.EnumfuncaoUsuarioWithAggregatesFilter<"Usuario"> | $Enums.funcaoUsuario;
    curso?: Prisma.StringWithAggregatesFilter<"Usuario"> | string;
    periodo?: Prisma.EnumperiodosWithAggregatesFilter<"Usuario"> | $Enums.periodos;
    is_admin?: Prisma.BoolWithAggregatesFilter<"Usuario"> | boolean;
    ativo?: Prisma.BoolWithAggregatesFilter<"Usuario"> | boolean;
    criado_em?: Prisma.DateTimeWithAggregatesFilter<"Usuario"> | Date | string;
    atualizado_em?: Prisma.DateTimeWithAggregatesFilter<"Usuario"> | Date | string;
};
export type UsuarioCreateInput = {
    nome: string;
    email: string;
    senha_hash: string;
    funcao: $Enums.funcaoUsuario;
    curso: string;
    periodo: $Enums.periodos;
    is_admin?: boolean;
    ativo?: boolean;
    criado_em: Date | string;
    atualizado_em: Date | string;
    solicitacoes?: Prisma.SolicitacoesCreateNestedManyWithoutAlunoInput;
    monitoria?: Prisma.MonitoriaCreateNestedManyWithoutMonitorInput;
    user_materia?: Prisma.Usuario_DisciplinaCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioUncheckedCreateInput = {
    id?: number;
    nome: string;
    email: string;
    senha_hash: string;
    funcao: $Enums.funcaoUsuario;
    curso: string;
    periodo: $Enums.periodos;
    is_admin?: boolean;
    ativo?: boolean;
    criado_em: Date | string;
    atualizado_em: Date | string;
    solicitacoes?: Prisma.SolicitacoesUncheckedCreateNestedManyWithoutAlunoInput;
    monitoria?: Prisma.MonitoriaUncheckedCreateNestedManyWithoutMonitorInput;
    user_materia?: Prisma.Usuario_DisciplinaUncheckedCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioUpdateInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    senha_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    funcao?: Prisma.EnumfuncaoUsuarioFieldUpdateOperationsInput | $Enums.funcaoUsuario;
    curso?: Prisma.StringFieldUpdateOperationsInput | string;
    periodo?: Prisma.EnumperiodosFieldUpdateOperationsInput | $Enums.periodos;
    is_admin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    solicitacoes?: Prisma.SolicitacoesUpdateManyWithoutAlunoNestedInput;
    monitoria?: Prisma.MonitoriaUpdateManyWithoutMonitorNestedInput;
    user_materia?: Prisma.Usuario_DisciplinaUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    senha_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    funcao?: Prisma.EnumfuncaoUsuarioFieldUpdateOperationsInput | $Enums.funcaoUsuario;
    curso?: Prisma.StringFieldUpdateOperationsInput | string;
    periodo?: Prisma.EnumperiodosFieldUpdateOperationsInput | $Enums.periodos;
    is_admin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    solicitacoes?: Prisma.SolicitacoesUncheckedUpdateManyWithoutAlunoNestedInput;
    monitoria?: Prisma.MonitoriaUncheckedUpdateManyWithoutMonitorNestedInput;
    user_materia?: Prisma.Usuario_DisciplinaUncheckedUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioCreateManyInput = {
    id?: number;
    nome: string;
    email: string;
    senha_hash: string;
    funcao: $Enums.funcaoUsuario;
    curso: string;
    periodo: $Enums.periodos;
    is_admin?: boolean;
    ativo?: boolean;
    criado_em: Date | string;
    atualizado_em: Date | string;
};
export type UsuarioUpdateManyMutationInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    senha_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    funcao?: Prisma.EnumfuncaoUsuarioFieldUpdateOperationsInput | $Enums.funcaoUsuario;
    curso?: Prisma.StringFieldUpdateOperationsInput | string;
    periodo?: Prisma.EnumperiodosFieldUpdateOperationsInput | $Enums.periodos;
    is_admin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsuarioUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    senha_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    funcao?: Prisma.EnumfuncaoUsuarioFieldUpdateOperationsInput | $Enums.funcaoUsuario;
    curso?: Prisma.StringFieldUpdateOperationsInput | string;
    periodo?: Prisma.EnumperiodosFieldUpdateOperationsInput | $Enums.periodos;
    is_admin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsuarioCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    senha_hash?: Prisma.SortOrder;
    funcao?: Prisma.SortOrder;
    curso?: Prisma.SortOrder;
    periodo?: Prisma.SortOrder;
    is_admin?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    criado_em?: Prisma.SortOrder;
    atualizado_em?: Prisma.SortOrder;
};
export type UsuarioAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type UsuarioMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    senha_hash?: Prisma.SortOrder;
    funcao?: Prisma.SortOrder;
    curso?: Prisma.SortOrder;
    periodo?: Prisma.SortOrder;
    is_admin?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    criado_em?: Prisma.SortOrder;
    atualizado_em?: Prisma.SortOrder;
};
export type UsuarioMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    senha_hash?: Prisma.SortOrder;
    funcao?: Prisma.SortOrder;
    curso?: Prisma.SortOrder;
    periodo?: Prisma.SortOrder;
    is_admin?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    criado_em?: Prisma.SortOrder;
    atualizado_em?: Prisma.SortOrder;
};
export type UsuarioSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type UsuarioScalarRelationFilter = {
    is?: Prisma.UsuarioWhereInput;
    isNot?: Prisma.UsuarioWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type EnumfuncaoUsuarioFieldUpdateOperationsInput = {
    set?: $Enums.funcaoUsuario;
};
export type EnumperiodosFieldUpdateOperationsInput = {
    set?: $Enums.periodos;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type UsuarioCreateNestedOneWithoutSolicitacoesInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutSolicitacoesInput, Prisma.UsuarioUncheckedCreateWithoutSolicitacoesInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutSolicitacoesInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioUpdateOneRequiredWithoutSolicitacoesNestedInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutSolicitacoesInput, Prisma.UsuarioUncheckedCreateWithoutSolicitacoesInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutSolicitacoesInput;
    upsert?: Prisma.UsuarioUpsertWithoutSolicitacoesInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsuarioUpdateToOneWithWhereWithoutSolicitacoesInput, Prisma.UsuarioUpdateWithoutSolicitacoesInput>, Prisma.UsuarioUncheckedUpdateWithoutSolicitacoesInput>;
};
export type UsuarioCreateNestedOneWithoutMonitoriaInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutMonitoriaInput, Prisma.UsuarioUncheckedCreateWithoutMonitoriaInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutMonitoriaInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioUpdateOneRequiredWithoutMonitoriaNestedInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutMonitoriaInput, Prisma.UsuarioUncheckedCreateWithoutMonitoriaInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutMonitoriaInput;
    upsert?: Prisma.UsuarioUpsertWithoutMonitoriaInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsuarioUpdateToOneWithWhereWithoutMonitoriaInput, Prisma.UsuarioUpdateWithoutMonitoriaInput>, Prisma.UsuarioUncheckedUpdateWithoutMonitoriaInput>;
};
export type UsuarioCreateNestedOneWithoutUser_materiaInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutUser_materiaInput, Prisma.UsuarioUncheckedCreateWithoutUser_materiaInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutUser_materiaInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioUpdateOneRequiredWithoutUser_materiaNestedInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutUser_materiaInput, Prisma.UsuarioUncheckedCreateWithoutUser_materiaInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutUser_materiaInput;
    upsert?: Prisma.UsuarioUpsertWithoutUser_materiaInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsuarioUpdateToOneWithWhereWithoutUser_materiaInput, Prisma.UsuarioUpdateWithoutUser_materiaInput>, Prisma.UsuarioUncheckedUpdateWithoutUser_materiaInput>;
};
export type UsuarioCreateWithoutSolicitacoesInput = {
    nome: string;
    email: string;
    senha_hash: string;
    funcao: $Enums.funcaoUsuario;
    curso: string;
    periodo: $Enums.periodos;
    is_admin?: boolean;
    ativo?: boolean;
    criado_em: Date | string;
    atualizado_em: Date | string;
    monitoria?: Prisma.MonitoriaCreateNestedManyWithoutMonitorInput;
    user_materia?: Prisma.Usuario_DisciplinaCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioUncheckedCreateWithoutSolicitacoesInput = {
    id?: number;
    nome: string;
    email: string;
    senha_hash: string;
    funcao: $Enums.funcaoUsuario;
    curso: string;
    periodo: $Enums.periodos;
    is_admin?: boolean;
    ativo?: boolean;
    criado_em: Date | string;
    atualizado_em: Date | string;
    monitoria?: Prisma.MonitoriaUncheckedCreateNestedManyWithoutMonitorInput;
    user_materia?: Prisma.Usuario_DisciplinaUncheckedCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioCreateOrConnectWithoutSolicitacoesInput = {
    where: Prisma.UsuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutSolicitacoesInput, Prisma.UsuarioUncheckedCreateWithoutSolicitacoesInput>;
};
export type UsuarioUpsertWithoutSolicitacoesInput = {
    update: Prisma.XOR<Prisma.UsuarioUpdateWithoutSolicitacoesInput, Prisma.UsuarioUncheckedUpdateWithoutSolicitacoesInput>;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutSolicitacoesInput, Prisma.UsuarioUncheckedCreateWithoutSolicitacoesInput>;
    where?: Prisma.UsuarioWhereInput;
};
export type UsuarioUpdateToOneWithWhereWithoutSolicitacoesInput = {
    where?: Prisma.UsuarioWhereInput;
    data: Prisma.XOR<Prisma.UsuarioUpdateWithoutSolicitacoesInput, Prisma.UsuarioUncheckedUpdateWithoutSolicitacoesInput>;
};
export type UsuarioUpdateWithoutSolicitacoesInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    senha_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    funcao?: Prisma.EnumfuncaoUsuarioFieldUpdateOperationsInput | $Enums.funcaoUsuario;
    curso?: Prisma.StringFieldUpdateOperationsInput | string;
    periodo?: Prisma.EnumperiodosFieldUpdateOperationsInput | $Enums.periodos;
    is_admin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    monitoria?: Prisma.MonitoriaUpdateManyWithoutMonitorNestedInput;
    user_materia?: Prisma.Usuario_DisciplinaUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioUncheckedUpdateWithoutSolicitacoesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    senha_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    funcao?: Prisma.EnumfuncaoUsuarioFieldUpdateOperationsInput | $Enums.funcaoUsuario;
    curso?: Prisma.StringFieldUpdateOperationsInput | string;
    periodo?: Prisma.EnumperiodosFieldUpdateOperationsInput | $Enums.periodos;
    is_admin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    monitoria?: Prisma.MonitoriaUncheckedUpdateManyWithoutMonitorNestedInput;
    user_materia?: Prisma.Usuario_DisciplinaUncheckedUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioCreateWithoutMonitoriaInput = {
    nome: string;
    email: string;
    senha_hash: string;
    funcao: $Enums.funcaoUsuario;
    curso: string;
    periodo: $Enums.periodos;
    is_admin?: boolean;
    ativo?: boolean;
    criado_em: Date | string;
    atualizado_em: Date | string;
    solicitacoes?: Prisma.SolicitacoesCreateNestedManyWithoutAlunoInput;
    user_materia?: Prisma.Usuario_DisciplinaCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioUncheckedCreateWithoutMonitoriaInput = {
    id?: number;
    nome: string;
    email: string;
    senha_hash: string;
    funcao: $Enums.funcaoUsuario;
    curso: string;
    periodo: $Enums.periodos;
    is_admin?: boolean;
    ativo?: boolean;
    criado_em: Date | string;
    atualizado_em: Date | string;
    solicitacoes?: Prisma.SolicitacoesUncheckedCreateNestedManyWithoutAlunoInput;
    user_materia?: Prisma.Usuario_DisciplinaUncheckedCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioCreateOrConnectWithoutMonitoriaInput = {
    where: Prisma.UsuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutMonitoriaInput, Prisma.UsuarioUncheckedCreateWithoutMonitoriaInput>;
};
export type UsuarioUpsertWithoutMonitoriaInput = {
    update: Prisma.XOR<Prisma.UsuarioUpdateWithoutMonitoriaInput, Prisma.UsuarioUncheckedUpdateWithoutMonitoriaInput>;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutMonitoriaInput, Prisma.UsuarioUncheckedCreateWithoutMonitoriaInput>;
    where?: Prisma.UsuarioWhereInput;
};
export type UsuarioUpdateToOneWithWhereWithoutMonitoriaInput = {
    where?: Prisma.UsuarioWhereInput;
    data: Prisma.XOR<Prisma.UsuarioUpdateWithoutMonitoriaInput, Prisma.UsuarioUncheckedUpdateWithoutMonitoriaInput>;
};
export type UsuarioUpdateWithoutMonitoriaInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    senha_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    funcao?: Prisma.EnumfuncaoUsuarioFieldUpdateOperationsInput | $Enums.funcaoUsuario;
    curso?: Prisma.StringFieldUpdateOperationsInput | string;
    periodo?: Prisma.EnumperiodosFieldUpdateOperationsInput | $Enums.periodos;
    is_admin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    solicitacoes?: Prisma.SolicitacoesUpdateManyWithoutAlunoNestedInput;
    user_materia?: Prisma.Usuario_DisciplinaUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioUncheckedUpdateWithoutMonitoriaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    senha_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    funcao?: Prisma.EnumfuncaoUsuarioFieldUpdateOperationsInput | $Enums.funcaoUsuario;
    curso?: Prisma.StringFieldUpdateOperationsInput | string;
    periodo?: Prisma.EnumperiodosFieldUpdateOperationsInput | $Enums.periodos;
    is_admin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    solicitacoes?: Prisma.SolicitacoesUncheckedUpdateManyWithoutAlunoNestedInput;
    user_materia?: Prisma.Usuario_DisciplinaUncheckedUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioCreateWithoutUser_materiaInput = {
    nome: string;
    email: string;
    senha_hash: string;
    funcao: $Enums.funcaoUsuario;
    curso: string;
    periodo: $Enums.periodos;
    is_admin?: boolean;
    ativo?: boolean;
    criado_em: Date | string;
    atualizado_em: Date | string;
    solicitacoes?: Prisma.SolicitacoesCreateNestedManyWithoutAlunoInput;
    monitoria?: Prisma.MonitoriaCreateNestedManyWithoutMonitorInput;
};
export type UsuarioUncheckedCreateWithoutUser_materiaInput = {
    id?: number;
    nome: string;
    email: string;
    senha_hash: string;
    funcao: $Enums.funcaoUsuario;
    curso: string;
    periodo: $Enums.periodos;
    is_admin?: boolean;
    ativo?: boolean;
    criado_em: Date | string;
    atualizado_em: Date | string;
    solicitacoes?: Prisma.SolicitacoesUncheckedCreateNestedManyWithoutAlunoInput;
    monitoria?: Prisma.MonitoriaUncheckedCreateNestedManyWithoutMonitorInput;
};
export type UsuarioCreateOrConnectWithoutUser_materiaInput = {
    where: Prisma.UsuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutUser_materiaInput, Prisma.UsuarioUncheckedCreateWithoutUser_materiaInput>;
};
export type UsuarioUpsertWithoutUser_materiaInput = {
    update: Prisma.XOR<Prisma.UsuarioUpdateWithoutUser_materiaInput, Prisma.UsuarioUncheckedUpdateWithoutUser_materiaInput>;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutUser_materiaInput, Prisma.UsuarioUncheckedCreateWithoutUser_materiaInput>;
    where?: Prisma.UsuarioWhereInput;
};
export type UsuarioUpdateToOneWithWhereWithoutUser_materiaInput = {
    where?: Prisma.UsuarioWhereInput;
    data: Prisma.XOR<Prisma.UsuarioUpdateWithoutUser_materiaInput, Prisma.UsuarioUncheckedUpdateWithoutUser_materiaInput>;
};
export type UsuarioUpdateWithoutUser_materiaInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    senha_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    funcao?: Prisma.EnumfuncaoUsuarioFieldUpdateOperationsInput | $Enums.funcaoUsuario;
    curso?: Prisma.StringFieldUpdateOperationsInput | string;
    periodo?: Prisma.EnumperiodosFieldUpdateOperationsInput | $Enums.periodos;
    is_admin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    solicitacoes?: Prisma.SolicitacoesUpdateManyWithoutAlunoNestedInput;
    monitoria?: Prisma.MonitoriaUpdateManyWithoutMonitorNestedInput;
};
export type UsuarioUncheckedUpdateWithoutUser_materiaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    senha_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    funcao?: Prisma.EnumfuncaoUsuarioFieldUpdateOperationsInput | $Enums.funcaoUsuario;
    curso?: Prisma.StringFieldUpdateOperationsInput | string;
    periodo?: Prisma.EnumperiodosFieldUpdateOperationsInput | $Enums.periodos;
    is_admin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    solicitacoes?: Prisma.SolicitacoesUncheckedUpdateManyWithoutAlunoNestedInput;
    monitoria?: Prisma.MonitoriaUncheckedUpdateManyWithoutMonitorNestedInput;
};
export type UsuarioCountOutputType = {
    solicitacoes: number;
    monitoria: number;
    user_materia: number;
};
export type UsuarioCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    solicitacoes?: boolean | UsuarioCountOutputTypeCountSolicitacoesArgs;
    monitoria?: boolean | UsuarioCountOutputTypeCountMonitoriaArgs;
    user_materia?: boolean | UsuarioCountOutputTypeCountUser_materiaArgs;
};
export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioCountOutputTypeSelect<ExtArgs> | null;
};
export type UsuarioCountOutputTypeCountSolicitacoesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SolicitacoesWhereInput;
};
export type UsuarioCountOutputTypeCountMonitoriaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MonitoriaWhereInput;
};
export type UsuarioCountOutputTypeCountUser_materiaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Usuario_DisciplinaWhereInput;
};
export type UsuarioSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    email?: boolean;
    senha_hash?: boolean;
    funcao?: boolean;
    curso?: boolean;
    periodo?: boolean;
    is_admin?: boolean;
    ativo?: boolean;
    criado_em?: boolean;
    atualizado_em?: boolean;
    solicitacoes?: boolean | Prisma.Usuario$solicitacoesArgs<ExtArgs>;
    monitoria?: boolean | Prisma.Usuario$monitoriaArgs<ExtArgs>;
    user_materia?: boolean | Prisma.Usuario$user_materiaArgs<ExtArgs>;
    _count?: boolean | Prisma.UsuarioCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["usuario"]>;
export type UsuarioSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    email?: boolean;
    senha_hash?: boolean;
    funcao?: boolean;
    curso?: boolean;
    periodo?: boolean;
    is_admin?: boolean;
    ativo?: boolean;
    criado_em?: boolean;
    atualizado_em?: boolean;
}, ExtArgs["result"]["usuario"]>;
export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    email?: boolean;
    senha_hash?: boolean;
    funcao?: boolean;
    curso?: boolean;
    periodo?: boolean;
    is_admin?: boolean;
    ativo?: boolean;
    criado_em?: boolean;
    atualizado_em?: boolean;
}, ExtArgs["result"]["usuario"]>;
export type UsuarioSelectScalar = {
    id?: boolean;
    nome?: boolean;
    email?: boolean;
    senha_hash?: boolean;
    funcao?: boolean;
    curso?: boolean;
    periodo?: boolean;
    is_admin?: boolean;
    ativo?: boolean;
    criado_em?: boolean;
    atualizado_em?: boolean;
};
export type UsuarioOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nome" | "email" | "senha_hash" | "funcao" | "curso" | "periodo" | "is_admin" | "ativo" | "criado_em" | "atualizado_em", ExtArgs["result"]["usuario"]>;
export type UsuarioInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    solicitacoes?: boolean | Prisma.Usuario$solicitacoesArgs<ExtArgs>;
    monitoria?: boolean | Prisma.Usuario$monitoriaArgs<ExtArgs>;
    user_materia?: boolean | Prisma.Usuario$user_materiaArgs<ExtArgs>;
    _count?: boolean | Prisma.UsuarioCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UsuarioPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Usuario";
    objects: {
        solicitacoes: Prisma.$SolicitacoesPayload<ExtArgs>[];
        monitoria: Prisma.$MonitoriaPayload<ExtArgs>[];
        user_materia: Prisma.$Usuario_DisciplinaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nome: string;
        email: string;
        senha_hash: string;
        funcao: $Enums.funcaoUsuario;
        curso: string;
        periodo: $Enums.periodos;
        is_admin: boolean;
        ativo: boolean;
        criado_em: Date;
        atualizado_em: Date;
    }, ExtArgs["result"]["usuario"]>;
    composites: {};
};
export type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UsuarioPayload, S>;
export type UsuarioCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UsuarioCountAggregateInputType | true;
};
export interface UsuarioDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Usuario'];
        meta: {
            name: 'Usuario';
        };
    };
    findUnique<T extends UsuarioFindUniqueArgs>(args: Prisma.SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UsuarioFindFirstArgs>(args?: Prisma.SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UsuarioFindManyArgs>(args?: Prisma.SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UsuarioCreateArgs>(args: Prisma.SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UsuarioCreateManyArgs>(args?: Prisma.SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UsuarioDeleteArgs>(args: Prisma.SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UsuarioUpdateArgs>(args: Prisma.SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: Prisma.SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UsuarioUpdateManyArgs>(args: Prisma.SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UsuarioUpsertArgs>(args: Prisma.SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UsuarioCountArgs>(args?: Prisma.Subset<T, UsuarioCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UsuarioCountAggregateOutputType> : number>;
    aggregate<T extends UsuarioAggregateArgs>(args: Prisma.Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>;
    groupBy<T extends UsuarioGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UsuarioGroupByArgs['orderBy'];
    } : {
        orderBy?: UsuarioGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UsuarioFieldRefs;
}
export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    solicitacoes<T extends Prisma.Usuario$solicitacoesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Usuario$solicitacoesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SolicitacoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    monitoria<T extends Prisma.Usuario$monitoriaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Usuario$monitoriaArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MonitoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    user_materia<T extends Prisma.Usuario$user_materiaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Usuario$user_materiaArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Usuario_DisciplinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UsuarioFieldRefs {
    readonly id: Prisma.FieldRef<"Usuario", 'Int'>;
    readonly nome: Prisma.FieldRef<"Usuario", 'String'>;
    readonly email: Prisma.FieldRef<"Usuario", 'String'>;
    readonly senha_hash: Prisma.FieldRef<"Usuario", 'String'>;
    readonly funcao: Prisma.FieldRef<"Usuario", 'funcaoUsuario'>;
    readonly curso: Prisma.FieldRef<"Usuario", 'String'>;
    readonly periodo: Prisma.FieldRef<"Usuario", 'periodos'>;
    readonly is_admin: Prisma.FieldRef<"Usuario", 'Boolean'>;
    readonly ativo: Prisma.FieldRef<"Usuario", 'Boolean'>;
    readonly criado_em: Prisma.FieldRef<"Usuario", 'DateTime'>;
    readonly atualizado_em: Prisma.FieldRef<"Usuario", 'DateTime'>;
}
export type UsuarioFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithRelationInput | Prisma.UsuarioOrderByWithRelationInput[];
    cursor?: Prisma.UsuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsuarioScalarFieldEnum | Prisma.UsuarioScalarFieldEnum[];
};
export type UsuarioFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithRelationInput | Prisma.UsuarioOrderByWithRelationInput[];
    cursor?: Prisma.UsuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsuarioScalarFieldEnum | Prisma.UsuarioScalarFieldEnum[];
};
export type UsuarioFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithRelationInput | Prisma.UsuarioOrderByWithRelationInput[];
    cursor?: Prisma.UsuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsuarioScalarFieldEnum | Prisma.UsuarioScalarFieldEnum[];
};
export type UsuarioCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsuarioCreateInput, Prisma.UsuarioUncheckedCreateInput>;
};
export type UsuarioCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UsuarioCreateManyInput | Prisma.UsuarioCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UsuarioCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    data: Prisma.UsuarioCreateManyInput | Prisma.UsuarioCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UsuarioUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsuarioUpdateInput, Prisma.UsuarioUncheckedUpdateInput>;
    where: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UsuarioUpdateManyMutationInput, Prisma.UsuarioUncheckedUpdateManyInput>;
    where?: Prisma.UsuarioWhereInput;
    limit?: number;
};
export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsuarioUpdateManyMutationInput, Prisma.UsuarioUncheckedUpdateManyInput>;
    where?: Prisma.UsuarioWhereInput;
    limit?: number;
};
export type UsuarioUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where: Prisma.UsuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioCreateInput, Prisma.UsuarioUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UsuarioUpdateInput, Prisma.UsuarioUncheckedUpdateInput>;
};
export type UsuarioDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsuarioWhereInput;
    limit?: number;
};
export type Usuario$solicitacoesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SolicitacoesSelect<ExtArgs> | null;
    omit?: Prisma.SolicitacoesOmit<ExtArgs> | null;
    include?: Prisma.SolicitacoesInclude<ExtArgs> | null;
    where?: Prisma.SolicitacoesWhereInput;
    orderBy?: Prisma.SolicitacoesOrderByWithRelationInput | Prisma.SolicitacoesOrderByWithRelationInput[];
    cursor?: Prisma.SolicitacoesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SolicitacoesScalarFieldEnum | Prisma.SolicitacoesScalarFieldEnum[];
};
export type Usuario$monitoriaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MonitoriaSelect<ExtArgs> | null;
    omit?: Prisma.MonitoriaOmit<ExtArgs> | null;
    include?: Prisma.MonitoriaInclude<ExtArgs> | null;
    where?: Prisma.MonitoriaWhereInput;
    orderBy?: Prisma.MonitoriaOrderByWithRelationInput | Prisma.MonitoriaOrderByWithRelationInput[];
    cursor?: Prisma.MonitoriaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MonitoriaScalarFieldEnum | Prisma.MonitoriaScalarFieldEnum[];
};
export type Usuario$user_materiaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UsuarioDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
};
