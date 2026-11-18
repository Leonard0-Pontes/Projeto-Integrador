import { IsString, IsOptional, IsEmail, MaxLength, MinLength, IsEnum, IsBoolean } from "class-validator";
import { funcaoUsuario } from "src/generated/prisma/enums";
import { periodos } from "src/generated/prisma/enums";

export class AtualizarUsuarioDto {
    @IsString()
    @IsOptional()
    @MinLength(3)
    @MaxLength(100)
    nome?: string;

    @IsEmail()
    @IsOptional()
    @MaxLength(100)
    email?: string;

    @IsString()
    @IsOptional()
    senha?: string;

    @IsEnum(funcaoUsuario)
    @IsOptional()
    funcao?: funcaoUsuario;

    @IsString()
    @IsOptional()
    curso?: string;

    @IsEnum(periodos)
    @IsOptional()
    periodo?: periodos;

    @IsBoolean()
    @IsOptional()
    isAdmin?: boolean
}