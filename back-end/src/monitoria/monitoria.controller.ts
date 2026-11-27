import { Delete, Body, Controller, Get, Patch, Param, ParseIntPipe, Post, Req, UseGuards } from '@nestjs/common';
import { funcaoUsuario } from 'src/generated/prisma/enums';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { CancelarMonitoriaDto } from './dtos/cancelar-monitoria.dto';
import { CriarMonitoriaDto } from './dtos/criar-monitoria.dto';
import { MonitoriaService } from './monitoria.service';
import type { RequisicaoAutenticada } from 'src/auth/types/requisicao-autenticada.type';

@Controller('monitorias')
export class MonitoriaController {
    constructor(private readonly monitoriaService: MonitoriaService) { }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(funcaoUsuario.Monitor)
    @Post()
    criar(@Body() body: CriarMonitoriaDto, @Req() request: RequisicaoAutenticada) {
        return this.monitoriaService.criar(body, request.user.id);
    }

    @Post(':id/participantes')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(funcaoUsuario.Aluno, funcaoUsuario.Monitor)
    entrarNaMonitoria(@Param('id', ParseIntPipe) id: number, @Req() request: RequisicaoAutenticada) {
        return this.monitoriaService.entrarNaMonitoria(id, request.user.id);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(funcaoUsuario.Aluno, funcaoUsuario.Monitor)
    @Get()
    listar(@Req() request: RequisicaoAutenticada) {
        return this.monitoriaService.listar(request.user.id, request.user.funcao);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(funcaoUsuario.Aluno, funcaoUsuario.Monitor)
    @Get('disponiveis')
    listarDisponiveis(@Req() request: RequisicaoAutenticada) {
        return this.monitoriaService.listarDisponiveis(request.user.id);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(funcaoUsuario.Aluno, funcaoUsuario.Monitor)
    @Get(':id')
    buscarPorId(@Param('id', ParseIntPipe) id: number, @Req() request: RequisicaoAutenticada) {
        return this.monitoriaService.buscarPorId(id, request.user.id, request.user.funcao);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(funcaoUsuario.Monitor)
    @Patch(':id/concluir')
    concluir(@Param('id', ParseIntPipe) id: number, @Req() request: RequisicaoAutenticada) {
        return this.monitoriaService.concluir(id, request.user.id);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(funcaoUsuario.Monitor)
    @Patch(':id/cancelar')
    cancelar(@Param('id', ParseIntPipe) id: number, @Body() body: CancelarMonitoriaDto, @Req() request: RequisicaoAutenticada) {
        return this.monitoriaService.cancelar(id, request.user.id, request.user.funcao, body.justificativa);
    }

    @Delete(':id/participantes')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(funcaoUsuario.Aluno, funcaoUsuario.Monitor)
    sairDaMonitoria(@Param('id', ParseIntPipe) id: number, @Req() request: RequisicaoAutenticada) {
        return this.monitoriaService.sairDaMonitoria(id, request.user.id);
    }
}
