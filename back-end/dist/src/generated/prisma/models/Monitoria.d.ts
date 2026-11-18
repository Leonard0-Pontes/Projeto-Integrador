import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MonitoriaModel = runtime.Types.Result.DefaultSelection<Prisma.$MonitoriaPayload>;
export type AggregateMonitoria = {
    _count: MonitoriaCountAggregateOutputType | null;
    _avg: MonitoriaAvgAggregateOutputType | null;
    _sum: MonitoriaSumAggregateOutputType | null;
    _min: MonitoriaMinAggregateOutputType | null;
    _max: MonitoriaMaxAggregateOutputType | null;
};
export type MonitoriaAvgAggregateOutputType = {
    id: number | null;
    solicitacao_id: number | null;
    monitor_id: number | null;
};
export type MonitoriaSumAggregateOutputType = {
    id: number | null;
    solicitacao_id: number | null;
    monitor_id: number | null;
};
export type MonitoriaMinAggregateOutputType = {
    id: number | null;
    solicitacao_id: number | null;
    monitor_id: number | null;
    data: Date | null;
    horario_inicio: Date | null;
    horario_fim: Date | null;
    modalidade: $Enums.modalidadePref | null;
    local: string | null;
    link: string | null;
    status: $Enums.statusMonitor | null;
    justificativa_cancel: string | null;
    criado_em: Date | null;
    atualizado_em: Date | null;
};
export type MonitoriaMaxAggregateOutputType = {
    id: number | null;
    solicitacao_id: number | null;
    monitor_id: number | null;
    data: Date | null;
    horario_inicio: Date | null;
    horario_fim: Date | null;
    modalidade: $Enums.modalidadePref | null;
    local: string | null;
    link: string | null;
    status: $Enums.statusMonitor | null;
    justificativa_cancel: string | null;
    criado_em: Date | null;
    atualizado_em: Date | null;
};
export type MonitoriaCountAggregateOutputType = {
    id: number;
    solicitacao_id: number;
    monitor_id: number;
    data: number;
    horario_inicio: number;
    horario_fim: number;
    modalidade: number;
    local: number;
    link: number;
    status: number;
    justificativa_cancel: number;
    criado_em: number;
    atualizado_em: number;
    _all: number;
};
export type MonitoriaAvgAggregateInputType = {
    id?: true;
    solicitacao_id?: true;
    monitor_id?: true;
};
export type MonitoriaSumAggregateInputType = {
    id?: true;
    solicitacao_id?: true;
    monitor_id?: true;
};
export type MonitoriaMinAggregateInputType = {
    id?: true;
    solicitacao_id?: true;
    monitor_id?: true;
    data?: true;
    horario_inicio?: true;
    horario_fim?: true;
    modalidade?: true;
    local?: true;
    link?: true;
    status?: true;
    justificativa_cancel?: true;
    criado_em?: true;
    atualizado_em?: true;
};
export type MonitoriaMaxAggregateInputType = {
    id?: true;
    solicitacao_id?: true;
    monitor_id?: true;
    data?: true;
    horario_inicio?: true;
    horario_fim?: true;
    modalidade?: true;
    local?: true;
    link?: true;
    status?: true;
    justificativa_cancel?: true;
    criado_em?: true;
    atualizado_em?: true;
};
export type MonitoriaCountAggregateInputType = {
    id?: true;
    solicitacao_id?: true;
    monitor_id?: true;
    data?: true;
    horario_inicio?: true;
    horario_fim?: true;
    modalidade?: true;
    local?: true;
    link?: true;
    status?: true;
    justificativa_cancel?: true;
    criado_em?: true;
    atualizado_em?: true;
    _all?: true;
};
export type MonitoriaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MonitoriaWhereInput;
    orderBy?: Prisma.MonitoriaOrderByWithRelationInput | Prisma.MonitoriaOrderByWithRelationInput[];
    cursor?: Prisma.MonitoriaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MonitoriaCountAggregateInputType;
    _avg?: MonitoriaAvgAggregateInputType;
    _sum?: MonitoriaSumAggregateInputType;
    _min?: MonitoriaMinAggregateInputType;
    _max?: MonitoriaMaxAggregateInputType;
};
export type GetMonitoriaAggregateType<T extends MonitoriaAggregateArgs> = {
    [P in keyof T & keyof AggregateMonitoria]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMonitoria[P]> : Prisma.GetScalarType<T[P], AggregateMonitoria[P]>;
};
export type MonitoriaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MonitoriaWhereInput;
    orderBy?: Prisma.MonitoriaOrderByWithAggregationInput | Prisma.MonitoriaOrderByWithAggregationInput[];
    by: Prisma.MonitoriaScalarFieldEnum[] | Prisma.MonitoriaScalarFieldEnum;
    having?: Prisma.MonitoriaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MonitoriaCountAggregateInputType | true;
    _avg?: MonitoriaAvgAggregateInputType;
    _sum?: MonitoriaSumAggregateInputType;
    _min?: MonitoriaMinAggregateInputType;
    _max?: MonitoriaMaxAggregateInputType;
};
export type MonitoriaGroupByOutputType = {
    id: number;
    solicitacao_id: number;
    monitor_id: number;
    data: Date;
    horario_inicio: Date;
    horario_fim: Date;
    modalidade: $Enums.modalidadePref;
    local: string;
    link: string | null;
    status: $Enums.statusMonitor;
    justificativa_cancel: string | null;
    criado_em: Date;
    atualizado_em: Date;
    _count: MonitoriaCountAggregateOutputType | null;
    _avg: MonitoriaAvgAggregateOutputType | null;
    _sum: MonitoriaSumAggregateOutputType | null;
    _min: MonitoriaMinAggregateOutputType | null;
    _max: MonitoriaMaxAggregateOutputType | null;
};
export type GetMonitoriaGroupByPayload<T extends MonitoriaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MonitoriaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MonitoriaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MonitoriaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MonitoriaGroupByOutputType[P]>;
}>>;
export type MonitoriaWhereInput = {
    AND?: Prisma.MonitoriaWhereInput | Prisma.MonitoriaWhereInput[];
    OR?: Prisma.MonitoriaWhereInput[];
    NOT?: Prisma.MonitoriaWhereInput | Prisma.MonitoriaWhereInput[];
    id?: Prisma.IntFilter<"Monitoria"> | number;
    solicitacao_id?: Prisma.IntFilter<"Monitoria"> | number;
    monitor_id?: Prisma.IntFilter<"Monitoria"> | number;
    data?: Prisma.DateTimeFilter<"Monitoria"> | Date | string;
    horario_inicio?: Prisma.DateTimeFilter<"Monitoria"> | Date | string;
    horario_fim?: Prisma.DateTimeFilter<"Monitoria"> | Date | string;
    modalidade?: Prisma.EnummodalidadePrefFilter<"Monitoria"> | $Enums.modalidadePref;
    local?: Prisma.StringFilter<"Monitoria"> | string;
    link?: Prisma.StringNullableFilter<"Monitoria"> | string | null;
    status?: Prisma.EnumstatusMonitorFilter<"Monitoria"> | $Enums.statusMonitor;
    justificativa_cancel?: Prisma.StringNullableFilter<"Monitoria"> | string | null;
    criado_em?: Prisma.DateTimeFilter<"Monitoria"> | Date | string;
    atualizado_em?: Prisma.DateTimeFilter<"Monitoria"> | Date | string;
    solicitacao?: Prisma.XOR<Prisma.SolicitacoesScalarRelationFilter, Prisma.SolicitacoesWhereInput>;
    monitor?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
};
export type MonitoriaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    solicitacao_id?: Prisma.SortOrder;
    monitor_id?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    horario_inicio?: Prisma.SortOrder;
    horario_fim?: Prisma.SortOrder;
    modalidade?: Prisma.SortOrder;
    local?: Prisma.SortOrder;
    link?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    justificativa_cancel?: Prisma.SortOrderInput | Prisma.SortOrder;
    criado_em?: Prisma.SortOrder;
    atualizado_em?: Prisma.SortOrder;
    solicitacao?: Prisma.SolicitacoesOrderByWithRelationInput;
    monitor?: Prisma.UsuarioOrderByWithRelationInput;
};
export type MonitoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.MonitoriaWhereInput | Prisma.MonitoriaWhereInput[];
    OR?: Prisma.MonitoriaWhereInput[];
    NOT?: Prisma.MonitoriaWhereInput | Prisma.MonitoriaWhereInput[];
    solicitacao_id?: Prisma.IntFilter<"Monitoria"> | number;
    monitor_id?: Prisma.IntFilter<"Monitoria"> | number;
    data?: Prisma.DateTimeFilter<"Monitoria"> | Date | string;
    horario_inicio?: Prisma.DateTimeFilter<"Monitoria"> | Date | string;
    horario_fim?: Prisma.DateTimeFilter<"Monitoria"> | Date | string;
    modalidade?: Prisma.EnummodalidadePrefFilter<"Monitoria"> | $Enums.modalidadePref;
    local?: Prisma.StringFilter<"Monitoria"> | string;
    link?: Prisma.StringNullableFilter<"Monitoria"> | string | null;
    status?: Prisma.EnumstatusMonitorFilter<"Monitoria"> | $Enums.statusMonitor;
    justificativa_cancel?: Prisma.StringNullableFilter<"Monitoria"> | string | null;
    criado_em?: Prisma.DateTimeFilter<"Monitoria"> | Date | string;
    atualizado_em?: Prisma.DateTimeFilter<"Monitoria"> | Date | string;
    solicitacao?: Prisma.XOR<Prisma.SolicitacoesScalarRelationFilter, Prisma.SolicitacoesWhereInput>;
    monitor?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
}, "id">;
export type MonitoriaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    solicitacao_id?: Prisma.SortOrder;
    monitor_id?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    horario_inicio?: Prisma.SortOrder;
    horario_fim?: Prisma.SortOrder;
    modalidade?: Prisma.SortOrder;
    local?: Prisma.SortOrder;
    link?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    justificativa_cancel?: Prisma.SortOrderInput | Prisma.SortOrder;
    criado_em?: Prisma.SortOrder;
    atualizado_em?: Prisma.SortOrder;
    _count?: Prisma.MonitoriaCountOrderByAggregateInput;
    _avg?: Prisma.MonitoriaAvgOrderByAggregateInput;
    _max?: Prisma.MonitoriaMaxOrderByAggregateInput;
    _min?: Prisma.MonitoriaMinOrderByAggregateInput;
    _sum?: Prisma.MonitoriaSumOrderByAggregateInput;
};
export type MonitoriaScalarWhereWithAggregatesInput = {
    AND?: Prisma.MonitoriaScalarWhereWithAggregatesInput | Prisma.MonitoriaScalarWhereWithAggregatesInput[];
    OR?: Prisma.MonitoriaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MonitoriaScalarWhereWithAggregatesInput | Prisma.MonitoriaScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Monitoria"> | number;
    solicitacao_id?: Prisma.IntWithAggregatesFilter<"Monitoria"> | number;
    monitor_id?: Prisma.IntWithAggregatesFilter<"Monitoria"> | number;
    data?: Prisma.DateTimeWithAggregatesFilter<"Monitoria"> | Date | string;
    horario_inicio?: Prisma.DateTimeWithAggregatesFilter<"Monitoria"> | Date | string;
    horario_fim?: Prisma.DateTimeWithAggregatesFilter<"Monitoria"> | Date | string;
    modalidade?: Prisma.EnummodalidadePrefWithAggregatesFilter<"Monitoria"> | $Enums.modalidadePref;
    local?: Prisma.StringWithAggregatesFilter<"Monitoria"> | string;
    link?: Prisma.StringNullableWithAggregatesFilter<"Monitoria"> | string | null;
    status?: Prisma.EnumstatusMonitorWithAggregatesFilter<"Monitoria"> | $Enums.statusMonitor;
    justificativa_cancel?: Prisma.StringNullableWithAggregatesFilter<"Monitoria"> | string | null;
    criado_em?: Prisma.DateTimeWithAggregatesFilter<"Monitoria"> | Date | string;
    atualizado_em?: Prisma.DateTimeWithAggregatesFilter<"Monitoria"> | Date | string;
};
export type MonitoriaCreateInput = {
    data: Date | string;
    horario_inicio: Date | string;
    horario_fim: Date | string;
    modalidade: $Enums.modalidadePref;
    local: string;
    link?: string | null;
    status?: $Enums.statusMonitor;
    justificativa_cancel?: string | null;
    criado_em: Date | string;
    atualizado_em: Date | string;
    solicitacao: Prisma.SolicitacoesCreateNestedOneWithoutMonitoriaInput;
    monitor: Prisma.UsuarioCreateNestedOneWithoutMonitoriaInput;
};
export type MonitoriaUncheckedCreateInput = {
    id?: number;
    solicitacao_id: number;
    monitor_id: number;
    data: Date | string;
    horario_inicio: Date | string;
    horario_fim: Date | string;
    modalidade: $Enums.modalidadePref;
    local: string;
    link?: string | null;
    status?: $Enums.statusMonitor;
    justificativa_cancel?: string | null;
    criado_em: Date | string;
    atualizado_em: Date | string;
};
export type MonitoriaUpdateInput = {
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horario_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horario_fim?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    modalidade?: Prisma.EnummodalidadePrefFieldUpdateOperationsInput | $Enums.modalidadePref;
    local?: Prisma.StringFieldUpdateOperationsInput | string;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumstatusMonitorFieldUpdateOperationsInput | $Enums.statusMonitor;
    justificativa_cancel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    solicitacao?: Prisma.SolicitacoesUpdateOneRequiredWithoutMonitoriaNestedInput;
    monitor?: Prisma.UsuarioUpdateOneRequiredWithoutMonitoriaNestedInput;
};
export type MonitoriaUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    solicitacao_id?: Prisma.IntFieldUpdateOperationsInput | number;
    monitor_id?: Prisma.IntFieldUpdateOperationsInput | number;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horario_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horario_fim?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    modalidade?: Prisma.EnummodalidadePrefFieldUpdateOperationsInput | $Enums.modalidadePref;
    local?: Prisma.StringFieldUpdateOperationsInput | string;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumstatusMonitorFieldUpdateOperationsInput | $Enums.statusMonitor;
    justificativa_cancel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MonitoriaCreateManyInput = {
    id?: number;
    solicitacao_id: number;
    monitor_id: number;
    data: Date | string;
    horario_inicio: Date | string;
    horario_fim: Date | string;
    modalidade: $Enums.modalidadePref;
    local: string;
    link?: string | null;
    status?: $Enums.statusMonitor;
    justificativa_cancel?: string | null;
    criado_em: Date | string;
    atualizado_em: Date | string;
};
export type MonitoriaUpdateManyMutationInput = {
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horario_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horario_fim?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    modalidade?: Prisma.EnummodalidadePrefFieldUpdateOperationsInput | $Enums.modalidadePref;
    local?: Prisma.StringFieldUpdateOperationsInput | string;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumstatusMonitorFieldUpdateOperationsInput | $Enums.statusMonitor;
    justificativa_cancel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MonitoriaUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    solicitacao_id?: Prisma.IntFieldUpdateOperationsInput | number;
    monitor_id?: Prisma.IntFieldUpdateOperationsInput | number;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horario_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horario_fim?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    modalidade?: Prisma.EnummodalidadePrefFieldUpdateOperationsInput | $Enums.modalidadePref;
    local?: Prisma.StringFieldUpdateOperationsInput | string;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumstatusMonitorFieldUpdateOperationsInput | $Enums.statusMonitor;
    justificativa_cancel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MonitoriaListRelationFilter = {
    every?: Prisma.MonitoriaWhereInput;
    some?: Prisma.MonitoriaWhereInput;
    none?: Prisma.MonitoriaWhereInput;
};
export type MonitoriaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MonitoriaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    solicitacao_id?: Prisma.SortOrder;
    monitor_id?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    horario_inicio?: Prisma.SortOrder;
    horario_fim?: Prisma.SortOrder;
    modalidade?: Prisma.SortOrder;
    local?: Prisma.SortOrder;
    link?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    justificativa_cancel?: Prisma.SortOrder;
    criado_em?: Prisma.SortOrder;
    atualizado_em?: Prisma.SortOrder;
};
export type MonitoriaAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    solicitacao_id?: Prisma.SortOrder;
    monitor_id?: Prisma.SortOrder;
};
export type MonitoriaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    solicitacao_id?: Prisma.SortOrder;
    monitor_id?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    horario_inicio?: Prisma.SortOrder;
    horario_fim?: Prisma.SortOrder;
    modalidade?: Prisma.SortOrder;
    local?: Prisma.SortOrder;
    link?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    justificativa_cancel?: Prisma.SortOrder;
    criado_em?: Prisma.SortOrder;
    atualizado_em?: Prisma.SortOrder;
};
export type MonitoriaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    solicitacao_id?: Prisma.SortOrder;
    monitor_id?: Prisma.SortOrder;
    data?: Prisma.SortOrder;
    horario_inicio?: Prisma.SortOrder;
    horario_fim?: Prisma.SortOrder;
    modalidade?: Prisma.SortOrder;
    local?: Prisma.SortOrder;
    link?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    justificativa_cancel?: Prisma.SortOrder;
    criado_em?: Prisma.SortOrder;
    atualizado_em?: Prisma.SortOrder;
};
export type MonitoriaSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    solicitacao_id?: Prisma.SortOrder;
    monitor_id?: Prisma.SortOrder;
};
export type MonitoriaCreateNestedManyWithoutMonitorInput = {
    create?: Prisma.XOR<Prisma.MonitoriaCreateWithoutMonitorInput, Prisma.MonitoriaUncheckedCreateWithoutMonitorInput> | Prisma.MonitoriaCreateWithoutMonitorInput[] | Prisma.MonitoriaUncheckedCreateWithoutMonitorInput[];
    connectOrCreate?: Prisma.MonitoriaCreateOrConnectWithoutMonitorInput | Prisma.MonitoriaCreateOrConnectWithoutMonitorInput[];
    createMany?: Prisma.MonitoriaCreateManyMonitorInputEnvelope;
    connect?: Prisma.MonitoriaWhereUniqueInput | Prisma.MonitoriaWhereUniqueInput[];
};
export type MonitoriaUncheckedCreateNestedManyWithoutMonitorInput = {
    create?: Prisma.XOR<Prisma.MonitoriaCreateWithoutMonitorInput, Prisma.MonitoriaUncheckedCreateWithoutMonitorInput> | Prisma.MonitoriaCreateWithoutMonitorInput[] | Prisma.MonitoriaUncheckedCreateWithoutMonitorInput[];
    connectOrCreate?: Prisma.MonitoriaCreateOrConnectWithoutMonitorInput | Prisma.MonitoriaCreateOrConnectWithoutMonitorInput[];
    createMany?: Prisma.MonitoriaCreateManyMonitorInputEnvelope;
    connect?: Prisma.MonitoriaWhereUniqueInput | Prisma.MonitoriaWhereUniqueInput[];
};
export type MonitoriaUpdateManyWithoutMonitorNestedInput = {
    create?: Prisma.XOR<Prisma.MonitoriaCreateWithoutMonitorInput, Prisma.MonitoriaUncheckedCreateWithoutMonitorInput> | Prisma.MonitoriaCreateWithoutMonitorInput[] | Prisma.MonitoriaUncheckedCreateWithoutMonitorInput[];
    connectOrCreate?: Prisma.MonitoriaCreateOrConnectWithoutMonitorInput | Prisma.MonitoriaCreateOrConnectWithoutMonitorInput[];
    upsert?: Prisma.MonitoriaUpsertWithWhereUniqueWithoutMonitorInput | Prisma.MonitoriaUpsertWithWhereUniqueWithoutMonitorInput[];
    createMany?: Prisma.MonitoriaCreateManyMonitorInputEnvelope;
    set?: Prisma.MonitoriaWhereUniqueInput | Prisma.MonitoriaWhereUniqueInput[];
    disconnect?: Prisma.MonitoriaWhereUniqueInput | Prisma.MonitoriaWhereUniqueInput[];
    delete?: Prisma.MonitoriaWhereUniqueInput | Prisma.MonitoriaWhereUniqueInput[];
    connect?: Prisma.MonitoriaWhereUniqueInput | Prisma.MonitoriaWhereUniqueInput[];
    update?: Prisma.MonitoriaUpdateWithWhereUniqueWithoutMonitorInput | Prisma.MonitoriaUpdateWithWhereUniqueWithoutMonitorInput[];
    updateMany?: Prisma.MonitoriaUpdateManyWithWhereWithoutMonitorInput | Prisma.MonitoriaUpdateManyWithWhereWithoutMonitorInput[];
    deleteMany?: Prisma.MonitoriaScalarWhereInput | Prisma.MonitoriaScalarWhereInput[];
};
export type MonitoriaUncheckedUpdateManyWithoutMonitorNestedInput = {
    create?: Prisma.XOR<Prisma.MonitoriaCreateWithoutMonitorInput, Prisma.MonitoriaUncheckedCreateWithoutMonitorInput> | Prisma.MonitoriaCreateWithoutMonitorInput[] | Prisma.MonitoriaUncheckedCreateWithoutMonitorInput[];
    connectOrCreate?: Prisma.MonitoriaCreateOrConnectWithoutMonitorInput | Prisma.MonitoriaCreateOrConnectWithoutMonitorInput[];
    upsert?: Prisma.MonitoriaUpsertWithWhereUniqueWithoutMonitorInput | Prisma.MonitoriaUpsertWithWhereUniqueWithoutMonitorInput[];
    createMany?: Prisma.MonitoriaCreateManyMonitorInputEnvelope;
    set?: Prisma.MonitoriaWhereUniqueInput | Prisma.MonitoriaWhereUniqueInput[];
    disconnect?: Prisma.MonitoriaWhereUniqueInput | Prisma.MonitoriaWhereUniqueInput[];
    delete?: Prisma.MonitoriaWhereUniqueInput | Prisma.MonitoriaWhereUniqueInput[];
    connect?: Prisma.MonitoriaWhereUniqueInput | Prisma.MonitoriaWhereUniqueInput[];
    update?: Prisma.MonitoriaUpdateWithWhereUniqueWithoutMonitorInput | Prisma.MonitoriaUpdateWithWhereUniqueWithoutMonitorInput[];
    updateMany?: Prisma.MonitoriaUpdateManyWithWhereWithoutMonitorInput | Prisma.MonitoriaUpdateManyWithWhereWithoutMonitorInput[];
    deleteMany?: Prisma.MonitoriaScalarWhereInput | Prisma.MonitoriaScalarWhereInput[];
};
export type MonitoriaCreateNestedManyWithoutSolicitacaoInput = {
    create?: Prisma.XOR<Prisma.MonitoriaCreateWithoutSolicitacaoInput, Prisma.MonitoriaUncheckedCreateWithoutSolicitacaoInput> | Prisma.MonitoriaCreateWithoutSolicitacaoInput[] | Prisma.MonitoriaUncheckedCreateWithoutSolicitacaoInput[];
    connectOrCreate?: Prisma.MonitoriaCreateOrConnectWithoutSolicitacaoInput | Prisma.MonitoriaCreateOrConnectWithoutSolicitacaoInput[];
    createMany?: Prisma.MonitoriaCreateManySolicitacaoInputEnvelope;
    connect?: Prisma.MonitoriaWhereUniqueInput | Prisma.MonitoriaWhereUniqueInput[];
};
export type MonitoriaUncheckedCreateNestedManyWithoutSolicitacaoInput = {
    create?: Prisma.XOR<Prisma.MonitoriaCreateWithoutSolicitacaoInput, Prisma.MonitoriaUncheckedCreateWithoutSolicitacaoInput> | Prisma.MonitoriaCreateWithoutSolicitacaoInput[] | Prisma.MonitoriaUncheckedCreateWithoutSolicitacaoInput[];
    connectOrCreate?: Prisma.MonitoriaCreateOrConnectWithoutSolicitacaoInput | Prisma.MonitoriaCreateOrConnectWithoutSolicitacaoInput[];
    createMany?: Prisma.MonitoriaCreateManySolicitacaoInputEnvelope;
    connect?: Prisma.MonitoriaWhereUniqueInput | Prisma.MonitoriaWhereUniqueInput[];
};
export type MonitoriaUpdateManyWithoutSolicitacaoNestedInput = {
    create?: Prisma.XOR<Prisma.MonitoriaCreateWithoutSolicitacaoInput, Prisma.MonitoriaUncheckedCreateWithoutSolicitacaoInput> | Prisma.MonitoriaCreateWithoutSolicitacaoInput[] | Prisma.MonitoriaUncheckedCreateWithoutSolicitacaoInput[];
    connectOrCreate?: Prisma.MonitoriaCreateOrConnectWithoutSolicitacaoInput | Prisma.MonitoriaCreateOrConnectWithoutSolicitacaoInput[];
    upsert?: Prisma.MonitoriaUpsertWithWhereUniqueWithoutSolicitacaoInput | Prisma.MonitoriaUpsertWithWhereUniqueWithoutSolicitacaoInput[];
    createMany?: Prisma.MonitoriaCreateManySolicitacaoInputEnvelope;
    set?: Prisma.MonitoriaWhereUniqueInput | Prisma.MonitoriaWhereUniqueInput[];
    disconnect?: Prisma.MonitoriaWhereUniqueInput | Prisma.MonitoriaWhereUniqueInput[];
    delete?: Prisma.MonitoriaWhereUniqueInput | Prisma.MonitoriaWhereUniqueInput[];
    connect?: Prisma.MonitoriaWhereUniqueInput | Prisma.MonitoriaWhereUniqueInput[];
    update?: Prisma.MonitoriaUpdateWithWhereUniqueWithoutSolicitacaoInput | Prisma.MonitoriaUpdateWithWhereUniqueWithoutSolicitacaoInput[];
    updateMany?: Prisma.MonitoriaUpdateManyWithWhereWithoutSolicitacaoInput | Prisma.MonitoriaUpdateManyWithWhereWithoutSolicitacaoInput[];
    deleteMany?: Prisma.MonitoriaScalarWhereInput | Prisma.MonitoriaScalarWhereInput[];
};
export type MonitoriaUncheckedUpdateManyWithoutSolicitacaoNestedInput = {
    create?: Prisma.XOR<Prisma.MonitoriaCreateWithoutSolicitacaoInput, Prisma.MonitoriaUncheckedCreateWithoutSolicitacaoInput> | Prisma.MonitoriaCreateWithoutSolicitacaoInput[] | Prisma.MonitoriaUncheckedCreateWithoutSolicitacaoInput[];
    connectOrCreate?: Prisma.MonitoriaCreateOrConnectWithoutSolicitacaoInput | Prisma.MonitoriaCreateOrConnectWithoutSolicitacaoInput[];
    upsert?: Prisma.MonitoriaUpsertWithWhereUniqueWithoutSolicitacaoInput | Prisma.MonitoriaUpsertWithWhereUniqueWithoutSolicitacaoInput[];
    createMany?: Prisma.MonitoriaCreateManySolicitacaoInputEnvelope;
    set?: Prisma.MonitoriaWhereUniqueInput | Prisma.MonitoriaWhereUniqueInput[];
    disconnect?: Prisma.MonitoriaWhereUniqueInput | Prisma.MonitoriaWhereUniqueInput[];
    delete?: Prisma.MonitoriaWhereUniqueInput | Prisma.MonitoriaWhereUniqueInput[];
    connect?: Prisma.MonitoriaWhereUniqueInput | Prisma.MonitoriaWhereUniqueInput[];
    update?: Prisma.MonitoriaUpdateWithWhereUniqueWithoutSolicitacaoInput | Prisma.MonitoriaUpdateWithWhereUniqueWithoutSolicitacaoInput[];
    updateMany?: Prisma.MonitoriaUpdateManyWithWhereWithoutSolicitacaoInput | Prisma.MonitoriaUpdateManyWithWhereWithoutSolicitacaoInput[];
    deleteMany?: Prisma.MonitoriaScalarWhereInput | Prisma.MonitoriaScalarWhereInput[];
};
export type EnumstatusMonitorFieldUpdateOperationsInput = {
    set?: $Enums.statusMonitor;
};
export type MonitoriaCreateWithoutMonitorInput = {
    data: Date | string;
    horario_inicio: Date | string;
    horario_fim: Date | string;
    modalidade: $Enums.modalidadePref;
    local: string;
    link?: string | null;
    status?: $Enums.statusMonitor;
    justificativa_cancel?: string | null;
    criado_em: Date | string;
    atualizado_em: Date | string;
    solicitacao: Prisma.SolicitacoesCreateNestedOneWithoutMonitoriaInput;
};
export type MonitoriaUncheckedCreateWithoutMonitorInput = {
    id?: number;
    solicitacao_id: number;
    data: Date | string;
    horario_inicio: Date | string;
    horario_fim: Date | string;
    modalidade: $Enums.modalidadePref;
    local: string;
    link?: string | null;
    status?: $Enums.statusMonitor;
    justificativa_cancel?: string | null;
    criado_em: Date | string;
    atualizado_em: Date | string;
};
export type MonitoriaCreateOrConnectWithoutMonitorInput = {
    where: Prisma.MonitoriaWhereUniqueInput;
    create: Prisma.XOR<Prisma.MonitoriaCreateWithoutMonitorInput, Prisma.MonitoriaUncheckedCreateWithoutMonitorInput>;
};
export type MonitoriaCreateManyMonitorInputEnvelope = {
    data: Prisma.MonitoriaCreateManyMonitorInput | Prisma.MonitoriaCreateManyMonitorInput[];
    skipDuplicates?: boolean;
};
export type MonitoriaUpsertWithWhereUniqueWithoutMonitorInput = {
    where: Prisma.MonitoriaWhereUniqueInput;
    update: Prisma.XOR<Prisma.MonitoriaUpdateWithoutMonitorInput, Prisma.MonitoriaUncheckedUpdateWithoutMonitorInput>;
    create: Prisma.XOR<Prisma.MonitoriaCreateWithoutMonitorInput, Prisma.MonitoriaUncheckedCreateWithoutMonitorInput>;
};
export type MonitoriaUpdateWithWhereUniqueWithoutMonitorInput = {
    where: Prisma.MonitoriaWhereUniqueInput;
    data: Prisma.XOR<Prisma.MonitoriaUpdateWithoutMonitorInput, Prisma.MonitoriaUncheckedUpdateWithoutMonitorInput>;
};
export type MonitoriaUpdateManyWithWhereWithoutMonitorInput = {
    where: Prisma.MonitoriaScalarWhereInput;
    data: Prisma.XOR<Prisma.MonitoriaUpdateManyMutationInput, Prisma.MonitoriaUncheckedUpdateManyWithoutMonitorInput>;
};
export type MonitoriaScalarWhereInput = {
    AND?: Prisma.MonitoriaScalarWhereInput | Prisma.MonitoriaScalarWhereInput[];
    OR?: Prisma.MonitoriaScalarWhereInput[];
    NOT?: Prisma.MonitoriaScalarWhereInput | Prisma.MonitoriaScalarWhereInput[];
    id?: Prisma.IntFilter<"Monitoria"> | number;
    solicitacao_id?: Prisma.IntFilter<"Monitoria"> | number;
    monitor_id?: Prisma.IntFilter<"Monitoria"> | number;
    data?: Prisma.DateTimeFilter<"Monitoria"> | Date | string;
    horario_inicio?: Prisma.DateTimeFilter<"Monitoria"> | Date | string;
    horario_fim?: Prisma.DateTimeFilter<"Monitoria"> | Date | string;
    modalidade?: Prisma.EnummodalidadePrefFilter<"Monitoria"> | $Enums.modalidadePref;
    local?: Prisma.StringFilter<"Monitoria"> | string;
    link?: Prisma.StringNullableFilter<"Monitoria"> | string | null;
    status?: Prisma.EnumstatusMonitorFilter<"Monitoria"> | $Enums.statusMonitor;
    justificativa_cancel?: Prisma.StringNullableFilter<"Monitoria"> | string | null;
    criado_em?: Prisma.DateTimeFilter<"Monitoria"> | Date | string;
    atualizado_em?: Prisma.DateTimeFilter<"Monitoria"> | Date | string;
};
export type MonitoriaCreateWithoutSolicitacaoInput = {
    data: Date | string;
    horario_inicio: Date | string;
    horario_fim: Date | string;
    modalidade: $Enums.modalidadePref;
    local: string;
    link?: string | null;
    status?: $Enums.statusMonitor;
    justificativa_cancel?: string | null;
    criado_em: Date | string;
    atualizado_em: Date | string;
    monitor: Prisma.UsuarioCreateNestedOneWithoutMonitoriaInput;
};
export type MonitoriaUncheckedCreateWithoutSolicitacaoInput = {
    id?: number;
    monitor_id: number;
    data: Date | string;
    horario_inicio: Date | string;
    horario_fim: Date | string;
    modalidade: $Enums.modalidadePref;
    local: string;
    link?: string | null;
    status?: $Enums.statusMonitor;
    justificativa_cancel?: string | null;
    criado_em: Date | string;
    atualizado_em: Date | string;
};
export type MonitoriaCreateOrConnectWithoutSolicitacaoInput = {
    where: Prisma.MonitoriaWhereUniqueInput;
    create: Prisma.XOR<Prisma.MonitoriaCreateWithoutSolicitacaoInput, Prisma.MonitoriaUncheckedCreateWithoutSolicitacaoInput>;
};
export type MonitoriaCreateManySolicitacaoInputEnvelope = {
    data: Prisma.MonitoriaCreateManySolicitacaoInput | Prisma.MonitoriaCreateManySolicitacaoInput[];
    skipDuplicates?: boolean;
};
export type MonitoriaUpsertWithWhereUniqueWithoutSolicitacaoInput = {
    where: Prisma.MonitoriaWhereUniqueInput;
    update: Prisma.XOR<Prisma.MonitoriaUpdateWithoutSolicitacaoInput, Prisma.MonitoriaUncheckedUpdateWithoutSolicitacaoInput>;
    create: Prisma.XOR<Prisma.MonitoriaCreateWithoutSolicitacaoInput, Prisma.MonitoriaUncheckedCreateWithoutSolicitacaoInput>;
};
export type MonitoriaUpdateWithWhereUniqueWithoutSolicitacaoInput = {
    where: Prisma.MonitoriaWhereUniqueInput;
    data: Prisma.XOR<Prisma.MonitoriaUpdateWithoutSolicitacaoInput, Prisma.MonitoriaUncheckedUpdateWithoutSolicitacaoInput>;
};
export type MonitoriaUpdateManyWithWhereWithoutSolicitacaoInput = {
    where: Prisma.MonitoriaScalarWhereInput;
    data: Prisma.XOR<Prisma.MonitoriaUpdateManyMutationInput, Prisma.MonitoriaUncheckedUpdateManyWithoutSolicitacaoInput>;
};
export type MonitoriaCreateManyMonitorInput = {
    id?: number;
    solicitacao_id: number;
    data: Date | string;
    horario_inicio: Date | string;
    horario_fim: Date | string;
    modalidade: $Enums.modalidadePref;
    local: string;
    link?: string | null;
    status?: $Enums.statusMonitor;
    justificativa_cancel?: string | null;
    criado_em: Date | string;
    atualizado_em: Date | string;
};
export type MonitoriaUpdateWithoutMonitorInput = {
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horario_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horario_fim?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    modalidade?: Prisma.EnummodalidadePrefFieldUpdateOperationsInput | $Enums.modalidadePref;
    local?: Prisma.StringFieldUpdateOperationsInput | string;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumstatusMonitorFieldUpdateOperationsInput | $Enums.statusMonitor;
    justificativa_cancel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    solicitacao?: Prisma.SolicitacoesUpdateOneRequiredWithoutMonitoriaNestedInput;
};
export type MonitoriaUncheckedUpdateWithoutMonitorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    solicitacao_id?: Prisma.IntFieldUpdateOperationsInput | number;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horario_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horario_fim?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    modalidade?: Prisma.EnummodalidadePrefFieldUpdateOperationsInput | $Enums.modalidadePref;
    local?: Prisma.StringFieldUpdateOperationsInput | string;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumstatusMonitorFieldUpdateOperationsInput | $Enums.statusMonitor;
    justificativa_cancel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MonitoriaUncheckedUpdateManyWithoutMonitorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    solicitacao_id?: Prisma.IntFieldUpdateOperationsInput | number;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horario_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horario_fim?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    modalidade?: Prisma.EnummodalidadePrefFieldUpdateOperationsInput | $Enums.modalidadePref;
    local?: Prisma.StringFieldUpdateOperationsInput | string;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumstatusMonitorFieldUpdateOperationsInput | $Enums.statusMonitor;
    justificativa_cancel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MonitoriaCreateManySolicitacaoInput = {
    id?: number;
    monitor_id: number;
    data: Date | string;
    horario_inicio: Date | string;
    horario_fim: Date | string;
    modalidade: $Enums.modalidadePref;
    local: string;
    link?: string | null;
    status?: $Enums.statusMonitor;
    justificativa_cancel?: string | null;
    criado_em: Date | string;
    atualizado_em: Date | string;
};
export type MonitoriaUpdateWithoutSolicitacaoInput = {
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horario_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horario_fim?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    modalidade?: Prisma.EnummodalidadePrefFieldUpdateOperationsInput | $Enums.modalidadePref;
    local?: Prisma.StringFieldUpdateOperationsInput | string;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumstatusMonitorFieldUpdateOperationsInput | $Enums.statusMonitor;
    justificativa_cancel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    monitor?: Prisma.UsuarioUpdateOneRequiredWithoutMonitoriaNestedInput;
};
export type MonitoriaUncheckedUpdateWithoutSolicitacaoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    monitor_id?: Prisma.IntFieldUpdateOperationsInput | number;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horario_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horario_fim?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    modalidade?: Prisma.EnummodalidadePrefFieldUpdateOperationsInput | $Enums.modalidadePref;
    local?: Prisma.StringFieldUpdateOperationsInput | string;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumstatusMonitorFieldUpdateOperationsInput | $Enums.statusMonitor;
    justificativa_cancel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MonitoriaUncheckedUpdateManyWithoutSolicitacaoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    monitor_id?: Prisma.IntFieldUpdateOperationsInput | number;
    data?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horario_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horario_fim?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    modalidade?: Prisma.EnummodalidadePrefFieldUpdateOperationsInput | $Enums.modalidadePref;
    local?: Prisma.StringFieldUpdateOperationsInput | string;
    link?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumstatusMonitorFieldUpdateOperationsInput | $Enums.statusMonitor;
    justificativa_cancel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MonitoriaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    solicitacao_id?: boolean;
    monitor_id?: boolean;
    data?: boolean;
    horario_inicio?: boolean;
    horario_fim?: boolean;
    modalidade?: boolean;
    local?: boolean;
    link?: boolean;
    status?: boolean;
    justificativa_cancel?: boolean;
    criado_em?: boolean;
    atualizado_em?: boolean;
    solicitacao?: boolean | Prisma.SolicitacoesDefaultArgs<ExtArgs>;
    monitor?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["monitoria"]>;
export type MonitoriaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    solicitacao_id?: boolean;
    monitor_id?: boolean;
    data?: boolean;
    horario_inicio?: boolean;
    horario_fim?: boolean;
    modalidade?: boolean;
    local?: boolean;
    link?: boolean;
    status?: boolean;
    justificativa_cancel?: boolean;
    criado_em?: boolean;
    atualizado_em?: boolean;
    solicitacao?: boolean | Prisma.SolicitacoesDefaultArgs<ExtArgs>;
    monitor?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["monitoria"]>;
export type MonitoriaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    solicitacao_id?: boolean;
    monitor_id?: boolean;
    data?: boolean;
    horario_inicio?: boolean;
    horario_fim?: boolean;
    modalidade?: boolean;
    local?: boolean;
    link?: boolean;
    status?: boolean;
    justificativa_cancel?: boolean;
    criado_em?: boolean;
    atualizado_em?: boolean;
    solicitacao?: boolean | Prisma.SolicitacoesDefaultArgs<ExtArgs>;
    monitor?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["monitoria"]>;
export type MonitoriaSelectScalar = {
    id?: boolean;
    solicitacao_id?: boolean;
    monitor_id?: boolean;
    data?: boolean;
    horario_inicio?: boolean;
    horario_fim?: boolean;
    modalidade?: boolean;
    local?: boolean;
    link?: boolean;
    status?: boolean;
    justificativa_cancel?: boolean;
    criado_em?: boolean;
    atualizado_em?: boolean;
};
export type MonitoriaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "solicitacao_id" | "monitor_id" | "data" | "horario_inicio" | "horario_fim" | "modalidade" | "local" | "link" | "status" | "justificativa_cancel" | "criado_em" | "atualizado_em", ExtArgs["result"]["monitoria"]>;
export type MonitoriaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    solicitacao?: boolean | Prisma.SolicitacoesDefaultArgs<ExtArgs>;
    monitor?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type MonitoriaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    solicitacao?: boolean | Prisma.SolicitacoesDefaultArgs<ExtArgs>;
    monitor?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type MonitoriaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    solicitacao?: boolean | Prisma.SolicitacoesDefaultArgs<ExtArgs>;
    monitor?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type $MonitoriaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Monitoria";
    objects: {
        solicitacao: Prisma.$SolicitacoesPayload<ExtArgs>;
        monitor: Prisma.$UsuarioPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        solicitacao_id: number;
        monitor_id: number;
        data: Date;
        horario_inicio: Date;
        horario_fim: Date;
        modalidade: $Enums.modalidadePref;
        local: string;
        link: string | null;
        status: $Enums.statusMonitor;
        justificativa_cancel: string | null;
        criado_em: Date;
        atualizado_em: Date;
    }, ExtArgs["result"]["monitoria"]>;
    composites: {};
};
export type MonitoriaGetPayload<S extends boolean | null | undefined | MonitoriaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MonitoriaPayload, S>;
export type MonitoriaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MonitoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MonitoriaCountAggregateInputType | true;
};
export interface MonitoriaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Monitoria'];
        meta: {
            name: 'Monitoria';
        };
    };
    findUnique<T extends MonitoriaFindUniqueArgs>(args: Prisma.SelectSubset<T, MonitoriaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MonitoriaClient<runtime.Types.Result.GetResult<Prisma.$MonitoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MonitoriaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MonitoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MonitoriaClient<runtime.Types.Result.GetResult<Prisma.$MonitoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MonitoriaFindFirstArgs>(args?: Prisma.SelectSubset<T, MonitoriaFindFirstArgs<ExtArgs>>): Prisma.Prisma__MonitoriaClient<runtime.Types.Result.GetResult<Prisma.$MonitoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MonitoriaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MonitoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MonitoriaClient<runtime.Types.Result.GetResult<Prisma.$MonitoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MonitoriaFindManyArgs>(args?: Prisma.SelectSubset<T, MonitoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MonitoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MonitoriaCreateArgs>(args: Prisma.SelectSubset<T, MonitoriaCreateArgs<ExtArgs>>): Prisma.Prisma__MonitoriaClient<runtime.Types.Result.GetResult<Prisma.$MonitoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MonitoriaCreateManyArgs>(args?: Prisma.SelectSubset<T, MonitoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MonitoriaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MonitoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MonitoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MonitoriaDeleteArgs>(args: Prisma.SelectSubset<T, MonitoriaDeleteArgs<ExtArgs>>): Prisma.Prisma__MonitoriaClient<runtime.Types.Result.GetResult<Prisma.$MonitoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MonitoriaUpdateArgs>(args: Prisma.SelectSubset<T, MonitoriaUpdateArgs<ExtArgs>>): Prisma.Prisma__MonitoriaClient<runtime.Types.Result.GetResult<Prisma.$MonitoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MonitoriaDeleteManyArgs>(args?: Prisma.SelectSubset<T, MonitoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MonitoriaUpdateManyArgs>(args: Prisma.SelectSubset<T, MonitoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MonitoriaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MonitoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MonitoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MonitoriaUpsertArgs>(args: Prisma.SelectSubset<T, MonitoriaUpsertArgs<ExtArgs>>): Prisma.Prisma__MonitoriaClient<runtime.Types.Result.GetResult<Prisma.$MonitoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MonitoriaCountArgs>(args?: Prisma.Subset<T, MonitoriaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MonitoriaCountAggregateOutputType> : number>;
    aggregate<T extends MonitoriaAggregateArgs>(args: Prisma.Subset<T, MonitoriaAggregateArgs>): Prisma.PrismaPromise<GetMonitoriaAggregateType<T>>;
    groupBy<T extends MonitoriaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MonitoriaGroupByArgs['orderBy'];
    } : {
        orderBy?: MonitoriaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MonitoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonitoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MonitoriaFieldRefs;
}
export interface Prisma__MonitoriaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    solicitacao<T extends Prisma.SolicitacoesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SolicitacoesDefaultArgs<ExtArgs>>): Prisma.Prisma__SolicitacoesClient<runtime.Types.Result.GetResult<Prisma.$SolicitacoesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    monitor<T extends Prisma.UsuarioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsuarioDefaultArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MonitoriaFieldRefs {
    readonly id: Prisma.FieldRef<"Monitoria", 'Int'>;
    readonly solicitacao_id: Prisma.FieldRef<"Monitoria", 'Int'>;
    readonly monitor_id: Prisma.FieldRef<"Monitoria", 'Int'>;
    readonly data: Prisma.FieldRef<"Monitoria", 'DateTime'>;
    readonly horario_inicio: Prisma.FieldRef<"Monitoria", 'DateTime'>;
    readonly horario_fim: Prisma.FieldRef<"Monitoria", 'DateTime'>;
    readonly modalidade: Prisma.FieldRef<"Monitoria", 'modalidadePref'>;
    readonly local: Prisma.FieldRef<"Monitoria", 'String'>;
    readonly link: Prisma.FieldRef<"Monitoria", 'String'>;
    readonly status: Prisma.FieldRef<"Monitoria", 'statusMonitor'>;
    readonly justificativa_cancel: Prisma.FieldRef<"Monitoria", 'String'>;
    readonly criado_em: Prisma.FieldRef<"Monitoria", 'DateTime'>;
    readonly atualizado_em: Prisma.FieldRef<"Monitoria", 'DateTime'>;
}
export type MonitoriaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MonitoriaSelect<ExtArgs> | null;
    omit?: Prisma.MonitoriaOmit<ExtArgs> | null;
    include?: Prisma.MonitoriaInclude<ExtArgs> | null;
    where: Prisma.MonitoriaWhereUniqueInput;
};
export type MonitoriaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MonitoriaSelect<ExtArgs> | null;
    omit?: Prisma.MonitoriaOmit<ExtArgs> | null;
    include?: Prisma.MonitoriaInclude<ExtArgs> | null;
    where: Prisma.MonitoriaWhereUniqueInput;
};
export type MonitoriaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MonitoriaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MonitoriaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MonitoriaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MonitoriaSelect<ExtArgs> | null;
    omit?: Prisma.MonitoriaOmit<ExtArgs> | null;
    include?: Prisma.MonitoriaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MonitoriaCreateInput, Prisma.MonitoriaUncheckedCreateInput>;
};
export type MonitoriaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MonitoriaCreateManyInput | Prisma.MonitoriaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MonitoriaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MonitoriaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MonitoriaOmit<ExtArgs> | null;
    data: Prisma.MonitoriaCreateManyInput | Prisma.MonitoriaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MonitoriaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MonitoriaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MonitoriaSelect<ExtArgs> | null;
    omit?: Prisma.MonitoriaOmit<ExtArgs> | null;
    include?: Prisma.MonitoriaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MonitoriaUpdateInput, Prisma.MonitoriaUncheckedUpdateInput>;
    where: Prisma.MonitoriaWhereUniqueInput;
};
export type MonitoriaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MonitoriaUpdateManyMutationInput, Prisma.MonitoriaUncheckedUpdateManyInput>;
    where?: Prisma.MonitoriaWhereInput;
    limit?: number;
};
export type MonitoriaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MonitoriaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MonitoriaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MonitoriaUpdateManyMutationInput, Prisma.MonitoriaUncheckedUpdateManyInput>;
    where?: Prisma.MonitoriaWhereInput;
    limit?: number;
    include?: Prisma.MonitoriaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MonitoriaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MonitoriaSelect<ExtArgs> | null;
    omit?: Prisma.MonitoriaOmit<ExtArgs> | null;
    include?: Prisma.MonitoriaInclude<ExtArgs> | null;
    where: Prisma.MonitoriaWhereUniqueInput;
    create: Prisma.XOR<Prisma.MonitoriaCreateInput, Prisma.MonitoriaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MonitoriaUpdateInput, Prisma.MonitoriaUncheckedUpdateInput>;
};
export type MonitoriaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MonitoriaSelect<ExtArgs> | null;
    omit?: Prisma.MonitoriaOmit<ExtArgs> | null;
    include?: Prisma.MonitoriaInclude<ExtArgs> | null;
    where: Prisma.MonitoriaWhereUniqueInput;
};
export type MonitoriaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MonitoriaWhereInput;
    limit?: number;
};
export type MonitoriaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MonitoriaSelect<ExtArgs> | null;
    omit?: Prisma.MonitoriaOmit<ExtArgs> | null;
    include?: Prisma.MonitoriaInclude<ExtArgs> | null;
};
