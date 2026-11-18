import { funcaoUsuario } from "../../generated/prisma/enums";
export declare const ROLES_KEY = "roles";
export declare const Roles: (...roles: funcaoUsuario[]) => import("@nestjs/common").CustomDecorator<string>;
