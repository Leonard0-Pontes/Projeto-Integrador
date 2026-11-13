import { modalidadePref, statusSolicit } from "../../generated/prisma/enums";
export declare class CriarSolicitacaoDto {
    assunto: string;
    descricao?: string;
    data_preferida: string;
    horario_preferido: string;
    modalidade_preferida: modalidadePref;
    local_preferido?: string;
    status: statusSolicit;
}
