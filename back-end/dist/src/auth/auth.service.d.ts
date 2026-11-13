import { JwtService } from '@nestjs/jwt';
import { UsuarioAutenticado, UsuarioService } from '../usuario/usuario.service';
export declare class AuthService {
    private readonly usuarioService;
    private readonly jwtService;
    constructor(usuarioService: UsuarioService, jwtService: JwtService);
    validarUsuario(email: string, senha: string): Promise<{
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
    } | null>;
    login(usuario: UsuarioAutenticado): {
        accessToken: string;
    };
}
