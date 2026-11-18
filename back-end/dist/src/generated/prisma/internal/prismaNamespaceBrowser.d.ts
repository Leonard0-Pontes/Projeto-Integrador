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
    readonly Usuario: "Usuario";
    readonly Disciplinas: "Disciplinas";
    readonly Solicitacoes: "Solicitacoes";
    readonly Monitoria: "Monitoria";
    readonly Usuario_Disciplina: "Usuario_Disciplina";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UsuarioScalarFieldEnum: {
    readonly id: "id";
    readonly nome: "nome";
    readonly email: "email";
    readonly senha_hash: "senha_hash";
    readonly funcao: "funcao";
    readonly curso: "curso";
    readonly periodo: "periodo";
    readonly is_admin: "is_admin";
    readonly ativo: "ativo";
    readonly criado_em: "criado_em";
    readonly atualizado_em: "atualizado_em";
};
export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum];
export declare const DisciplinasScalarFieldEnum: {
    readonly id: "id";
    readonly nome: "nome";
    readonly codigo: "codigo";
    readonly ativo: "ativo";
    readonly criado_em: "criado_em";
    readonly atualizado_em: "atualizado_em";
};
export type DisciplinasScalarFieldEnum = (typeof DisciplinasScalarFieldEnum)[keyof typeof DisciplinasScalarFieldEnum];
export declare const SolicitacoesScalarFieldEnum: {
    readonly id: "id";
    readonly aluno_id: "aluno_id";
    readonly disciplina_id: "disciplina_id";
    readonly assunto: "assunto";
    readonly descricao: "descricao";
    readonly preferencia_data: "preferencia_data";
    readonly preferencia_horario: "preferencia_horario";
    readonly preferencia_modal: "preferencia_modal";
    readonly preferencia_local: "preferencia_local";
    readonly status: "status";
    readonly criado_em: "criado_em";
    readonly atualizado_em: "atualizado_em";
};
export type SolicitacoesScalarFieldEnum = (typeof SolicitacoesScalarFieldEnum)[keyof typeof SolicitacoesScalarFieldEnum];
export declare const MonitoriaScalarFieldEnum: {
    readonly id: "id";
    readonly solicitacao_id: "solicitacao_id";
    readonly monitor_id: "monitor_id";
    readonly data: "data";
    readonly horario_inicio: "horario_inicio";
    readonly horario_fim: "horario_fim";
    readonly modalidade: "modalidade";
    readonly local: "local";
    readonly link: "link";
    readonly status: "status";
    readonly justificativa_cancel: "justificativa_cancel";
    readonly criado_em: "criado_em";
    readonly atualizado_em: "atualizado_em";
};
export type MonitoriaScalarFieldEnum = (typeof MonitoriaScalarFieldEnum)[keyof typeof MonitoriaScalarFieldEnum];
export declare const Usuario_DisciplinaScalarFieldEnum: {
    readonly id: "id";
    readonly usuario_id: "usuario_id";
    readonly disciplina_id: "disciplina_id";
    readonly funcao: "funcao";
    readonly criado_em: "criado_em";
};
export type Usuario_DisciplinaScalarFieldEnum = (typeof Usuario_DisciplinaScalarFieldEnum)[keyof typeof Usuario_DisciplinaScalarFieldEnum];
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
