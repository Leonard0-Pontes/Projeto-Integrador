import { Strategy } from 'passport-jwt';
import { UsuarioJwt } from "../../usuario/usuario.service";
type JwtPayload = {
    sub: UsuarioJwt['id'];
    nome: UsuarioJwt['nome'];
    email: UsuarioJwt['email'];
    funcao: UsuarioJwt['funcao'];
    curso: UsuarioJwt['curso'];
    periodo: UsuarioJwt['periodo'];
};
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: JwtPayload): {
        id: number;
        nome: string;
        email: string;
        funcao: import("../../generated/prisma/enums").funcaoUsuario;
        curso: string;
        periodo: import("../../generated/prisma/enums").periodos;
    };
}
export {};
