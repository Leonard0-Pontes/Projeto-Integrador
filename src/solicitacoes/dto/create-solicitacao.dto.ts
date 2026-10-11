export class CreateSolicitacaoDto {
    aluno_id!: number;
    disciplina_id!: number;
    assunto!: string;
    descricao?: string;
    data_preferida!: string;
    horario_preferido!: string;
    modalidade?: string;
    local_monitoria?: string;
    status!: string;
}