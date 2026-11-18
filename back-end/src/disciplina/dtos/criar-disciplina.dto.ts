import { IsString, IsNotEmpty, MaxLength } from "class-validator";

export class CriarDisciplinaDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    nome!: string

    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    codigo!: string
}