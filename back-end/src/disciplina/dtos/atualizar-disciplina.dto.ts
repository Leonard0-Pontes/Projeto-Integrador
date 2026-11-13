import { IsString, IsOptional, MaxLength } from "class-validator";

export class CriarDisciplinaDto {
    @IsString()
    @IsOptional()
    @MaxLength(100)
    nome?: string

    @IsString()
    @IsOptional()
    @MaxLength(50)
    codigo?: string
}