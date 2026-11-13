import { IsString, IsMilitaryTime, IsDateString, IsOptional, MaxLength, IsUrl, IsEnum } from "class-validator";
import { modalidadePref, statusMonitor } from "src/generated/prisma/enums";

export class AtualizarMonitoriaDto {
    @IsDateString()
    @IsOptional()
    @MaxLength(10)
    data?: string

    @IsString()
    @IsOptional()
    @IsMilitaryTime()
    horario_inicio?: string

    @IsString()
    @IsOptional()
    @IsMilitaryTime()
    horario_fim?: string

    @IsEnum(modalidadePref)
    @IsOptional()
    modalidade?: modalidadePref

    @IsUrl()
    @IsOptional()
    link?: string;

    @IsEnum(statusMonitor)
    @IsOptional()
    status?: statusMonitor

    @IsString()
    @IsOptional()
    @MaxLength(300)
    justificativa?: string
}