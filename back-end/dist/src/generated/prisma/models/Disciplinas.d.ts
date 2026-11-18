import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DisciplinasModel = runtime.Types.Result.DefaultSelection<Prisma.$DisciplinasPayload>;
export type AggregateDisciplinas = {
    _count: DisciplinasCountAggregateOutputType | null;
    _avg: DisciplinasAvgAggregateOutputType | null;
    _sum: DisciplinasSumAggregateOutputType | null;
    _min: DisciplinasMinAggregateOutputType | null;
    _max: DisciplinasMaxAggregateOutputType | null;
};
export type DisciplinasAvgAggregateOutputType = {
    id: number | null;
};
export type DisciplinasSumAggregateOutputType = {
    id: number | null;
};
export type DisciplinasMinAggregateOutputType = {
    id: number | null;
    nome: string | null;
    codigo: string | null;
    ativo: boolean | null;
    criado_em: Date | null;
    atualizado_em: Date | null;
};
export type DisciplinasMaxAggregateOutputType = {
    id: number | null;
    nome: string | null;
    codigo: string | null;
    ativo: boolean | null;
    criado_em: Date | null;
    atualizado_em: Date | null;
};
export type DisciplinasCountAggregateOutputType = {
    id: number;
    nome: number;
    codigo: number;
    ativo: number;
    criado_em: number;
    atualizado_em: number;
    _all: number;
};
export type DisciplinasAvgAggregateInputType = {
    id?: true;
};
export type DisciplinasSumAggregateInputType = {
    id?: true;
};
export type DisciplinasMinAggregateInputType = {
    id?: true;
    nome?: true;
    codigo?: true;
    ativo?: true;
    criado_em?: true;
    atualizado_em?: true;
};
export type DisciplinasMaxAggregateInputType = {
    id?: true;
    nome?: true;
    codigo?: true;
    ativo?: true;
    criado_em?: true;
    atualizado_em?: true;
};
export type DisciplinasCountAggregateInputType = {
    id?: true;
    nome?: true;
    codigo?: true;
    ativo?: true;
    criado_em?: true;
    atualizado_em?: true;
    _all?: true;
};
export type DisciplinasAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DisciplinasWhereInput;
    orderBy?: Prisma.DisciplinasOrderByWithRelationInput | Prisma.DisciplinasOrderByWithRelationInput[];
    cursor?: Prisma.DisciplinasWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DisciplinasCountAggregateInputType;
    _avg?: DisciplinasAvgAggregateInputType;
    _sum?: DisciplinasSumAggregateInputType;
    _min?: DisciplinasMinAggregateInputType;
    _max?: DisciplinasMaxAggregateInputType;
};
export type GetDisciplinasAggregateType<T extends DisciplinasAggregateArgs> = {
    [P in keyof T & keyof AggregateDisciplinas]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDisciplinas[P]> : Prisma.GetScalarType<T[P], AggregateDisciplinas[P]>;
};
export type DisciplinasGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DisciplinasWhereInput;
    orderBy?: Prisma.DisciplinasOrderByWithAggregationInput | Prisma.DisciplinasOrderByWithAggregationInput[];
    by: Prisma.DisciplinasScalarFieldEnum[] | Prisma.DisciplinasScalarFieldEnum;
    having?: Prisma.DisciplinasScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DisciplinasCountAggregateInputType | true;
    _avg?: DisciplinasAvgAggregateInputType;
    _sum?: DisciplinasSumAggregateInputType;
    _min?: DisciplinasMinAggregateInputType;
    _max?: DisciplinasMaxAggregateInputType;
};
export type DisciplinasGroupByOutputType = {
    id: number;
    nome: string;
    codigo: string;
    ativo: boolean;
    criado_em: Date;
    atualizado_em: Date;
    _count: DisciplinasCountAggregateOutputType | null;
    _avg: DisciplinasAvgAggregateOutputType | null;
    _sum: DisciplinasSumAggregateOutputType | null;
    _min: DisciplinasMinAggregateOutputType | null;
    _max: DisciplinasMaxAggregateOutputType | null;
};
export type GetDisciplinasGroupByPayload<T extends DisciplinasGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DisciplinasGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DisciplinasGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DisciplinasGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DisciplinasGroupByOutputType[P]>;
}>>;
export type DisciplinasWhereInput = {
    AND?: Prisma.DisciplinasWhereInput | Prisma.DisciplinasWhereInput[];
    OR?: Prisma.DisciplinasWhereInput[];
    NOT?: Prisma.DisciplinasWhereInput | Prisma.DisciplinasWhereInput[];
    id?: Prisma.IntFilter<"Disciplinas"> | number;
    nome?: Prisma.StringFilter<"Disciplinas"> | string;
    codigo?: Prisma.StringFilter<"Disciplinas"> | string;
    ativo?: Prisma.BoolFilter<"Disciplinas"> | boolean;
    criado_em?: Prisma.DateTimeFilter<"Disciplinas"> | Date | string;
    atualizado_em?: Prisma.DateTimeFilter<"Disciplinas"> | Date | string;
    solicitacoes?: Prisma.SolicitacoesListRelationFilter;
    user_materia?: Prisma.Usuario_DisciplinaListRelationFilter;
};
export type DisciplinasOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    criado_em?: Prisma.SortOrder;
    atualizado_em?: Prisma.SortOrder;
    solicitacoes?: Prisma.SolicitacoesOrderByRelationAggregateInput;
    user_materia?: Prisma.Usuario_DisciplinaOrderByRelationAggregateInput;
};
export type DisciplinasWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.DisciplinasWhereInput | Prisma.DisciplinasWhereInput[];
    OR?: Prisma.DisciplinasWhereInput[];
    NOT?: Prisma.DisciplinasWhereInput | Prisma.DisciplinasWhereInput[];
    nome?: Prisma.StringFilter<"Disciplinas"> | string;
    codigo?: Prisma.StringFilter<"Disciplinas"> | string;
    ativo?: Prisma.BoolFilter<"Disciplinas"> | boolean;
    criado_em?: Prisma.DateTimeFilter<"Disciplinas"> | Date | string;
    atualizado_em?: Prisma.DateTimeFilter<"Disciplinas"> | Date | string;
    solicitacoes?: Prisma.SolicitacoesListRelationFilter;
    user_materia?: Prisma.Usuario_DisciplinaListRelationFilter;
}, "id">;
export type DisciplinasOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    criado_em?: Prisma.SortOrder;
    atualizado_em?: Prisma.SortOrder;
    _count?: Prisma.DisciplinasCountOrderByAggregateInput;
    _avg?: Prisma.DisciplinasAvgOrderByAggregateInput;
    _max?: Prisma.DisciplinasMaxOrderByAggregateInput;
    _min?: Prisma.DisciplinasMinOrderByAggregateInput;
    _sum?: Prisma.DisciplinasSumOrderByAggregateInput;
};
export type DisciplinasScalarWhereWithAggregatesInput = {
    AND?: Prisma.DisciplinasScalarWhereWithAggregatesInput | Prisma.DisciplinasScalarWhereWithAggregatesInput[];
    OR?: Prisma.DisciplinasScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DisciplinasScalarWhereWithAggregatesInput | Prisma.DisciplinasScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Disciplinas"> | number;
    nome?: Prisma.StringWithAggregatesFilter<"Disciplinas"> | string;
    codigo?: Prisma.StringWithAggregatesFilter<"Disciplinas"> | string;
    ativo?: Prisma.BoolWithAggregatesFilter<"Disciplinas"> | boolean;
    criado_em?: Prisma.DateTimeWithAggregatesFilter<"Disciplinas"> | Date | string;
    atualizado_em?: Prisma.DateTimeWithAggregatesFilter<"Disciplinas"> | Date | string;
};
export type DisciplinasCreateInput = {
    nome: string;
    codigo: string;
    ativo?: boolean;
    criado_em: Date | string;
    atualizado_em: Date | string;
    solicitacoes?: Prisma.SolicitacoesCreateNestedManyWithoutDisciplinaInput;
    user_materia?: Prisma.Usuario_DisciplinaCreateNestedManyWithoutDisciplinaInput;
};
export type DisciplinasUncheckedCreateInput = {
    id?: number;
    nome: string;
    codigo: string;
    ativo?: boolean;
    criado_em: Date | string;
    atualizado_em: Date | string;
    solicitacoes?: Prisma.SolicitacoesUncheckedCreateNestedManyWithoutDisciplinaInput;
    user_materia?: Prisma.Usuario_DisciplinaUncheckedCreateNestedManyWithoutDisciplinaInput;
};
export type DisciplinasUpdateInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    solicitacoes?: Prisma.SolicitacoesUpdateManyWithoutDisciplinaNestedInput;
    user_materia?: Prisma.Usuario_DisciplinaUpdateManyWithoutDisciplinaNestedInput;
};
export type DisciplinasUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    solicitacoes?: Prisma.SolicitacoesUncheckedUpdateManyWithoutDisciplinaNestedInput;
    user_materia?: Prisma.Usuario_DisciplinaUncheckedUpdateManyWithoutDisciplinaNestedInput;
};
export type DisciplinasCreateManyInput = {
    id?: number;
    nome: string;
    codigo: string;
    ativo?: boolean;
    criado_em: Date | string;
    atualizado_em: Date | string;
};
export type DisciplinasUpdateManyMutationInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DisciplinasUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DisciplinasCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    criado_em?: Prisma.SortOrder;
    atualizado_em?: Prisma.SortOrder;
};
export type DisciplinasAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type DisciplinasMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    criado_em?: Prisma.SortOrder;
    atualizado_em?: Prisma.SortOrder;
};
export type DisciplinasMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    criado_em?: Prisma.SortOrder;
    atualizado_em?: Prisma.SortOrder;
};
export type DisciplinasSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type DisciplinasScalarRelationFilter = {
    is?: Prisma.DisciplinasWhereInput;
    isNot?: Prisma.DisciplinasWhereInput;
};
export type DisciplinasCreateNestedOneWithoutSolicitacoesInput = {
    create?: Prisma.XOR<Prisma.DisciplinasCreateWithoutSolicitacoesInput, Prisma.DisciplinasUncheckedCreateWithoutSolicitacoesInput>;
    connectOrCreate?: Prisma.DisciplinasCreateOrConnectWithoutSolicitacoesInput;
    connect?: Prisma.DisciplinasWhereUniqueInput;
};
export type DisciplinasUpdateOneRequiredWithoutSolicitacoesNestedInput = {
    create?: Prisma.XOR<Prisma.DisciplinasCreateWithoutSolicitacoesInput, Prisma.DisciplinasUncheckedCreateWithoutSolicitacoesInput>;
    connectOrCreate?: Prisma.DisciplinasCreateOrConnectWithoutSolicitacoesInput;
    upsert?: Prisma.DisciplinasUpsertWithoutSolicitacoesInput;
    connect?: Prisma.DisciplinasWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DisciplinasUpdateToOneWithWhereWithoutSolicitacoesInput, Prisma.DisciplinasUpdateWithoutSolicitacoesInput>, Prisma.DisciplinasUncheckedUpdateWithoutSolicitacoesInput>;
};
export type DisciplinasCreateNestedOneWithoutUser_materiaInput = {
    create?: Prisma.XOR<Prisma.DisciplinasCreateWithoutUser_materiaInput, Prisma.DisciplinasUncheckedCreateWithoutUser_materiaInput>;
    connectOrCreate?: Prisma.DisciplinasCreateOrConnectWithoutUser_materiaInput;
    connect?: Prisma.DisciplinasWhereUniqueInput;
};
export type DisciplinasUpdateOneRequiredWithoutUser_materiaNestedInput = {
    create?: Prisma.XOR<Prisma.DisciplinasCreateWithoutUser_materiaInput, Prisma.DisciplinasUncheckedCreateWithoutUser_materiaInput>;
    connectOrCreate?: Prisma.DisciplinasCreateOrConnectWithoutUser_materiaInput;
    upsert?: Prisma.DisciplinasUpsertWithoutUser_materiaInput;
    connect?: Prisma.DisciplinasWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DisciplinasUpdateToOneWithWhereWithoutUser_materiaInput, Prisma.DisciplinasUpdateWithoutUser_materiaInput>, Prisma.DisciplinasUncheckedUpdateWithoutUser_materiaInput>;
};
export type DisciplinasCreateWithoutSolicitacoesInput = {
    nome: string;
    codigo: string;
    ativo?: boolean;
    criado_em: Date | string;
    atualizado_em: Date | string;
    user_materia?: Prisma.Usuario_DisciplinaCreateNestedManyWithoutDisciplinaInput;
};
export type DisciplinasUncheckedCreateWithoutSolicitacoesInput = {
    id?: number;
    nome: string;
    codigo: string;
    ativo?: boolean;
    criado_em: Date | string;
    atualizado_em: Date | string;
    user_materia?: Prisma.Usuario_DisciplinaUncheckedCreateNestedManyWithoutDisciplinaInput;
};
export type DisciplinasCreateOrConnectWithoutSolicitacoesInput = {
    where: Prisma.DisciplinasWhereUniqueInput;
    create: Prisma.XOR<Prisma.DisciplinasCreateWithoutSolicitacoesInput, Prisma.DisciplinasUncheckedCreateWithoutSolicitacoesInput>;
};
export type DisciplinasUpsertWithoutSolicitacoesInput = {
    update: Prisma.XOR<Prisma.DisciplinasUpdateWithoutSolicitacoesInput, Prisma.DisciplinasUncheckedUpdateWithoutSolicitacoesInput>;
    create: Prisma.XOR<Prisma.DisciplinasCreateWithoutSolicitacoesInput, Prisma.DisciplinasUncheckedCreateWithoutSolicitacoesInput>;
    where?: Prisma.DisciplinasWhereInput;
};
export type DisciplinasUpdateToOneWithWhereWithoutSolicitacoesInput = {
    where?: Prisma.DisciplinasWhereInput;
    data: Prisma.XOR<Prisma.DisciplinasUpdateWithoutSolicitacoesInput, Prisma.DisciplinasUncheckedUpdateWithoutSolicitacoesInput>;
};
export type DisciplinasUpdateWithoutSolicitacoesInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user_materia?: Prisma.Usuario_DisciplinaUpdateManyWithoutDisciplinaNestedInput;
};
export type DisciplinasUncheckedUpdateWithoutSolicitacoesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user_materia?: Prisma.Usuario_DisciplinaUncheckedUpdateManyWithoutDisciplinaNestedInput;
};
export type DisciplinasCreateWithoutUser_materiaInput = {
    nome: string;
    codigo: string;
    ativo?: boolean;
    criado_em: Date | string;
    atualizado_em: Date | string;
    solicitacoes?: Prisma.SolicitacoesCreateNestedManyWithoutDisciplinaInput;
};
export type DisciplinasUncheckedCreateWithoutUser_materiaInput = {
    id?: number;
    nome: string;
    codigo: string;
    ativo?: boolean;
    criado_em: Date | string;
    atualizado_em: Date | string;
    solicitacoes?: Prisma.SolicitacoesUncheckedCreateNestedManyWithoutDisciplinaInput;
};
export type DisciplinasCreateOrConnectWithoutUser_materiaInput = {
    where: Prisma.DisciplinasWhereUniqueInput;
    create: Prisma.XOR<Prisma.DisciplinasCreateWithoutUser_materiaInput, Prisma.DisciplinasUncheckedCreateWithoutUser_materiaInput>;
};
export type DisciplinasUpsertWithoutUser_materiaInput = {
    update: Prisma.XOR<Prisma.DisciplinasUpdateWithoutUser_materiaInput, Prisma.DisciplinasUncheckedUpdateWithoutUser_materiaInput>;
    create: Prisma.XOR<Prisma.DisciplinasCreateWithoutUser_materiaInput, Prisma.DisciplinasUncheckedCreateWithoutUser_materiaInput>;
    where?: Prisma.DisciplinasWhereInput;
};
export type DisciplinasUpdateToOneWithWhereWithoutUser_materiaInput = {
    where?: Prisma.DisciplinasWhereInput;
    data: Prisma.XOR<Prisma.DisciplinasUpdateWithoutUser_materiaInput, Prisma.DisciplinasUncheckedUpdateWithoutUser_materiaInput>;
};
export type DisciplinasUpdateWithoutUser_materiaInput = {
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    solicitacoes?: Prisma.SolicitacoesUpdateManyWithoutDisciplinaNestedInput;
};
export type DisciplinasUncheckedUpdateWithoutUser_materiaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    criado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    atualizado_em?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    solicitacoes?: Prisma.SolicitacoesUncheckedUpdateManyWithoutDisciplinaNestedInput;
};
export type DisciplinasCountOutputType = {
    solicitacoes: number;
    user_materia: number;
};
export type DisciplinasCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    solicitacoes?: boolean | DisciplinasCountOutputTypeCountSolicitacoesArgs;
    user_materia?: boolean | DisciplinasCountOutputTypeCountUser_materiaArgs;
};
export type DisciplinasCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisciplinasCountOutputTypeSelect<ExtArgs> | null;
};
export type DisciplinasCountOutputTypeCountSolicitacoesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SolicitacoesWhereInput;
};
export type DisciplinasCountOutputTypeCountUser_materiaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.Usuario_DisciplinaWhereInput;
};
export type DisciplinasSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    codigo?: boolean;
    ativo?: boolean;
    criado_em?: boolean;
    atualizado_em?: boolean;
    solicitacoes?: boolean | Prisma.Disciplinas$solicitacoesArgs<ExtArgs>;
    user_materia?: boolean | Prisma.Disciplinas$user_materiaArgs<ExtArgs>;
    _count?: boolean | Prisma.DisciplinasCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["disciplinas"]>;
export type DisciplinasSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    codigo?: boolean;
    ativo?: boolean;
    criado_em?: boolean;
    atualizado_em?: boolean;
}, ExtArgs["result"]["disciplinas"]>;
export type DisciplinasSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    codigo?: boolean;
    ativo?: boolean;
    criado_em?: boolean;
    atualizado_em?: boolean;
}, ExtArgs["result"]["disciplinas"]>;
export type DisciplinasSelectScalar = {
    id?: boolean;
    nome?: boolean;
    codigo?: boolean;
    ativo?: boolean;
    criado_em?: boolean;
    atualizado_em?: boolean;
};
export type DisciplinasOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nome" | "codigo" | "ativo" | "criado_em" | "atualizado_em", ExtArgs["result"]["disciplinas"]>;
export type DisciplinasInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    solicitacoes?: boolean | Prisma.Disciplinas$solicitacoesArgs<ExtArgs>;
    user_materia?: boolean | Prisma.Disciplinas$user_materiaArgs<ExtArgs>;
    _count?: boolean | Prisma.DisciplinasCountOutputTypeDefaultArgs<ExtArgs>;
};
export type DisciplinasIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type DisciplinasIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $DisciplinasPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Disciplinas";
    objects: {
        solicitacoes: Prisma.$SolicitacoesPayload<ExtArgs>[];
        user_materia: Prisma.$Usuario_DisciplinaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nome: string;
        codigo: string;
        ativo: boolean;
        criado_em: Date;
        atualizado_em: Date;
    }, ExtArgs["result"]["disciplinas"]>;
    composites: {};
};
export type DisciplinasGetPayload<S extends boolean | null | undefined | DisciplinasDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DisciplinasPayload, S>;
export type DisciplinasCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DisciplinasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DisciplinasCountAggregateInputType | true;
};
export interface DisciplinasDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Disciplinas'];
        meta: {
            name: 'Disciplinas';
        };
    };
    findUnique<T extends DisciplinasFindUniqueArgs>(args: Prisma.SelectSubset<T, DisciplinasFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DisciplinasClient<runtime.Types.Result.GetResult<Prisma.$DisciplinasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DisciplinasFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DisciplinasFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DisciplinasClient<runtime.Types.Result.GetResult<Prisma.$DisciplinasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DisciplinasFindFirstArgs>(args?: Prisma.SelectSubset<T, DisciplinasFindFirstArgs<ExtArgs>>): Prisma.Prisma__DisciplinasClient<runtime.Types.Result.GetResult<Prisma.$DisciplinasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DisciplinasFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DisciplinasFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DisciplinasClient<runtime.Types.Result.GetResult<Prisma.$DisciplinasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DisciplinasFindManyArgs>(args?: Prisma.SelectSubset<T, DisciplinasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DisciplinasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DisciplinasCreateArgs>(args: Prisma.SelectSubset<T, DisciplinasCreateArgs<ExtArgs>>): Prisma.Prisma__DisciplinasClient<runtime.Types.Result.GetResult<Prisma.$DisciplinasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DisciplinasCreateManyArgs>(args?: Prisma.SelectSubset<T, DisciplinasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DisciplinasCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DisciplinasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DisciplinasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DisciplinasDeleteArgs>(args: Prisma.SelectSubset<T, DisciplinasDeleteArgs<ExtArgs>>): Prisma.Prisma__DisciplinasClient<runtime.Types.Result.GetResult<Prisma.$DisciplinasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DisciplinasUpdateArgs>(args: Prisma.SelectSubset<T, DisciplinasUpdateArgs<ExtArgs>>): Prisma.Prisma__DisciplinasClient<runtime.Types.Result.GetResult<Prisma.$DisciplinasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DisciplinasDeleteManyArgs>(args?: Prisma.SelectSubset<T, DisciplinasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DisciplinasUpdateManyArgs>(args: Prisma.SelectSubset<T, DisciplinasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DisciplinasUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DisciplinasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DisciplinasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DisciplinasUpsertArgs>(args: Prisma.SelectSubset<T, DisciplinasUpsertArgs<ExtArgs>>): Prisma.Prisma__DisciplinasClient<runtime.Types.Result.GetResult<Prisma.$DisciplinasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DisciplinasCountArgs>(args?: Prisma.Subset<T, DisciplinasCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DisciplinasCountAggregateOutputType> : number>;
    aggregate<T extends DisciplinasAggregateArgs>(args: Prisma.Subset<T, DisciplinasAggregateArgs>): Prisma.PrismaPromise<GetDisciplinasAggregateType<T>>;
    groupBy<T extends DisciplinasGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DisciplinasGroupByArgs['orderBy'];
    } : {
        orderBy?: DisciplinasGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DisciplinasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisciplinasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DisciplinasFieldRefs;
}
export interface Prisma__DisciplinasClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    solicitacoes<T extends Prisma.Disciplinas$solicitacoesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Disciplinas$solicitacoesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SolicitacoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    user_materia<T extends Prisma.Disciplinas$user_materiaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Disciplinas$user_materiaArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$Usuario_DisciplinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DisciplinasFieldRefs {
    readonly id: Prisma.FieldRef<"Disciplinas", 'Int'>;
    readonly nome: Prisma.FieldRef<"Disciplinas", 'String'>;
    readonly codigo: Prisma.FieldRef<"Disciplinas", 'String'>;
    readonly ativo: Prisma.FieldRef<"Disciplinas", 'Boolean'>;
    readonly criado_em: Prisma.FieldRef<"Disciplinas", 'DateTime'>;
    readonly atualizado_em: Prisma.FieldRef<"Disciplinas", 'DateTime'>;
}
export type DisciplinasFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisciplinasSelect<ExtArgs> | null;
    omit?: Prisma.DisciplinasOmit<ExtArgs> | null;
    include?: Prisma.DisciplinasInclude<ExtArgs> | null;
    where: Prisma.DisciplinasWhereUniqueInput;
};
export type DisciplinasFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisciplinasSelect<ExtArgs> | null;
    omit?: Prisma.DisciplinasOmit<ExtArgs> | null;
    include?: Prisma.DisciplinasInclude<ExtArgs> | null;
    where: Prisma.DisciplinasWhereUniqueInput;
};
export type DisciplinasFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisciplinasSelect<ExtArgs> | null;
    omit?: Prisma.DisciplinasOmit<ExtArgs> | null;
    include?: Prisma.DisciplinasInclude<ExtArgs> | null;
    where?: Prisma.DisciplinasWhereInput;
    orderBy?: Prisma.DisciplinasOrderByWithRelationInput | Prisma.DisciplinasOrderByWithRelationInput[];
    cursor?: Prisma.DisciplinasWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DisciplinasScalarFieldEnum | Prisma.DisciplinasScalarFieldEnum[];
};
export type DisciplinasFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisciplinasSelect<ExtArgs> | null;
    omit?: Prisma.DisciplinasOmit<ExtArgs> | null;
    include?: Prisma.DisciplinasInclude<ExtArgs> | null;
    where?: Prisma.DisciplinasWhereInput;
    orderBy?: Prisma.DisciplinasOrderByWithRelationInput | Prisma.DisciplinasOrderByWithRelationInput[];
    cursor?: Prisma.DisciplinasWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DisciplinasScalarFieldEnum | Prisma.DisciplinasScalarFieldEnum[];
};
export type DisciplinasFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisciplinasSelect<ExtArgs> | null;
    omit?: Prisma.DisciplinasOmit<ExtArgs> | null;
    include?: Prisma.DisciplinasInclude<ExtArgs> | null;
    where?: Prisma.DisciplinasWhereInput;
    orderBy?: Prisma.DisciplinasOrderByWithRelationInput | Prisma.DisciplinasOrderByWithRelationInput[];
    cursor?: Prisma.DisciplinasWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DisciplinasScalarFieldEnum | Prisma.DisciplinasScalarFieldEnum[];
};
export type DisciplinasCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisciplinasSelect<ExtArgs> | null;
    omit?: Prisma.DisciplinasOmit<ExtArgs> | null;
    include?: Prisma.DisciplinasInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DisciplinasCreateInput, Prisma.DisciplinasUncheckedCreateInput>;
};
export type DisciplinasCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DisciplinasCreateManyInput | Prisma.DisciplinasCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DisciplinasCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisciplinasSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DisciplinasOmit<ExtArgs> | null;
    data: Prisma.DisciplinasCreateManyInput | Prisma.DisciplinasCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DisciplinasUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisciplinasSelect<ExtArgs> | null;
    omit?: Prisma.DisciplinasOmit<ExtArgs> | null;
    include?: Prisma.DisciplinasInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DisciplinasUpdateInput, Prisma.DisciplinasUncheckedUpdateInput>;
    where: Prisma.DisciplinasWhereUniqueInput;
};
export type DisciplinasUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DisciplinasUpdateManyMutationInput, Prisma.DisciplinasUncheckedUpdateManyInput>;
    where?: Prisma.DisciplinasWhereInput;
    limit?: number;
};
export type DisciplinasUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisciplinasSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DisciplinasOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DisciplinasUpdateManyMutationInput, Prisma.DisciplinasUncheckedUpdateManyInput>;
    where?: Prisma.DisciplinasWhereInput;
    limit?: number;
};
export type DisciplinasUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisciplinasSelect<ExtArgs> | null;
    omit?: Prisma.DisciplinasOmit<ExtArgs> | null;
    include?: Prisma.DisciplinasInclude<ExtArgs> | null;
    where: Prisma.DisciplinasWhereUniqueInput;
    create: Prisma.XOR<Prisma.DisciplinasCreateInput, Prisma.DisciplinasUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DisciplinasUpdateInput, Prisma.DisciplinasUncheckedUpdateInput>;
};
export type DisciplinasDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisciplinasSelect<ExtArgs> | null;
    omit?: Prisma.DisciplinasOmit<ExtArgs> | null;
    include?: Prisma.DisciplinasInclude<ExtArgs> | null;
    where: Prisma.DisciplinasWhereUniqueInput;
};
export type DisciplinasDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DisciplinasWhereInput;
    limit?: number;
};
export type Disciplinas$solicitacoesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Disciplinas$user_materiaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DisciplinasDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DisciplinasSelect<ExtArgs> | null;
    omit?: Prisma.DisciplinasOmit<ExtArgs> | null;
    include?: Prisma.DisciplinasInclude<ExtArgs> | null;
};
