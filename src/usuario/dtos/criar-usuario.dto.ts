import { IsString, IsNotEmpty, IsOptional, IsEmail, IsInt, IsDateString, MaxLength, MinLength, IsIn } from "class-validator";

export class CriarUsuarioDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(100)
    nome!: string;

    @IsEmail()
    @IsNotEmpty()
    email!: string;

    @IsString()
    @IsNotEmpty()
    senha!: string;

    @IsIn(['aluno', 'monitor', 'professor', 'admin'])
    @IsNotEmpty()
    funcao!: string;

    @IsString()
    @IsOptional()
    curso?: string;

    @IsInt()
    @IsOptional()
    periodo?: number;
}