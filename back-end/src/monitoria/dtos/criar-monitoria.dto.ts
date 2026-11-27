import { IsIn, IsString, IsMilitaryTime, IsNotEmpty, IsOptional, MaxLength, IsUrl, IsInt, Min, IsDateString } from "class-validator";
import { Type } from "class-transformer";
import { modalidadePref } from "src/generated/prisma/enums";

export class CriarMonitoriaDto {
    @Type(() => Number)
    @IsInt()
    @Min(1)
    solicitacao_id!: number;

    @IsDateString()
    @IsNotEmpty()
    @MaxLength(10)
    data!: string

    @IsString()
    @IsNotEmpty()
    @IsMilitaryTime()
    horario_inicio!: string;

    @IsString()
    @IsNotEmpty()
    @IsMilitaryTime()
    horario_fim!: string;

    @IsIn([modalidadePref.Presencial, modalidadePref.Online])
    @IsNotEmpty()
    modalidade!: modalidadePref;

    @IsString()
    @IsOptional()
    @MaxLength(250)
    local?: string;

    @IsUrl()
    @IsOptional()
    link?: string;
}