import { UsuarioService } from './usuario.service';
import { CriarUsuarioDto } from './dtos/criar-usuario.dto';
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
        funcao: import("../generated/prisma/enums").funcaoUsuario;
        curso: string;
        periodo: import("../generated/prisma/enums").periodos;
        is_admin: boolean;
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
        funcao: import("../generated/prisma/enums").funcaoUsuario;
        curso: string;
        periodo: import("../generated/prisma/enums").periodos;
        is_admin: boolean;
    }[]>;
    buscarUsuario(email: string): Promise<{
        nome: string;
        ativo: boolean;
        criado_em: Date;
        atualizado_em: Date;
        id: number;
        email: string;
        funcao: import("../generated/prisma/enums").funcaoUsuario;
        curso: string;
        periodo: import("../generated/prisma/enums").periodos;
        is_admin: boolean;
    }>;
}
