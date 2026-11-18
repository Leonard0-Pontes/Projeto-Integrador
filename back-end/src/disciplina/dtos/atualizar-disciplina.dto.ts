import { IsString, IsOptional, MaxLength } from "class-validator";

export class AtualizarDisciplinaDto {
    @IsString()
    @IsOptional()
    @MaxLength(100)
    nome?: string

    @IsString()
    @IsOptional()
    @MaxLength(50)
    codigo?: string
}