import { IsString, IsMilitaryTime, IsDateString, IsNotEmpty, IsOptional, IsIn, MaxLength } from "class-validator";

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
    @IsOptional()
    @MaxLength(10)
    data_preferida!: string

    @IsString()
    @IsOptional()
    @IsMilitaryTime()
    horario_preferido!: string

    @IsIn(['presencial', 'online'])
    @IsOptional()
    modalidade_preferida?: string

    @IsIn(['pendente, aceita, concluida'])
    @IsNotEmpty()
    status!: string
}