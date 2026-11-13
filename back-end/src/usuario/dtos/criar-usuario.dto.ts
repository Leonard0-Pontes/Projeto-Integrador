import { IsString, IsNotEmpty, IsEmail, MaxLength, MinLength, IsEnum } from "class-validator";
import { funcaoUsuario } from "src/generated/prisma/enums";
import { periodos } from "src/generated/prisma/enums";

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

    @IsEnum(funcaoUsuario)
    @IsNotEmpty()
    funcao!: funcaoUsuario;

    @IsString()
    @IsNotEmpty()
    curso!: string;

    @IsEnum(periodos)
    @IsNotEmpty()
    periodo!: periodos;
}