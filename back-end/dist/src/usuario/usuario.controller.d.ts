import { UsuarioService } from './usuario.service';
import { CriarUsuarioDto } from './dtos/criar-usuario.dto';
export declare class UsuarioController {
    private readonly usuariosService;
    constructor(usuariosService: UsuarioService);
    criar(body: CriarUsuarioDto): Promise<{
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
