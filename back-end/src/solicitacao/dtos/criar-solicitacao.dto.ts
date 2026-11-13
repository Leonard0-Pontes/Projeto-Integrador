import { IsString, IsMilitaryTime, IsDateString, IsNotEmpty, IsOptional, MaxLength, IsEnum } from "class-validator";
import { modalidadePref, statusSolicit } from "src/generated/prisma/enums";

export class CriarSolicitacaoDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    assunto!: string;

    @IsString()
    @IsOptional()
    @MaxLength(500)
    descricao?: string

    @IsDateString()
    @IsNotEmpty()
    @MaxLength(10)
    data_preferida!: string

    @IsString()
    @IsNotEmpty()
    @IsMilitaryTime()
    horario_preferido!: string

    @IsEnum(modalidadePref)
    @IsNotEmpty()
    modalidade_preferida!: modalidadePref

    @IsString()
    @IsOptional()
    @MaxLength(100)
    local_preferido?: string

    @IsEnum(statusSolicit)
    @IsNotEmpty()
    status!: statusSolicit
}