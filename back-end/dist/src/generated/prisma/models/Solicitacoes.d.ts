import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SolicitacoesModel = runtime.Types.Result.DefaultSelection<Prisma.$SolicitacoesPayload>;
export type AggregateSolicitacoes = {
    _count: SolicitacoesCountAggregateOutputType | null;
    _avg: SolicitacoesAvgAggregateOutputType | null;
    _sum: SolicitacoesSumAggregateOutputType | null;
    _min: SolicitacoesMinAggregateOutputType | null;
    _max: SolicitacoesMaxAggregateOutputType | null;
};
export type SolicitacoesAvgAggregateOutputType = {
    id: number | null;
    aluno_id: number | null;
    disciplina_id: number | null;
};
export type SolicitacoesSumAggregateOutputType = {
    id: number | null;
    aluno_id: number | null;
    disciplina_id: number | null;
};
export type SolicitacoesMinAggregateOutputType = {
    id: number | null;
    aluno_id: number | null;
    disciplina_id: number | null;
    assunto: string | null;
    descricao: string | null;
    preferencia_data: Date | null;
    preferencia_horario: Date | null;
    preferencia_modal: $Enums.modalidadePref | null;
    preferencia_local: string | null;
    status: $Enums.statusSolicit | null;
    criado_em: Date | null;
    atualizado_em: Date | null;
};
export type SolicitacoesMaxAggregateOutputType = {
    id: number | null;
    aluno_id: number | null;
    disciplina_id: number | null;
    assunto: string | null;
    descricao: string | null;
    preferencia_data: Date | null;
    preferencia_horario: Date | null;
    preferencia_modal: $Enums.modalidadePref | null;
    preferencia_local: string | null;
    status: $Enums.statusSolicit | null;
    criado_em: Date | null;
    atualizado_em: Date | null;
};
export type SolicitacoesCountAggregateOutputType = {
    id: number;
    aluno_id: number;
    disciplina_id: number;
    assunto: number;
    descricao: number;
    preferencia_data: number;
    preferencia_horario: number;
    preferencia_modal: number;
    preferencia_local: number;
    status: number;
    criado_em: number;
    atualizado_em: number;
    _all: number;
};
export type SolicitacoesAvgAggregateInputType = {
    id?: true;
    aluno_id?: true;
    disciplina_id?: true;
};
export type SolicitacoesSumAggregateInputType = {
    id?: true;
    aluno_id?: true;
    disciplina_id?: true;
};
export type SolicitacoesMinAggregateInputType = {
    id?: true;
    aluno_id?: true;
    disciplina_id?: true;
    assunto?: true;
    descricao?: true;
    preferencia_data?: true;
    preferencia_horario?: true;
    preferencia_modal?: true;
    preferencia_local?: true;
    status?: true;
    criado_em?: true;
    atualizado_em?: true;
};
export type SolicitacoesMaxAggregateInputType = {
    id?: true;
    aluno_id?: true;
    disciplina_id?: true;
    assunto?: true;
    descricao?: true;
    preferencia_data?: true;
    preferencia_horario?: true;
    preferencia_modal?: true;
    preferencia_local?: true;
    status?: true;
    criado_em?: true;
    atualizado_em?: true;
};
export type SolicitacoesCountAggregateInputType = {
    id?: true;
    aluno_id?: true;
    disciplina_id?: true;
    assunto?: true;
    descricao?: true;
    preferencia_data?: true;
    preferencia_horario?: true;
    preferencia_modal?: true;
    preferencia_local?: true;
    status?: true;
    criado_em?: true;
    atualizado_em?: true;
    _all?: true;
};
export type SolicitacoesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SolicitacoesWhereInput;
    orderBy?: Prisma.SolicitacoesOrderByWithRelationInput | Prisma.SolicitacoesOrderByWithRelationInput[];
    cursor?: Prisma.SolicitacoesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SolicitacoesCountAggregateInputType;
    _avg?: SolicitacoesAvgAggregateInputType;
    _sum?: SolicitacoesSumAggregateInputType;
    _min?: SolicitacoesMinAggregateInputType;
    _max?: SolicitacoesMaxAggregateInputType;
};
export type GetSolicitacoesAggregateType<T extends SolicitacoesAggregateArgs> = {
    [P in keyof T & keyof AggregateSolicitacoes]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSolicitacoes[P]> : Prisma.GetScalarType<T[P], AggregateSolicitacoes[P]>;
};
export type SolicitacoesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SolicitacoesWhereInput;
    orderBy?: Prisma.SolicitacoesOrderByWithAggregationInput | Prisma.SolicitacoesOrderByWithAggregationInput[];
    by: Prisma.SolicitacoesScalarFieldEnum[] | Prisma.SolicitacoesScalarFieldEnum;
    having?: Prisma.SolicitacoesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SolicitacoesCountAggregateInputType | true;
    _avg?: SolicitacoesAvgAggregateInputType;
    _sum?: SolicitacoesSumAggregateInputType;
    _min?: SolicitacoesMinAggregateInputType;
    _max?: SolicitacoesMaxAggregateInputType;
};
export type SolicitacoesGroupByOutputType = {
    id: number;
    aluno_id: number;
    disciplina_id: number;
    assunto: string;
    descricao: string | null;
    preferencia_data: Date;
    preferencia_horario: Date;
    preferencia_modal: $Enums.modalidadePref;
    preferencia_local: string | null;
    status: $Enums.statusSolicit;
    criado_em: Date;
    atualizado_em: Date;
    _count: SolicitacoesCountAggregateOutputType | null;
    _avg: SolicitacoesAvgAggregateOutputType | null;
    _sum: SolicitacoesSumAggregateOutputType | null;
    _min: SolicitacoesMinAggregateOutputType | null;
    _max: SolicitacoesMaxAggregateOutputType | null;
};
export type GetSolicitacoesGroupByPayload<T extends SolicitacoesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SolicitacoesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SolicitacoesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SolicitacoesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SolicitacoesGroupByOutputType[P]>;
}>>;
export type SolicitacoesWhereInput = {
    AND?: Prisma.SolicitacoesWhereInput | Prisma.SolicitacoesWhereInput[];
    OR?: Prisma.SolicitacoesWhereInput[];
    NOT?: Prisma.SolicitacoesWhereInput | Prisma.SolicitacoesWhereInput[];
    id?: Prisma.IntFilter<"Solicitacoes"> | number;
    aluno_id?: Prisma.IntFilter<"Solicitacoes"> | number;
    disciplina_id?: Prisma.IntFilter<"Solicitacoes"> | number;
    assunto?: Prisma.StringFilter<"Solicitacoes"> | string;
    descricao?: Prisma.StringNullableFilter<"Solicitacoes"> | string | null;
    preferencia_data?: Prisma.DateTimeFilter<"Solicitacoes"> | Date | string;
    preferencia_horario?: Prisma.DateTimeFilter<"Solicitacoes"> | Date | string;
    preferencia_modal?: Prisma.EnummodalidadePrefFilter<"Solicitacoes"> | $Enums.modalidadePref;
    preferencia_local?: Prisma.StringNullableFilter<"Solicitacoes"> | string | null;
    status?: Prisma.EnumstatusSolicitFilter<"Solicitacoes"> | $Enums.statusSolicit;
    criado_em?: Prisma.DateTimeFilter<"Solicitacoes"> | Date | string;
    atualizado_em?: Prisma.DateTimeFilter<"Solicitacoes"> | Date | string;
    aluno?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    disciplina?: Prisma.XOR<Prisma.DisciplinasScalarRelationFilter, Prisma.DisciplinasWhereInput>;
    monitoria?: Prisma.MonitoriaListRelationFilter;
};
export type SolicitacoesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    aluno_id?: Prisma.SortOrder;
    disciplina_id?: Prisma.SortOrder;
    assunto?: Prisma.SortOrder;
    descricao?: Prisma.SortOrderInput | Prisma.SortOrder;
    preferencia_data?: Prisma.SortOrder;
    preferencia_horario?: Prisma.SortOrder;
    preferencia_modal?: Prisma.SortOrder;
    preferencia_local?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    criado_em?: Prisma.SortOrder;
    atualizado_em?: Prisma.SortOrder;
    aluno?: Prisma.UsuarioOrderByWithRelationInput;
    disciplina?: Prisma.DisciplinasOrderByWithRelationInput;
    monitoria?: Prisma.MonitoriaOrderByRelationAggregateInput;
};
export type SolicitacoesWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.SolicitacoesWhereInput | Prisma.SolicitacoesWhereInput[];
    OR?: Prisma.SolicitacoesWhereInput[];
    NOT?: Prisma.SolicitacoesWhereInput | Prisma.SolicitacoesWhereInput[];
    aluno_id?: Prisma.IntFilter<"Solicitacoes"> | number;
    disciplina_id?: Prisma.IntFilter<"Solicitacoes"> | number;
    assunto?: Prisma.StringFilter<"Solicitacoes"> | string;
    descricao?: Prisma.StringNullableFilter<"Solicitacoes"> | string | null;
    preferencia_data?: Prisma.DateTimeFilter<"Solicitacoes"> | Date | string;
    preferencia_horario?: Prisma.DateTimeFilter<"Solicitacoes"> | Date | string;
    preferencia_modal?: Prisma.EnummodalidadePrefFilter<"Solicitacoes"> | $Enums.modalidadePref;
    preferencia_local?: Prisma.StringNullableFilter<"Solicitacoes"> | string | null;
    status?: Prisma.EnumstatusSolicitFilter<"Solicitacoes"> | $Enums.statusSolicit;
    criado_em?: Prisma.DateTimeFilter<"Solicitacoes"> | Date | string;
    atualizado_em?: Prisma.DateTimeFilter<"Solicitacoes"> | Date | string;
    aluno?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    disciplina?: Prisma.XOR<Prisma.DisciplinasScalarRelationFilter, Prisma.DisciplinasWhereInput>;
    monitoria?: Prisma.MonitoriaListRelationFilter;
}, "id">;
export type SolicitacoesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    aluno_id?: Prisma.SortOrder;
    disciplina_id?: Prisma.SortOrder;
    assunto?: Prisma.SortOrder;
    descricao?: Prisma.SortOrderInput | Prisma.SortOrder;
    preferencia_data?: Prisma.SortOrder;
    preferencia_horario?: Prisma.SortOrder;
    preferencia_modal?: Prisma.SortOrder;
    preferencia_local?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    criado_em?: Prisma.SortOrder;
    atualizado_em?: Prisma.SortOrder;
    _count?: Prisma.SolicitacoesCountOrderByAggregateInput;
    _avg?: Prisma.SolicitacoesAvgOrderByAggregateInput;
    _max?: Prisma.SolicitacoesMaxOrderByAggregateInput;
    _min?: Prisma.SolicitacoesMinOrderByAggregateInput;
    _sum?: Prisma.SolicitacoesSumOrderByAggregateInput;
};
export type SolicitacoesScalarWhereWithAggregatesInput = {
    AND?: Prisma.SolicitacoesScalarWhereWithAggregatesInput | Prisma.SolicitacoesScalarWhereWithAggregatesInput[];
    OR?: Prisma.SolicitacoesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SolicitacoesScalarWhereWithAggregatesInput | Prisma.SolicitacoesScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Solicitacoes"> | number;
    aluno_id?: Prisma.IntWithAggregatesFilter<"Solicitacoes"> | number;
    disciplina_id?: Prisma.IntWithAggregatesFilter<"Solicitacoes"> | number;
    assunto?: Prisma.StringWithAggregatesFilter<"Solicitacoes"> | string;
    descricao?: Prisma.StringNullableWithAggregatesFilter<"Solicitacoes"> | string | null;
    preferencia_data?: Prisma.DateTimeWithAggregatesFilter<"Solicitacoes"> | Date | string;
    preferencia_horario?: Prisma.DateTimeWithAggregatesFilter<"Solicitacoes"> | Date | string;
    preferencia_modal?: Prisma.EnummodalidadePrefWithAggregatesFilter<"Solicitacoes"> | $Enums.modalidadePref;
    preferencia_local?: Prisma.StringNullableWithAggregatesFilter<"Solicitacoes"> | string | null;
    status?: Prisma.EnumstatusSolicitWithAggregatesFilter<"Solicitacoes"> | $Enums.statusSolicit;
    criado_em?: Prisma.DateTimeWithAggregatesFilter<"Solicitacoes"> | Date | string;
    atualizado_em?: Prisma.DateTimeWithAggregatesFilter<"Solicitacoes"> | Date | string;
};
export type SolicitacoesCreateInput = {
    assunto: string;
    descricao?: string | null;
    preferencia_data: Date | string;
    preferencia_horario: Date | string;
    preferencia_modal: $Enums.modalidadePref;
    preferencia_local?: string | null;
    status?: $Enums.statusSolicit;
    criado_em: Date | string;
    atualizado_em: Date | string;
    aluno: Prisma.UsuarioCreateNestedOneWithoutSolicitacoesInput;
    disciplina: Prisma.DisciplinasCreateNestedOneWithoutSolicitacoesInput;
    monitoria?: Prisma.MonitoriaCreateNestedManyWithoutSolicitacaoInput;
};
export type SolicitacoesUncheckedCreateInput = {
    id?: number;
    aluno_id: number;
    disciplina_id: number;
    assunto: string;
    descricao?: string | null;
    preferencia_data: Date | string;
    preferencia_horario: Date | string;
    preferencia_modal: $Enums.modalidadePref;
    preferencia_local?: string | null;
    status?: $Enums.statusSolicit;
    criado_em: Date | string;
    atualizado_em: Date | string;
    monitoria?: Prisma.MonitoriaUncheckedCreateNestedManyWithoutSolicitacaoInput;
};
export type SolicitacoesUpdateInput = {
    assunto?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferencia_data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preferencia_horario?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preferencia_modal?: Prisma.EnummodalidadePrefFieldUpdateOperationsInput | $Enums.modalidadePref;
    preferencia_local?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumstatusSolicitFieldUpdateOperationsInput | $Enums.statusSolicit;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    aluno?: Prisma.UsuarioUpdateOneRequiredWithoutSolicitacoesNestedInput;
    disciplina?: Prisma.DisciplinasUpdateOneRequiredWithoutSolicitacoesNestedInput;
    monitoria?: Prisma.MonitoriaUpdateManyWithoutSolicitacaoNestedInput;
};
export type SolicitacoesUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    aluno_id?: Prisma.IntFieldUpdateOperationsInput | number;
    disciplina_id?: Prisma.IntFieldUpdateOperationsInput | number;
    assunto?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferencia_data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preferencia_horario?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preferencia_modal?: Prisma.EnummodalidadePrefFieldUpdateOperationsInput | $Enums.modalidadePref;
    preferencia_local?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumstatusSolicitFieldUpdateOperationsInput | $Enums.statusSolicit;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    monitoria?: Prisma.MonitoriaUncheckedUpdateManyWithoutSolicitacaoNestedInput;
};
export type SolicitacoesCreateManyInput = {
    id?: number;
    aluno_id: number;
    disciplina_id: number;
    assunto: string;
    descricao?: string | null;
    preferencia_data: Date | string;
    preferencia_horario: Date | string;
    preferencia_modal: $Enums.modalidadePref;
    preferencia_local?: string | null;
    status?: $Enums.statusSolicit;
    criado_em: Date | string;
    atualizado_em: Date | string;
};
export type SolicitacoesUpdateManyMutationInput = {
    assunto?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferencia_data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preferencia_horario?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preferencia_modal?: Prisma.EnummodalidadePrefFieldUpdateOperationsInput | $Enums.modalidadePref;
    preferencia_local?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumstatusSolicitFieldUpdateOperationsInput | $Enums.statusSolicit;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SolicitacoesUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    aluno_id?: Prisma.IntFieldUpdateOperationsInput | number;
    disciplina_id?: Prisma.IntFieldUpdateOperationsInput | number;
    assunto?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferencia_data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preferencia_horario?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preferencia_modal?: Prisma.EnummodalidadePrefFieldUpdateOperationsInput | $Enums.modalidadePref;
    preferencia_local?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumstatusSolicitFieldUpdateOperationsInput | $Enums.statusSolicit;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SolicitacoesListRelationFilter = {
    every?: Prisma.SolicitacoesWhereInput;
    some?: Prisma.SolicitacoesWhereInput;
    none?: Prisma.SolicitacoesWhereInput;
};
export type SolicitacoesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SolicitacoesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    aluno_id?: Prisma.SortOrder;
    disciplina_id?: Prisma.SortOrder;
    assunto?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    preferencia_data?: Prisma.SortOrder;
    preferencia_horario?: Prisma.SortOrder;
    preferencia_modal?: Prisma.SortOrder;
    preferencia_local?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    criado_em?: Prisma.SortOrder;
    atualizado_em?: Prisma.SortOrder;
};
export type SolicitacoesAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    aluno_id?: Prisma.SortOrder;
    disciplina_id?: Prisma.SortOrder;
};
export type SolicitacoesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    aluno_id?: Prisma.SortOrder;
    disciplina_id?: Prisma.SortOrder;
    assunto?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    preferencia_data?: Prisma.SortOrder;
    preferencia_horario?: Prisma.SortOrder;
    preferencia_modal?: Prisma.SortOrder;
    preferencia_local?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    criado_em?: Prisma.SortOrder;
    atualizado_em?: Prisma.SortOrder;
};
export type SolicitacoesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    aluno_id?: Prisma.SortOrder;
    disciplina_id?: Prisma.SortOrder;
    assunto?: Prisma.SortOrder;
    descricao?: Prisma.SortOrder;
    preferencia_data?: Prisma.SortOrder;
    preferencia_horario?: Prisma.SortOrder;
    preferencia_modal?: Prisma.SortOrder;
    preferencia_local?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    criado_em?: Prisma.SortOrder;
    atualizado_em?: Prisma.SortOrder;
};
export type SolicitacoesSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    aluno_id?: Prisma.SortOrder;
    disciplina_id?: Prisma.SortOrder;
};
export type SolicitacoesScalarRelationFilter = {
    is?: Prisma.SolicitacoesWhereInput;
    isNot?: Prisma.SolicitacoesWhereInput;
};
export type SolicitacoesCreateNestedManyWithoutAlunoInput = {
    create?: Prisma.XOR<Prisma.SolicitacoesCreateWithoutAlunoInput, Prisma.SolicitacoesUncheckedCreateWithoutAlunoInput> | Prisma.SolicitacoesCreateWithoutAlunoInput[] | Prisma.SolicitacoesUncheckedCreateWithoutAlunoInput[];
    connectOrCreate?: Prisma.SolicitacoesCreateOrConnectWithoutAlunoInput | Prisma.SolicitacoesCreateOrConnectWithoutAlunoInput[];
    createMany?: Prisma.SolicitacoesCreateManyAlunoInputEnvelope;
    connect?: Prisma.SolicitacoesWhereUniqueInput | Prisma.SolicitacoesWhereUniqueInput[];
};
export type SolicitacoesUncheckedCreateNestedManyWithoutAlunoInput = {
    create?: Prisma.XOR<Prisma.SolicitacoesCreateWithoutAlunoInput, Prisma.SolicitacoesUncheckedCreateWithoutAlunoInput> | Prisma.SolicitacoesCreateWithoutAlunoInput[] | Prisma.SolicitacoesUncheckedCreateWithoutAlunoInput[];
    connectOrCreate?: Prisma.SolicitacoesCreateOrConnectWithoutAlunoInput | Prisma.SolicitacoesCreateOrConnectWithoutAlunoInput[];
    createMany?: Prisma.SolicitacoesCreateManyAlunoInputEnvelope;
    connect?: Prisma.SolicitacoesWhereUniqueInput | Prisma.SolicitacoesWhereUniqueInput[];
};
export type SolicitacoesUpdateManyWithoutAlunoNestedInput = {
    create?: Prisma.XOR<Prisma.SolicitacoesCreateWithoutAlunoInput, Prisma.SolicitacoesUncheckedCreateWithoutAlunoInput> | Prisma.SolicitacoesCreateWithoutAlunoInput[] | Prisma.SolicitacoesUncheckedCreateWithoutAlunoInput[];
    connectOrCreate?: Prisma.SolicitacoesCreateOrConnectWithoutAlunoInput | Prisma.SolicitacoesCreateOrConnectWithoutAlunoInput[];
    upsert?: Prisma.SolicitacoesUpsertWithWhereUniqueWithoutAlunoInput | Prisma.SolicitacoesUpsertWithWhereUniqueWithoutAlunoInput[];
    createMany?: Prisma.SolicitacoesCreateManyAlunoInputEnvelope;
    set?: Prisma.SolicitacoesWhereUniqueInput | Prisma.SolicitacoesWhereUniqueInput[];
    disconnect?: Prisma.SolicitacoesWhereUniqueInput | Prisma.SolicitacoesWhereUniqueInput[];
    delete?: Prisma.SolicitacoesWhereUniqueInput | Prisma.SolicitacoesWhereUniqueInput[];
    connect?: Prisma.SolicitacoesWhereUniqueInput | Prisma.SolicitacoesWhereUniqueInput[];
    update?: Prisma.SolicitacoesUpdateWithWhereUniqueWithoutAlunoInput | Prisma.SolicitacoesUpdateWithWhereUniqueWithoutAlunoInput[];
    updateMany?: Prisma.SolicitacoesUpdateManyWithWhereWithoutAlunoInput | Prisma.SolicitacoesUpdateManyWithWhereWithoutAlunoInput[];
    deleteMany?: Prisma.SolicitacoesScalarWhereInput | Prisma.SolicitacoesScalarWhereInput[];
};
export type SolicitacoesUncheckedUpdateManyWithoutAlunoNestedInput = {
    create?: Prisma.XOR<Prisma.SolicitacoesCreateWithoutAlunoInput, Prisma.SolicitacoesUncheckedCreateWithoutAlunoInput> | Prisma.SolicitacoesCreateWithoutAlunoInput[] | Prisma.SolicitacoesUncheckedCreateWithoutAlunoInput[];
    connectOrCreate?: Prisma.SolicitacoesCreateOrConnectWithoutAlunoInput | Prisma.SolicitacoesCreateOrConnectWithoutAlunoInput[];
    upsert?: Prisma.SolicitacoesUpsertWithWhereUniqueWithoutAlunoInput | Prisma.SolicitacoesUpsertWithWhereUniqueWithoutAlunoInput[];
    createMany?: Prisma.SolicitacoesCreateManyAlunoInputEnvelope;
    set?: Prisma.SolicitacoesWhereUniqueInput | Prisma.SolicitacoesWhereUniqueInput[];
    disconnect?: Prisma.SolicitacoesWhereUniqueInput | Prisma.SolicitacoesWhereUniqueInput[];
    delete?: Prisma.SolicitacoesWhereUniqueInput | Prisma.SolicitacoesWhereUniqueInput[];
    connect?: Prisma.SolicitacoesWhereUniqueInput | Prisma.SolicitacoesWhereUniqueInput[];
    update?: Prisma.SolicitacoesUpdateWithWhereUniqueWithoutAlunoInput | Prisma.SolicitacoesUpdateWithWhereUniqueWithoutAlunoInput[];
    updateMany?: Prisma.SolicitacoesUpdateManyWithWhereWithoutAlunoInput | Prisma.SolicitacoesUpdateManyWithWhereWithoutAlunoInput[];
    deleteMany?: Prisma.SolicitacoesScalarWhereInput | Prisma.SolicitacoesScalarWhereInput[];
};
export type SolicitacoesCreateNestedManyWithoutDisciplinaInput = {
    create?: Prisma.XOR<Prisma.SolicitacoesCreateWithoutDisciplinaInput, Prisma.SolicitacoesUncheckedCreateWithoutDisciplinaInput> | Prisma.SolicitacoesCreateWithoutDisciplinaInput[] | Prisma.SolicitacoesUncheckedCreateWithoutDisciplinaInput[];
    connectOrCreate?: Prisma.SolicitacoesCreateOrConnectWithoutDisciplinaInput | Prisma.SolicitacoesCreateOrConnectWithoutDisciplinaInput[];
    createMany?: Prisma.SolicitacoesCreateManyDisciplinaInputEnvelope;
    connect?: Prisma.SolicitacoesWhereUniqueInput | Prisma.SolicitacoesWhereUniqueInput[];
};
export type SolicitacoesUncheckedCreateNestedManyWithoutDisciplinaInput = {
    create?: Prisma.XOR<Prisma.SolicitacoesCreateWithoutDisciplinaInput, Prisma.SolicitacoesUncheckedCreateWithoutDisciplinaInput> | Prisma.SolicitacoesCreateWithoutDisciplinaInput[] | Prisma.SolicitacoesUncheckedCreateWithoutDisciplinaInput[];
    connectOrCreate?: Prisma.SolicitacoesCreateOrConnectWithoutDisciplinaInput | Prisma.SolicitacoesCreateOrConnectWithoutDisciplinaInput[];
    createMany?: Prisma.SolicitacoesCreateManyDisciplinaInputEnvelope;
    connect?: Prisma.SolicitacoesWhereUniqueInput | Prisma.SolicitacoesWhereUniqueInput[];
};
export type SolicitacoesUpdateManyWithoutDisciplinaNestedInput = {
    create?: Prisma.XOR<Prisma.SolicitacoesCreateWithoutDisciplinaInput, Prisma.SolicitacoesUncheckedCreateWithoutDisciplinaInput> | Prisma.SolicitacoesCreateWithoutDisciplinaInput[] | Prisma.SolicitacoesUncheckedCreateWithoutDisciplinaInput[];
    connectOrCreate?: Prisma.SolicitacoesCreateOrConnectWithoutDisciplinaInput | Prisma.SolicitacoesCreateOrConnectWithoutDisciplinaInput[];
    upsert?: Prisma.SolicitacoesUpsertWithWhereUniqueWithoutDisciplinaInput | Prisma.SolicitacoesUpsertWithWhereUniqueWithoutDisciplinaInput[];
    createMany?: Prisma.SolicitacoesCreateManyDisciplinaInputEnvelope;
    set?: Prisma.SolicitacoesWhereUniqueInput | Prisma.SolicitacoesWhereUniqueInput[];
    disconnect?: Prisma.SolicitacoesWhereUniqueInput | Prisma.SolicitacoesWhereUniqueInput[];
    delete?: Prisma.SolicitacoesWhereUniqueInput | Prisma.SolicitacoesWhereUniqueInput[];
    connect?: Prisma.SolicitacoesWhereUniqueInput | Prisma.SolicitacoesWhereUniqueInput[];
    update?: Prisma.SolicitacoesUpdateWithWhereUniqueWithoutDisciplinaInput | Prisma.SolicitacoesUpdateWithWhereUniqueWithoutDisciplinaInput[];
    updateMany?: Prisma.SolicitacoesUpdateManyWithWhereWithoutDisciplinaInput | Prisma.SolicitacoesUpdateManyWithWhereWithoutDisciplinaInput[];
    deleteMany?: Prisma.SolicitacoesScalarWhereInput | Prisma.SolicitacoesScalarWhereInput[];
};
export type SolicitacoesUncheckedUpdateManyWithoutDisciplinaNestedInput = {
    create?: Prisma.XOR<Prisma.SolicitacoesCreateWithoutDisciplinaInput, Prisma.SolicitacoesUncheckedCreateWithoutDisciplinaInput> | Prisma.SolicitacoesCreateWithoutDisciplinaInput[] | Prisma.SolicitacoesUncheckedCreateWithoutDisciplinaInput[];
    connectOrCreate?: Prisma.SolicitacoesCreateOrConnectWithoutDisciplinaInput | Prisma.SolicitacoesCreateOrConnectWithoutDisciplinaInput[];
    upsert?: Prisma.SolicitacoesUpsertWithWhereUniqueWithoutDisciplinaInput | Prisma.SolicitacoesUpsertWithWhereUniqueWithoutDisciplinaInput[];
    createMany?: Prisma.SolicitacoesCreateManyDisciplinaInputEnvelope;
    set?: Prisma.SolicitacoesWhereUniqueInput | Prisma.SolicitacoesWhereUniqueInput[];
    disconnect?: Prisma.SolicitacoesWhereUniqueInput | Prisma.SolicitacoesWhereUniqueInput[];
    delete?: Prisma.SolicitacoesWhereUniqueInput | Prisma.SolicitacoesWhereUniqueInput[];
    connect?: Prisma.SolicitacoesWhereUniqueInput | Prisma.SolicitacoesWhereUniqueInput[];
    update?: Prisma.SolicitacoesUpdateWithWhereUniqueWithoutDisciplinaInput | Prisma.SolicitacoesUpdateWithWhereUniqueWithoutDisciplinaInput[];
    updateMany?: Prisma.SolicitacoesUpdateManyWithWhereWithoutDisciplinaInput | Prisma.SolicitacoesUpdateManyWithWhereWithoutDisciplinaInput[];
    deleteMany?: Prisma.SolicitacoesScalarWhereInput | Prisma.SolicitacoesScalarWhereInput[];
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type EnummodalidadePrefFieldUpdateOperationsInput = {
    set?: $Enums.modalidadePref;
};
export type EnumstatusSolicitFieldUpdateOperationsInput = {
    set?: $Enums.statusSolicit;
};
export type SolicitacoesCreateNestedOneWithoutMonitoriaInput = {
    create?: Prisma.XOR<Prisma.SolicitacoesCreateWithoutMonitoriaInput, Prisma.SolicitacoesUncheckedCreateWithoutMonitoriaInput>;
    connectOrCreate?: Prisma.SolicitacoesCreateOrConnectWithoutMonitoriaInput;
    connect?: Prisma.SolicitacoesWhereUniqueInput;
};
export type SolicitacoesUpdateOneRequiredWithoutMonitoriaNestedInput = {
    create?: Prisma.XOR<Prisma.SolicitacoesCreateWithoutMonitoriaInput, Prisma.SolicitacoesUncheckedCreateWithoutMonitoriaInput>;
    connectOrCreate?: Prisma.SolicitacoesCreateOrConnectWithoutMonitoriaInput;
    upsert?: Prisma.SolicitacoesUpsertWithoutMonitoriaInput;
    connect?: Prisma.SolicitacoesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SolicitacoesUpdateToOneWithWhereWithoutMonitoriaInput, Prisma.SolicitacoesUpdateWithoutMonitoriaInput>, Prisma.SolicitacoesUncheckedUpdateWithoutMonitoriaInput>;
};
export type SolicitacoesCreateWithoutAlunoInput = {
    assunto: string;
    descricao?: string | null;
    preferencia_data: Date | string;
    preferencia_horario: Date | string;
    preferencia_modal: $Enums.modalidadePref;
    preferencia_local?: string | null;
    status?: $Enums.statusSolicit;
    criado_em: Date | string;
    atualizado_em: Date | string;
    disciplina: Prisma.DisciplinasCreateNestedOneWithoutSolicitacoesInput;
    monitoria?: Prisma.MonitoriaCreateNestedManyWithoutSolicitacaoInput;
};
export type SolicitacoesUncheckedCreateWithoutAlunoInput = {
    id?: number;
    disciplina_id: number;
    assunto: string;
    descricao?: string | null;
    preferencia_data: Date | string;
    preferencia_horario: Date | string;
    preferencia_modal: $Enums.modalidadePref;
    preferencia_local?: string | null;
    status?: $Enums.statusSolicit;
    criado_em: Date | string;
    atualizado_em: Date | string;
    monitoria?: Prisma.MonitoriaUncheckedCreateNestedManyWithoutSolicitacaoInput;
};
export type SolicitacoesCreateOrConnectWithoutAlunoInput = {
    where: Prisma.SolicitacoesWhereUniqueInput;
    create: Prisma.XOR<Prisma.SolicitacoesCreateWithoutAlunoInput, Prisma.SolicitacoesUncheckedCreateWithoutAlunoInput>;
};
export type SolicitacoesCreateManyAlunoInputEnvelope = {
    data: Prisma.SolicitacoesCreateManyAlunoInput | Prisma.SolicitacoesCreateManyAlunoInput[];
    skipDuplicates?: boolean;
};
export type SolicitacoesUpsertWithWhereUniqueWithoutAlunoInput = {
    where: Prisma.SolicitacoesWhereUniqueInput;
    update: Prisma.XOR<Prisma.SolicitacoesUpdateWithoutAlunoInput, Prisma.SolicitacoesUncheckedUpdateWithoutAlunoInput>;
    create: Prisma.XOR<Prisma.SolicitacoesCreateWithoutAlunoInput, Prisma.SolicitacoesUncheckedCreateWithoutAlunoInput>;
};
export type SolicitacoesUpdateWithWhereUniqueWithoutAlunoInput = {
    where: Prisma.SolicitacoesWhereUniqueInput;
    data: Prisma.XOR<Prisma.SolicitacoesUpdateWithoutAlunoInput, Prisma.SolicitacoesUncheckedUpdateWithoutAlunoInput>;
};
export type SolicitacoesUpdateManyWithWhereWithoutAlunoInput = {
    where: Prisma.SolicitacoesScalarWhereInput;
    data: Prisma.XOR<Prisma.SolicitacoesUpdateManyMutationInput, Prisma.SolicitacoesUncheckedUpdateManyWithoutAlunoInput>;
};
export type SolicitacoesScalarWhereInput = {
    AND?: Prisma.SolicitacoesScalarWhereInput | Prisma.SolicitacoesScalarWhereInput[];
    OR?: Prisma.SolicitacoesScalarWhereInput[];
    NOT?: Prisma.SolicitacoesScalarWhereInput | Prisma.SolicitacoesScalarWhereInput[];
    id?: Prisma.IntFilter<"Solicitacoes"> | number;
    aluno_id?: Prisma.IntFilter<"Solicitacoes"> | number;
    disciplina_id?: Prisma.IntFilter<"Solicitacoes"> | number;
    assunto?: Prisma.StringFilter<"Solicitacoes"> | string;
    descricao?: Prisma.StringNullableFilter<"Solicitacoes"> | string | null;
    preferencia_data?: Prisma.DateTimeFilter<"Solicitacoes"> | Date | string;
    preferencia_horario?: Prisma.DateTimeFilter<"Solicitacoes"> | Date | string;
    preferencia_modal?: Prisma.EnummodalidadePrefFilter<"Solicitacoes"> | $Enums.modalidadePref;
    preferencia_local?: Prisma.StringNullableFilter<"Solicitacoes"> | string | null;
    status?: Prisma.EnumstatusSolicitFilter<"Solicitacoes"> | $Enums.statusSolicit;
    criado_em?: Prisma.DateTimeFilter<"Solicitacoes"> | Date | string;
    atualizado_em?: Prisma.DateTimeFilter<"Solicitacoes"> | Date | string;
};
export type SolicitacoesCreateWithoutDisciplinaInput = {
    assunto: string;
    descricao?: string | null;
    preferencia_data: Date | string;
    preferencia_horario: Date | string;
    preferencia_modal: $Enums.modalidadePref;
    preferencia_local?: string | null;
    status?: $Enums.statusSolicit;
    criado_em: Date | string;
    atualizado_em: Date | string;
    aluno: Prisma.UsuarioCreateNestedOneWithoutSolicitacoesInput;
    monitoria?: Prisma.MonitoriaCreateNestedManyWithoutSolicitacaoInput;
};
export type SolicitacoesUncheckedCreateWithoutDisciplinaInput = {
    id?: number;
    aluno_id: number;
    assunto: string;
    descricao?: string | null;
    preferencia_data: Date | string;
    preferencia_horario: Date | string;
    preferencia_modal: $Enums.modalidadePref;
    preferencia_local?: string | null;
    status?: $Enums.statusSolicit;
    criado_em: Date | string;
    atualizado_em: Date | string;
    monitoria?: Prisma.MonitoriaUncheckedCreateNestedManyWithoutSolicitacaoInput;
};
export type SolicitacoesCreateOrConnectWithoutDisciplinaInput = {
    where: Prisma.SolicitacoesWhereUniqueInput;
    create: Prisma.XOR<Prisma.SolicitacoesCreateWithoutDisciplinaInput, Prisma.SolicitacoesUncheckedCreateWithoutDisciplinaInput>;
};
export type SolicitacoesCreateManyDisciplinaInputEnvelope = {
    data: Prisma.SolicitacoesCreateManyDisciplinaInput | Prisma.SolicitacoesCreateManyDisciplinaInput[];
    skipDuplicates?: boolean;
};
export type SolicitacoesUpsertWithWhereUniqueWithoutDisciplinaInput = {
    where: Prisma.SolicitacoesWhereUniqueInput;
    update: Prisma.XOR<Prisma.SolicitacoesUpdateWithoutDisciplinaInput, Prisma.SolicitacoesUncheckedUpdateWithoutDisciplinaInput>;
    create: Prisma.XOR<Prisma.SolicitacoesCreateWithoutDisciplinaInput, Prisma.SolicitacoesUncheckedCreateWithoutDisciplinaInput>;
};
export type SolicitacoesUpdateWithWhereUniqueWithoutDisciplinaInput = {
    where: Prisma.SolicitacoesWhereUniqueInput;
    data: Prisma.XOR<Prisma.SolicitacoesUpdateWithoutDisciplinaInput, Prisma.SolicitacoesUncheckedUpdateWithoutDisciplinaInput>;
};
export type SolicitacoesUpdateManyWithWhereWithoutDisciplinaInput = {
    where: Prisma.SolicitacoesScalarWhereInput;
    data: Prisma.XOR<Prisma.SolicitacoesUpdateManyMutationInput, Prisma.SolicitacoesUncheckedUpdateManyWithoutDisciplinaInput>;
};
export type SolicitacoesCreateWithoutMonitoriaInput = {
    assunto: string;
    descricao?: string | null;
    preferencia_data: Date | string;
    preferencia_horario: Date | string;
    preferencia_modal: $Enums.modalidadePref;
    preferencia_local?: string | null;
    status?: $Enums.statusSolicit;
    criado_em: Date | string;
    atualizado_em: Date | string;
    aluno: Prisma.UsuarioCreateNestedOneWithoutSolicitacoesInput;
    disciplina: Prisma.DisciplinasCreateNestedOneWithoutSolicitacoesInput;
};
export type SolicitacoesUncheckedCreateWithoutMonitoriaInput = {
    id?: number;
    aluno_id: number;
    disciplina_id: number;
    assunto: string;
    descricao?: string | null;
    preferencia_data: Date | string;
    preferencia_horario: Date | string;
    preferencia_modal: $Enums.modalidadePref;
    preferencia_local?: string | null;
    status?: $Enums.statusSolicit;
    criado_em: Date | string;
    atualizado_em: Date | string;
};
export type SolicitacoesCreateOrConnectWithoutMonitoriaInput = {
    where: Prisma.SolicitacoesWhereUniqueInput;
    create: Prisma.XOR<Prisma.SolicitacoesCreateWithoutMonitoriaInput, Prisma.SolicitacoesUncheckedCreateWithoutMonitoriaInput>;
};
export type SolicitacoesUpsertWithoutMonitoriaInput = {
    update: Prisma.XOR<Prisma.SolicitacoesUpdateWithoutMonitoriaInput, Prisma.SolicitacoesUncheckedUpdateWithoutMonitoriaInput>;
    create: Prisma.XOR<Prisma.SolicitacoesCreateWithoutMonitoriaInput, Prisma.SolicitacoesUncheckedCreateWithoutMonitoriaInput>;
    where?: Prisma.SolicitacoesWhereInput;
};
export type SolicitacoesUpdateToOneWithWhereWithoutMonitoriaInput = {
    where?: Prisma.SolicitacoesWhereInput;
    data: Prisma.XOR<Prisma.SolicitacoesUpdateWithoutMonitoriaInput, Prisma.SolicitacoesUncheckedUpdateWithoutMonitoriaInput>;
};
export type SolicitacoesUpdateWithoutMonitoriaInput = {
    assunto?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferencia_data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preferencia_horario?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preferencia_modal?: Prisma.EnummodalidadePrefFieldUpdateOperationsInput | $Enums.modalidadePref;
    preferencia_local?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumstatusSolicitFieldUpdateOperationsInput | $Enums.statusSolicit;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    aluno?: Prisma.UsuarioUpdateOneRequiredWithoutSolicitacoesNestedInput;
    disciplina?: Prisma.DisciplinasUpdateOneRequiredWithoutSolicitacoesNestedInput;
};
export type SolicitacoesUncheckedUpdateWithoutMonitoriaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    aluno_id?: Prisma.IntFieldUpdateOperationsInput | number;
    disciplina_id?: Prisma.IntFieldUpdateOperationsInput | number;
    assunto?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferencia_data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preferencia_horario?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preferencia_modal?: Prisma.EnummodalidadePrefFieldUpdateOperationsInput | $Enums.modalidadePref;
    preferencia_local?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumstatusSolicitFieldUpdateOperationsInput | $Enums.statusSolicit;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SolicitacoesCreateManyAlunoInput = {
    id?: number;
    disciplina_id: number;
    assunto: string;
    descricao?: string | null;
    preferencia_data: Date | string;
    preferencia_horario: Date | string;
    preferencia_modal: $Enums.modalidadePref;
    preferencia_local?: string | null;
    status?: $Enums.statusSolicit;
    criado_em: Date | string;
    atualizado_em: Date | string;
};
export type SolicitacoesUpdateWithoutAlunoInput = {
    assunto?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferencia_data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preferencia_horario?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preferencia_modal?: Prisma.EnummodalidadePrefFieldUpdateOperationsInput | $Enums.modalidadePref;
    preferencia_local?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumstatusSolicitFieldUpdateOperationsInput | $Enums.statusSolicit;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    disciplina?: Prisma.DisciplinasUpdateOneRequiredWithoutSolicitacoesNestedInput;
    monitoria?: Prisma.MonitoriaUpdateManyWithoutSolicitacaoNestedInput;
};
export type SolicitacoesUncheckedUpdateWithoutAlunoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    disciplina_id?: Prisma.IntFieldUpdateOperationsInput | number;
    assunto?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferencia_data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preferencia_horario?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preferencia_modal?: Prisma.EnummodalidadePrefFieldUpdateOperationsInput | $Enums.modalidadePref;
    preferencia_local?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumstatusSolicitFieldUpdateOperationsInput | $Enums.statusSolicit;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    monitoria?: Prisma.MonitoriaUncheckedUpdateManyWithoutSolicitacaoNestedInput;
};
export type SolicitacoesUncheckedUpdateManyWithoutAlunoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    disciplina_id?: Prisma.IntFieldUpdateOperationsInput | number;
    assunto?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferencia_data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preferencia_horario?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preferencia_modal?: Prisma.EnummodalidadePrefFieldUpdateOperationsInput | $Enums.modalidadePref;
    preferencia_local?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumstatusSolicitFieldUpdateOperationsInput | $Enums.statusSolicit;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SolicitacoesCreateManyDisciplinaInput = {
    id?: number;
    aluno_id: number;
    assunto: string;
    descricao?: string | null;
    preferencia_data: Date | string;
    preferencia_horario: Date | string;
    preferencia_modal: $Enums.modalidadePref;
    preferencia_local?: string | null;
    status?: $Enums.statusSolicit;
    criado_em: Date | string;
    atualizado_em: Date | string;
};
export type SolicitacoesUpdateWithoutDisciplinaInput = {
    assunto?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferencia_data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preferencia_horario?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preferencia_modal?: Prisma.EnummodalidadePrefFieldUpdateOperationsInput | $Enums.modalidadePref;
    preferencia_local?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumstatusSolicitFieldUpdateOperationsInput | $Enums.statusSolicit;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    aluno?: Prisma.UsuarioUpdateOneRequiredWithoutSolicitacoesNestedInput;
    monitoria?: Prisma.MonitoriaUpdateManyWithoutSolicitacaoNestedInput;
};
export type SolicitacoesUncheckedUpdateWithoutDisciplinaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    aluno_id?: Prisma.IntFieldUpdateOperationsInput | number;
    assunto?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferencia_data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preferencia_horario?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preferencia_modal?: Prisma.EnummodalidadePrefFieldUpdateOperationsInput | $Enums.modalidadePref;
    preferencia_local?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumstatusSolicitFieldUpdateOperationsInput | $Enums.statusSolicit;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    monitoria?: Prisma.MonitoriaUncheckedUpdateManyWithoutSolicitacaoNestedInput;
};
export type SolicitacoesUncheckedUpdateManyWithoutDisciplinaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    aluno_id?: Prisma.IntFieldUpdateOperationsInput | number;
    assunto?: Prisma.StringFieldUpdateOperationsInput | string;
    descricao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferencia_data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preferencia_horario?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preferencia_modal?: Prisma.EnummodalidadePrefFieldUpdateOperationsInput | $Enums.modalidadePref;
    preferencia_local?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumstatusSolicitFieldUpdateOperationsInput | $Enums.statusSolicit;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SolicitacoesCountOutputType = {
    monitoria: number;
};
export type SolicitacoesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    monitoria?: boolean | SolicitacoesCountOutputTypeCountMonitoriaArgs;
};
export type SolicitacoesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SolicitacoesCountOutputTypeSelect<ExtArgs> | null;
};
export type SolicitacoesCountOutputTypeCountMonitoriaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MonitoriaWhereInput;
};
export type SolicitacoesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    aluno_id?: boolean;
    disciplina_id?: boolean;
    assunto?: boolean;
    descricao?: boolean;
    preferencia_data?: boolean;
    preferencia_horario?: boolean;
    preferencia_modal?: boolean;
    preferencia_local?: boolean;
    status?: boolean;
    criado_em?: boolean;
    atualizado_em?: boolean;
    aluno?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    disciplina?: boolean | Prisma.DisciplinasDefaultArgs<ExtArgs>;
    monitoria?: boolean | Prisma.Solicitacoes$monitoriaArgs<ExtArgs>;
    _count?: boolean | Prisma.SolicitacoesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["solicitacoes"]>;
export type SolicitacoesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    aluno_id?: boolean;
    disciplina_id?: boolean;
    assunto?: boolean;
    descricao?: boolean;
    preferencia_data?: boolean;
    preferencia_horario?: boolean;
    preferencia_modal?: boolean;
    preferencia_local?: boolean;
    status?: boolean;
    criado_em?: boolean;
    atualizado_em?: boolean;
    aluno?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    disciplina?: boolean | Prisma.DisciplinasDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["solicitacoes"]>;
export type SolicitacoesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    aluno_id?: boolean;
    disciplina_id?: boolean;
    assunto?: boolean;
    descricao?: boolean;
    preferencia_data?: boolean;
    preferencia_horario?: boolean;
    preferencia_modal?: boolean;
    preferencia_local?: boolean;
    status?: boolean;
    criado_em?: boolean;
    atualizado_em?: boolean;
    aluno?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    disciplina?: boolean | Prisma.DisciplinasDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["solicitacoes"]>;
export type SolicitacoesSelectScalar = {
    id?: boolean;
    aluno_id?: boolean;
    disciplina_id?: boolean;
    assunto?: boolean;
    descricao?: boolean;
    preferencia_data?: boolean;
    preferencia_horario?: boolean;
    preferencia_modal?: boolean;
    preferencia_local?: boolean;
    status?: boolean;
    criado_em?: boolean;
    atualizado_em?: boolean;
};
export type SolicitacoesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "aluno_id" | "disciplina_id" | "assunto" | "descricao" | "preferencia_data" | "preferencia_horario" | "preferencia_modal" | "preferencia_local" | "status" | "criado_em" | "atualizado_em", ExtArgs["result"]["solicitacoes"]>;
export type SolicitacoesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    aluno?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    disciplina?: boolean | Prisma.DisciplinasDefaultArgs<ExtArgs>;
    monitoria?: boolean | Prisma.Solicitacoes$monitoriaArgs<ExtArgs>;
    _count?: boolean | Prisma.SolicitacoesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SolicitacoesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    aluno?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    disciplina?: boolean | Prisma.DisciplinasDefaultArgs<ExtArgs>;
};
export type SolicitacoesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    aluno?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    disciplina?: boolean | Prisma.DisciplinasDefaultArgs<ExtArgs>;
};
export type $SolicitacoesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Solicitacoes";
    objects: {
        aluno: Prisma.$UsuarioPayload<ExtArgs>;
        disciplina: Prisma.$DisciplinasPayload<ExtArgs>;
        monitoria: Prisma.$MonitoriaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        aluno_id: number;
        disciplina_id: number;
        assunto: string;
        descricao: string | null;
        preferencia_data: Date;
        preferencia_horario: Date;
        preferencia_modal: $Enums.modalidadePref;
        preferencia_local: string | null;
        status: $Enums.statusSolicit;
        criado_em: Date;
        atualizado_em: Date;
    }, ExtArgs["result"]["solicitacoes"]>;
    composites: {};
};
export type SolicitacoesGetPayload<S extends boolean | null | undefined | SolicitacoesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SolicitacoesPayload, S>;
export type SolicitacoesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SolicitacoesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SolicitacoesCountAggregateInputType | true;
};
export interface SolicitacoesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Solicitacoes'];
        meta: {
            name: 'Solicitacoes';
        };
    };
    findUnique<T extends SolicitacoesFindUniqueArgs>(args: Prisma.SelectSubset<T, SolicitacoesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SolicitacoesClient<runtime.Types.Result.GetResult<Prisma.$SolicitacoesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SolicitacoesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SolicitacoesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SolicitacoesClient<runtime.Types.Result.GetResult<Prisma.$SolicitacoesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SolicitacoesFindFirstArgs>(args?: Prisma.SelectSubset<T, SolicitacoesFindFirstArgs<ExtArgs>>): Prisma.Prisma__SolicitacoesClient<runtime.Types.Result.GetResult<Prisma.$SolicitacoesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SolicitacoesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SolicitacoesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SolicitacoesClient<runtime.Types.Result.GetResult<Prisma.$SolicitacoesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SolicitacoesFindManyArgs>(args?: Prisma.SelectSubset<T, SolicitacoesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SolicitacoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SolicitacoesCreateArgs>(args: Prisma.SelectSubset<T, SolicitacoesCreateArgs<ExtArgs>>): Prisma.Prisma__SolicitacoesClient<runtime.Types.Result.GetResult<Prisma.$SolicitacoesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SolicitacoesCreateManyArgs>(args?: Prisma.SelectSubset<T, SolicitacoesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SolicitacoesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SolicitacoesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SolicitacoesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SolicitacoesDeleteArgs>(args: Prisma.SelectSubset<T, SolicitacoesDeleteArgs<ExtArgs>>): Prisma.Prisma__SolicitacoesClient<runtime.Types.Result.GetResult<Prisma.$SolicitacoesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SolicitacoesUpdateArgs>(args: Prisma.SelectSubset<T, SolicitacoesUpdateArgs<ExtArgs>>): Prisma.Prisma__SolicitacoesClient<runtime.Types.Result.GetResult<Prisma.$SolicitacoesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SolicitacoesDeleteManyArgs>(args?: Prisma.SelectSubset<T, SolicitacoesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SolicitacoesUpdateManyArgs>(args: Prisma.SelectSubset<T, SolicitacoesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SolicitacoesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SolicitacoesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SolicitacoesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SolicitacoesUpsertArgs>(args: Prisma.SelectSubset<T, SolicitacoesUpsertArgs<ExtArgs>>): Prisma.Prisma__SolicitacoesClient<runtime.Types.Result.GetResult<Prisma.$SolicitacoesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SolicitacoesCountArgs>(args?: Prisma.Subset<T, SolicitacoesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SolicitacoesCountAggregateOutputType> : number>;
    aggregate<T extends SolicitacoesAggregateArgs>(args: Prisma.Subset<T, SolicitacoesAggregateArgs>): Prisma.PrismaPromise<GetSolicitacoesAggregateType<T>>;
    groupBy<T extends SolicitacoesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SolicitacoesGroupByArgs['orderBy'];
    } : {
        orderBy?: SolicitacoesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SolicitacoesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSolicitacoesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SolicitacoesFieldRefs;
}
export interface Prisma__SolicitacoesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    aluno<T extends Prisma.UsuarioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsuarioDefaultArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    disciplina<T extends Prisma.DisciplinasDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DisciplinasDefaultArgs<ExtArgs>>): Prisma.Prisma__DisciplinasClient<runtime.Types.Result.GetResult<Prisma.$DisciplinasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    monitoria<T extends Prisma.Solicitacoes$monitoriaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Solicitacoes$monitoriaArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MonitoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SolicitacoesFieldRefs {
    readonly id: Prisma.FieldRef<"Solicitacoes", 'Int'>;
    readonly aluno_id: Prisma.FieldRef<"Solicitacoes", 'Int'>;
    readonly disciplina_id: Prisma.FieldRef<"Solicitacoes", 'Int'>;
    readonly assunto: Prisma.FieldRef<"Solicitacoes", 'String'>;
    readonly descricao: Prisma.FieldRef<"Solicitacoes", 'String'>;
    readonly preferencia_data: Prisma.FieldRef<"Solicitacoes", 'DateTime'>;
    readonly preferencia_horario: Prisma.FieldRef<"Solicitacoes", 'DateTime'>;
    readonly preferencia_modal: Prisma.FieldRef<"Solicitacoes", 'modalidadePref'>;
    readonly preferencia_local: Prisma.FieldRef<"Solicitacoes", 'String'>;
    readonly status: Prisma.FieldRef<"Solicitacoes", 'statusSolicit'>;
    readonly criado_em: Prisma.FieldRef<"Solicitacoes", 'DateTime'>;
    readonly atualizado_em: Prisma.FieldRef<"Solicitacoes", 'DateTime'>;
}
export type SolicitacoesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SolicitacoesSelect<ExtArgs> | null;
    omit?: Prisma.SolicitacoesOmit<ExtArgs> | null;
    include?: Prisma.SolicitacoesInclude<ExtArgs> | null;
    where: Prisma.SolicitacoesWhereUniqueInput;
};
export type SolicitacoesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SolicitacoesSelect<ExtArgs> | null;
    omit?: Prisma.SolicitacoesOmit<ExtArgs> | null;
    include?: Prisma.SolicitacoesInclude<ExtArgs> | null;
    where: Prisma.SolicitacoesWhereUniqueInput;
};
export type SolicitacoesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SolicitacoesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SolicitacoesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SolicitacoesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SolicitacoesSelect<ExtArgs> | null;
    omit?: Prisma.SolicitacoesOmit<ExtArgs> | null;
    include?: Prisma.SolicitacoesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SolicitacoesCreateInput, Prisma.SolicitacoesUncheckedCreateInput>;
};
export type SolicitacoesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SolicitacoesCreateManyInput | Prisma.SolicitacoesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SolicitacoesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SolicitacoesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SolicitacoesOmit<ExtArgs> | null;
    data: Prisma.SolicitacoesCreateManyInput | Prisma.SolicitacoesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SolicitacoesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SolicitacoesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SolicitacoesSelect<ExtArgs> | null;
    omit?: Prisma.SolicitacoesOmit<ExtArgs> | null;
    include?: Prisma.SolicitacoesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SolicitacoesUpdateInput, Prisma.SolicitacoesUncheckedUpdateInput>;
    where: Prisma.SolicitacoesWhereUniqueInput;
};
export type SolicitacoesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SolicitacoesUpdateManyMutationInput, Prisma.SolicitacoesUncheckedUpdateManyInput>;
    where?: Prisma.SolicitacoesWhereInput;
    limit?: number;
};
export type SolicitacoesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SolicitacoesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SolicitacoesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SolicitacoesUpdateManyMutationInput, Prisma.SolicitacoesUncheckedUpdateManyInput>;
    where?: Prisma.SolicitacoesWhereInput;
    limit?: number;
    include?: Prisma.SolicitacoesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SolicitacoesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SolicitacoesSelect<ExtArgs> | null;
    omit?: Prisma.SolicitacoesOmit<ExtArgs> | null;
    include?: Prisma.SolicitacoesInclude<ExtArgs> | null;
    where: Prisma.SolicitacoesWhereUniqueInput;
    create: Prisma.XOR<Prisma.SolicitacoesCreateInput, Prisma.SolicitacoesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SolicitacoesUpdateInput, Prisma.SolicitacoesUncheckedUpdateInput>;
};
export type SolicitacoesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SolicitacoesSelect<ExtArgs> | null;
    omit?: Prisma.SolicitacoesOmit<ExtArgs> | null;
    include?: Prisma.SolicitacoesInclude<ExtArgs> | null;
    where: Prisma.SolicitacoesWhereUniqueInput;
};
export type SolicitacoesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SolicitacoesWhereInput;
    limit?: number;
};
export type Solicitacoes$monitoriaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SolicitacoesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SolicitacoesSelect<ExtArgs> | null;
    omit?: Prisma.SolicitacoesOmit<ExtArgs> | null;
    include?: Prisma.SolicitacoesInclude<ExtArgs> | null;
};
