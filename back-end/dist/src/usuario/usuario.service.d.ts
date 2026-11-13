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
        email: string;
        funcao: import("../generated/prisma/enums").funcaoUsuario;
        curso: string;
        periodo: import("../generated/prisma/enums").periodos;
        id: number;
        senha_hash: string;
        is_admin: boolean;
        ativo: boolean;
        criado_em: Date;
        atualizado_em: Date;
    }[]>;
    buscarUsuario(email: string): Promise<{
        nome: string;
        email: string;
        funcao: import("../generated/prisma/enums").funcaoUsuario;
        curso: string;
        periodo: import("../generated/prisma/enums").periodos;
        id: number;
        senha_hash: string;
        is_admin: boolean;
        ativo: boolean;
        criado_em: Date;
        atualizado_em: Date;
    } | null>;
    criarNovoUsuario(dados: CriarUsuarioDto): Promise<{
        nome: string;
        email: string;
        funcao: import("../generated/prisma/enums").funcaoUsuario;
        curso: string;
        periodo: import("../generated/prisma/enums").periodos;
        id: number;
        is_admin: boolean;
        ativo: boolean;
        criado_em: Date;
        atualizado_em: Date;
    }>;
}
