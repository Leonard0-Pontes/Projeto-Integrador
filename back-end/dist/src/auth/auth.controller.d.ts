import { UsuarioAutenticado, UsuarioJwt } from '../usuario/usuario.service';
import { AuthService } from './auth.service';
type RequisicaoLogin = {
    user: UsuarioAutenticado;
};
type RequisicaoJwt = {
    user: UsuarioJwt;
};
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(request: RequisicaoLogin): {
        accessToken: string;
    };
    perfil(request: RequisicaoJwt): UsuarioJwt;
}
export {};
