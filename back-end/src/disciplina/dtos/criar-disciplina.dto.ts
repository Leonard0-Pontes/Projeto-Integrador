import { IsString, IsDateString, IsNotEmpty, MaxLength } from "class-validator";

export class CriarDisciplinaDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    nome!: string
}