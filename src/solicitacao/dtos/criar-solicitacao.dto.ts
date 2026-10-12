import { IsString, IsMilitaryTime, IsDateString, IsNotEmpty, IsOptional, IsIn, MaxLength } from "class-validator";

export type StatusSolicitacao = 'pendente' | 'aceita' | 'concluida';

export class CriarSolicitacaoDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    assunto!: string;

    @IsString()
    @IsOptional()
    @MaxLength(300)
    descricao?: string

    @IsDateString()
    @MaxLength(10)
    data_preferida!: string

    @IsString()
    @IsMilitaryTime()
    horario_preferido!: string

    @IsIn(['presencial', 'online'])
    @IsOptional()
    modalidade_preferida?: string

    @IsIn(['pendente', 'aceita', 'concluida'])
    @IsNotEmpty()
    status!: StatusSolicitacao
}