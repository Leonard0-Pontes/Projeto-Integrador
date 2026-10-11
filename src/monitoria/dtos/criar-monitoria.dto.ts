import { IsString, IsMilitaryTime, IsDateString, IsNotEmpty, IsOptional, IsIn, MaxLength, IsUrl } from "class-validator";

export class CriarSolicitacaoDto {
    @IsDateString()
    @IsOptional()
    @MaxLength(10)
    data!: string

    @IsString()
    @IsOptional()
    @IsMilitaryTime()
    horario!: string

    @IsIn(['presencial', 'online'])
    @IsNotEmpty()
    modalidade!: string

    @IsUrl()
    @IsOptional()
    link?: string;

    @IsIn(['pendente, aceita, concluida, cancelada'])
    @IsNotEmpty()
    status!: string

    @IsString()
    @IsOptional()
    justificativa?: string
}