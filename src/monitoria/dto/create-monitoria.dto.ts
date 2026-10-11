export class CreateMonitoriaDto {
    solicitacao_id: number;
    monitor_id: number;
    laboratorio_id?: number;
    data: string; // YYYY-MM-DD
    horario: string; // HH:mm:ss
    modalidade?: string;
    link?: string;
    status: string;
    justificativa?: string;
}