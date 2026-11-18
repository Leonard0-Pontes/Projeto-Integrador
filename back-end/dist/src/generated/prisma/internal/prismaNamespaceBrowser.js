"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.Usuario_DisciplinaScalarFieldEnum = exports.MonitoriaScalarFieldEnum = exports.SolicitacoesScalarFieldEnum = exports.DisciplinasScalarFieldEnum = exports.UsuarioScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    Usuario: 'Usuario',
    Disciplinas: 'Disciplinas',
    Solicitacoes: 'Solicitacoes',
    Monitoria: 'Monitoria',
    Usuario_Disciplina: 'Usuario_Disciplina'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UsuarioScalarFieldEnum = {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha_hash: 'senha_hash',
    funcao: 'funcao',
    curso: 'curso',
    periodo: 'periodo',
    is_admin: 'is_admin',
    ativo: 'ativo',
    criado_em: 'criado_em',
    atualizado_em: 'atualizado_em'
};
exports.DisciplinasScalarFieldEnum = {
    id: 'id',
    nome: 'nome',
    codigo: 'codigo',
    ativo: 'ativo',
    criado_em: 'criado_em',
    atualizado_em: 'atualizado_em'
};
exports.SolicitacoesScalarFieldEnum = {
    id: 'id',
    aluno_id: 'aluno_id',
    disciplina_id: 'disciplina_id',
    assunto: 'assunto',
    descricao: 'descricao',
    preferencia_data: 'preferencia_data',
    preferencia_horario: 'preferencia_horario',
    preferencia_modal: 'preferencia_modal',
    preferencia_local: 'preferencia_local',
    status: 'status',
    criado_em: 'criado_em',
    atualizado_em: 'atualizado_em'
};
exports.MonitoriaScalarFieldEnum = {
    id: 'id',
    solicitacao_id: 'solicitacao_id',
    monitor_id: 'monitor_id',
    data: 'data',
    horario_inicio: 'horario_inicio',
    horario_fim: 'horario_fim',
    modalidade: 'modalidade',
    local: 'local',
    link: 'link',
    status: 'status',
    justificativa_cancel: 'justificativa_cancel',
    criado_em: 'criado_em',
    atualizado_em: 'atualizado_em'
};
exports.Usuario_DisciplinaScalarFieldEnum = {
    id: 'id',
    usuario_id: 'usuario_id',
    disciplina_id: 'disciplina_id',
    funcao: 'funcao',
    criado_em: 'criado_em'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map