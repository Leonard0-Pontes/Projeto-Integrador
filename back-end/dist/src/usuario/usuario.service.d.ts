import { CriarUsuarioDto } from './dtos/criar-usuario.dto';
import { PrismaService } from "../prisma/prisma.service";
import { UsuarioModel } from "../generated/prisma/models";
export type UsuarioAutenticado = Omit<UsuarioModel, 'senha_hash'>;
export type UsuarioJwt = Pick<UsuarioModel, 'id' | 'nome' | 'email' | 'funcao' | 'curso' | 'periodo'>;
export declare class UsuarioService {
    private prisma;
    constructor(prisma: PrismaService);
    listarUsuarios(): Promise<{
        nome: string;
        ativo: boolean;
        criado_em: Date;
        atualizado_em: Date;
        id: number;
        email: string;
        funcao: import("src/generated/prisma/client").funcaoUsuario;
        curso: string;
        periodo: import("src/generated/prisma/client").periodos;
        is_admin: boolean;
    }[]>;
    buscarUsuarioLogin(email: string): Promise<{
        nome: string;
        ativo: boolean;
        criado_em: Date;
        atualizado_em: Date;
        id: number;
        email: string;
        senha_hash: string;
        funcao: import("src/generated/prisma/client").funcaoUsuario;
        curso: string;
        periodo: import("src/generated/prisma/client").periodos;
        is_admin: boolean;
    } | null>;
    buscarUsuario(email: string): Promise<{
        nome: string;
        ativo: boolean;
        criado_em: Date;
        atualizado_em: Date;
        id: number;
        email: string;
        funcao: import("src/generated/prisma/client").funcaoUsuario;
        curso: string;
        periodo: import("src/generated/prisma/client").periodos;
        is_admin: boolean;
    }>;
    criarNovoUsuario(dados: CriarUsuarioDto): Promise<{
        nome: string;
        ativo: boolean;
        criado_em: Date;
        atualizado_em: Date;
        id: number;
        email: string;
        funcao: import("src/generated/prisma/client").funcaoUsuario;
        curso: string;
        periodo: import("src/generated/prisma/client").periodos;
        is_admin: boolean;
    }>;
    tornarAdmin(id: number): Promise<{
        nome: string;
        atualizado_em: Date;
        id: number;
        email: string;
        is_admin: boolean;
    }>;
}
