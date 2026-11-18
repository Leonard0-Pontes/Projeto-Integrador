import { IsString, IsMilitaryTime, IsDateString, IsNotEmpty, IsOptional, IsIn, MaxLength, IsUrl, IsEnum } from "class-validator";
import { modalidadePref, statusMonitor } from "src/generated/prisma/enums";

export class CriarMonitoriaDto {
    @IsDateString()
    @IsNotEmpty()
    @MaxLength(10)
    data!: string

    @IsString()
    @IsOptional()
    @IsMilitaryTime()
    horario_inicio!: string

    @IsString()
    @IsOptional()
    @IsMilitaryTime()
    horario_fim!: string

    @IsEnum(modalidadePref)
    @IsNotEmpty()
    modalidade!: modalidadePref

    @IsUrl()
    @IsOptional()
    link?: string;

    @IsEnum(statusMonitor)
    @IsNotEmpty()
    status!: statusMonitor

    @IsString()
    @IsOptional()
    @MaxLength(300)
    justificativa?: string
}