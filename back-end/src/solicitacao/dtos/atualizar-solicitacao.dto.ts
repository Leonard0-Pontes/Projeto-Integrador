import { Transform } from "class-transformer";
import { IsString, IsMilitaryTime, IsDateString, IsOptional, MaxLength, IsEnum } from "class-validator";
import { modalidadePref, statusSolicit } from "src/generated/prisma/enums";

export class AtualizarSolicitacaoDto {
    @IsString()
    @IsOptional()
    @MaxLength(100)
    assunto?: string;

    @IsString()
    @IsOptional()
    @MaxLength(500)
    descricao?: string

    @IsDateString()
    @IsOptional()
    @MaxLength(10)
    data_preferida?: string

    @IsString()
    @IsOptional()
    @IsMilitaryTime()
    horario_preferido?: string

    @IsEnum(modalidadePref)
    @IsOptional()
    modalidade_preferida?: modalidadePref

    @IsString()
    @IsOptional()
    @MaxLength(100)
    local_preferido?: string

    @IsEnum(statusSolicit)
    @IsOptional()
    @Transform(({ value }) => value || 'Pendente')
    status?: statusSolicit = 'Pendente'
}