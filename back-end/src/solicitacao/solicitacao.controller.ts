import { Controller, Get, Param, ParseIntPipe, UseGuards, Post, Body, Req } from '@nestjs/common';
import { SolicitacaoService } from './solicitacao.service';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { CriarSolicitacaoDto } from './dtos/criar-solicitacao.dto';
import { funcaoUsuario } from 'src/generated/prisma/enums';

type RequisicaoAutenticada = {
    user: {
        id: number;
        funcao: funcaoUsuario;
    };
};

@Controller('solicitacoes')
export class SolicitacaoController {
    constructor(private readonly solicitacoesService: SolicitacaoService) { }
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(funcaoUsuario.Aluno, funcaoUsuario.Monitor)
    @Post()
    criar(@Body() body: CriarSolicitacaoDto, @Req() request: RequisicaoAutenticada) {
        return this.solicitacoesService.criar(body, request.user.id);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(funcaoUsuario.Aluno, funcaoUsuario.Monitor)
    @Get()
    listar(@Req() request: RequisicaoAutenticada) {
        return this.solicitacoesService.listar(request.user.id, request.user.funcao);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(funcaoUsuario.Aluno, funcaoUsuario.Monitor)
    @Get(':id')
    buscarPorId(@Param('id', ParseIntPipe) id: number, @Req() request: RequisicaoAutenticada) {
        return this.solicitacoesService.buscarPorId(id, request.user.id, request.user.funcao);
    }
}