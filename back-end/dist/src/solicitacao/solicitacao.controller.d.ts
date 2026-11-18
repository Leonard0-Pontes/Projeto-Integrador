import { SolicitacaoService } from './solicitacao.service';
import { CriarSolicitacaoDto } from './dtos/criar-solicitacao.dto';
import { funcaoUsuario } from "../generated/prisma/enums";
type RequisicaoAutenticada = {
    user: {
        id: number;
        funcao: funcaoUsuario;
    };
};
export declare class SolicitacaoController {
    private readonly solicitacoesService;
    constructor(solicitacoesService: SolicitacaoService);
    criar(body: CriarSolicitacaoDto, request: RequisicaoAutenticada): Promise<{
        criado_em: Date;
        atualizado_em: Date;
        id: number;
        disciplina_id: number;
        assunto: string;
        descricao: string | null;
        preferencia_data: Date;
        preferencia_horario: Date;
        preferencia_modal: import("src/generated/prisma/enums").modalidadePref;
        preferencia_local: string | null;
        status: import("src/generated/prisma/enums").statusSolicit;
        aluno_id: number;
    }>;
    listar(request: RequisicaoAutenticada): Promise<({
        disciplina: {
            nome: string;
            codigo: string;
            id: number;
        };
        aluno: {
            nome: string;
            id: number;
            email: string;
        };
    } & {
        criado_em: Date;
        atualizado_em: Date;
        id: number;
        disciplina_id: number;
        assunto: string;
        descricao: string | null;
        preferencia_data: Date;
        preferencia_horario: Date;
        preferencia_modal: import("src/generated/prisma/enums").modalidadePref;
        preferencia_local: string | null;
        status: import("src/generated/prisma/enums").statusSolicit;
        aluno_id: number;
    })[]>;
    buscarPorId(id: number, request: RequisicaoAutenticada): Promise<{
        disciplina: {
            nome: string;
            codigo: string;
            id: number;
        };
        aluno: {
            nome: string;
            id: number;
            email: string;
        };
    } & {
        criado_em: Date;
        atualizado_em: Date;
        id: number;
        disciplina_id: number;
        assunto: string;
        descricao: string | null;
        preferencia_data: Date;
        preferencia_horario: Date;
        preferencia_modal: import("src/generated/prisma/enums").modalidadePref;
        preferencia_local: string | null;
        status: import("src/generated/prisma/enums").statusSolicit;
        aluno_id: number;
    }>;
}
export {};
