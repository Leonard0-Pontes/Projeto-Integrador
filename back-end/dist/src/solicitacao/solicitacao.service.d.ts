import { CriarSolicitacaoDto } from './dtos/criar-solicitacao.dto';
import { PrismaService } from "../prisma/prisma.service";
export declare class SolicitacaoService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    criar(dados: CriarSolicitacaoDto, userId: number): Promise<{
        criado_em: Date;
        atualizado_em: Date;
        id: number;
        disciplina_id: number;
        assunto: string;
        descricao: string | null;
        preferencia_data: Date;
        preferencia_horario: Date;
        preferencia_modal: import("src/generated/prisma/client").modalidadePref;
        preferencia_local: string | null;
        status: import("src/generated/prisma/client").statusSolicit;
        aluno_id: number;
    }>;
    listar(userId: number): Promise<({
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
        preferencia_modal: import("src/generated/prisma/client").modalidadePref;
        preferencia_local: string | null;
        status: import("src/generated/prisma/client").statusSolicit;
        aluno_id: number;
    })[]>;
    buscarPorId(id: number, userId: number): Promise<{
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
        preferencia_modal: import("src/generated/prisma/client").modalidadePref;
        preferencia_local: string | null;
        status: import("src/generated/prisma/client").statusSolicit;
        aluno_id: number;
    }>;
}
