import { IsString, IsMilitaryTime, IsDateString, IsNotEmpty, IsOptional, MaxLength, IsEnum, IsInt, Min } from "class-validator";
import { Type } from "class-transformer";
import { modalidadePref } from "src/generated/prisma/enums";

export class CriarSolicitacaoDto {
    @Type(() => Number)
    @IsInt()
    @Min(1)
    disciplina_id!: number;

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
}