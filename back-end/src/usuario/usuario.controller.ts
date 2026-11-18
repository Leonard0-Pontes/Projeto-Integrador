import { Controller, Body, Post, UseGuards, Patch, Param, ParseIntPipe, Get, Req, Delete } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CriarUsuarioDto } from './dtos/criar-usuario.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { AdminGuard } from 'src/auth/guards/admin.guard';
import { funcaoUsuario } from 'src/generated/prisma/enums';
import { AdicionarDisciplinaDto } from './dtos/adicionar-disciplina.dto';

type RequisicaoAutenticada = {
    user: {
        id: number;
        funcao: funcaoUsuario;
    };
};

@Controller('usuario')
export class UsuarioController {
    constructor(private readonly usuariosService: UsuarioService) {}
    @Post()
    criarUsuario(@Body() body: CriarUsuarioDto) {
        return this.usuariosService.criarNovoUsuario(body);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(funcaoUsuario.Aluno, funcaoUsuario.Monitor)
    @Get('me')
    buscarMeuPerfil(@Req() request: RequisicaoAutenticada) {
        return this.usuariosService.buscarMeuPerfil(request.user.id);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(funcaoUsuario.Aluno, funcaoUsuario.Monitor)
    @Get('me/disciplinas')
    listarMinhasDisciplinas(@Req() request: RequisicaoAutenticada) {
        return this.usuariosService.listarDisciplinas(
            request.user.id,
            request.user.funcao,
        );
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(funcaoUsuario.Aluno, funcaoUsuario.Monitor)
    @Post('me/disciplinas')
    adicionarDisciplina(
        @Body() body: AdicionarDisciplinaDto,
        @Req() request: RequisicaoAutenticada,
    ) {
        return this.usuariosService.adicionarDisciplina(
            request.user.id,
            request.user.funcao,
            body.disciplina_id,
        );
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(funcaoUsuario.Aluno, funcaoUsuario.Monitor)
    @Delete('me/disciplinas/:disciplinaId')
    removerDisciplina(
        @Param('disciplinaId', ParseIntPipe) disciplinaId: number,
        @Req() request: RequisicaoAutenticada,
    ) {
        return this.usuariosService.removerDisciplina(
            request.user.id,
            request.user.funcao,
            disciplinaId,
        );
    }

    @UseGuards(JwtAuthGuard, AdminGuard)
    @Patch(':id/admin')
    tornarAdmin(@Param('id', ParseIntPipe) id: number) {
        return this.usuariosService.tornarAdmin(id)
    }

    @UseGuards(JwtAuthGuard, AdminGuard)
    @Get()
    listarUsuarios() {
        return this.usuariosService.listarUsuarios()
    }

    @UseGuards(JwtAuthGuard, AdminGuard)
    @Get(':email')
    buscarUsuario(@Param('email') email: string) {
        return this.usuariosService.buscarUsuario(email)
    }
}
