import { UsuarioService } from './usuario.service';
import { CriarUsuarioDto } from './dtos/criar-usuario.dto';
import { funcaoUsuario } from "../generated/prisma/enums";
import { AdicionarDisciplinaDto } from './dtos/adicionar-disciplina.dto';
type RequisicaoAutenticada = {
    user: {
        id: number;
        funcao: funcaoUsuario;
    };
};
export declare class UsuarioController {
    private readonly usuariosService;
    constructor(usuariosService: UsuarioService);
    criarUsuario(body: CriarUsuarioDto): Promise<{
        nome: string;
        ativo: boolean;
        criado_em: Date;
        atualizado_em: Date;
        id: number;
        email: string;
        funcao: funcaoUsuario;
        curso: string;
        periodo: import("src/generated/prisma/enums").periodos;
        is_admin: boolean;
    }>;
    buscarMeuPerfil(request: RequisicaoAutenticada): Promise<{
        nome: string;
        id: number;
        email: string;
        funcao: funcaoUsuario;
        curso: string;
        periodo: import("src/generated/prisma/enums").periodos;
    }>;
    listarMinhasDisciplinas(request: RequisicaoAutenticada): Promise<{
        nome: string;
        codigo: string;
        id: number;
    }[]>;
    adicionarDisciplina(body: AdicionarDisciplinaDto, request: RequisicaoAutenticada): Promise<{
        nome: string;
        codigo: string;
        id: number;
    }>;
    removerDisciplina(disciplinaId: number, request: RequisicaoAutenticada): Promise<{
        disciplina_id: number;
    }>;
    tornarAdmin(id: number): Promise<{
        nome: string;
        atualizado_em: Date;
        id: number;
        email: string;
        is_admin: boolean;
    }>;
    listarUsuarios(): Promise<{
        nome: string;
        ativo: boolean;
        criado_em: Date;
        atualizado_em: Date;
        id: number;
        email: string;
        funcao: funcaoUsuario;
        curso: string;
        periodo: import("src/generated/prisma/enums").periodos;
        is_admin: boolean;
    }[]>;
    buscarUsuario(email: string): Promise<{
        nome: string;
        ativo: boolean;
        criado_em: Date;
        atualizado_em: Date;
        id: number;
        email: string;
        funcao: funcaoUsuario;
        curso: string;
        periodo: import("src/generated/prisma/enums").periodos;
        is_admin: boolean;
    }>;
}
export {};
