import { funcaoUsuario } from "../../generated/prisma/enums";
import { periodos } from "../../generated/prisma/enums";
export declare class CriarUsuarioDto {
    nome: string;
    email: string;
    senha: string;
    funcao: funcaoUsuario;
    curso: string;
    periodo: periodos;
}
