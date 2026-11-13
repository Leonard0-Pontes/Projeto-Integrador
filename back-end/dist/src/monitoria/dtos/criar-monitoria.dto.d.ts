import { modalidadePref, statusMonitor } from "../../generated/prisma/enums";
export declare class CriarMonitoriaDto {
    data: string;
    horario_inicio: string;
    horario_fim: string;
    modalidade: modalidadePref;
    link?: string;
    status: statusMonitor;
    justificativa?: string;
}
