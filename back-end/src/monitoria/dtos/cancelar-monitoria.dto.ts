import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CancelarMonitoriaDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(300)
    justificativa!: string;
}
