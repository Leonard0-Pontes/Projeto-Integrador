import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
declare const LocalStrategy_base: new (...args: [] | [options: import("passport-local").IStrategyOptionsWithRequest] | [options: import("passport-local").IStrategyOptions]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class LocalStrategy extends LocalStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(email: string, senha: string): Promise<{
        nome: string;
        email: string;
        funcao: import("../../generated/prisma/enums").funcaoUsuario;
        curso: string;
        periodo: import("../../generated/prisma/enums").periodos;
        id: number;
        is_admin: boolean;
        ativo: boolean;
        criado_em: Date;
        atualizado_em: Date;
    }>;
}
export {};
