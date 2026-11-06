import { Controller, Get, Param, ParseIntPipe, UseGuards, Patch, Post, Body } from '@nestjs/common';
import { SolicitacaoService } from './solicitacao.service';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { CriarSolicitacaoDto } from './dtos/criar-solicitacao.dto';

@Controller('solicitacoes')
export class SolicitacaoController {
    constructor(private readonly solicitacoesService: SolicitacaoService) { }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('aluno', 'monitor')
    @Post()
    criar(@Body() body: CriarSolicitacaoDto) {
        return this.solicitacoesService.criar(body);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('aluno', 'monitor')
    @Get()
    listar() {
        return this.solicitacoesService.listar();
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('aluno', 'monitor')
    @Get(':id')
    buscarPorId(@Param('id', ParseIntPipe) id: number) {
        return this.solicitacoesService.buscarPorId(id);
    }
    
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('monitor')
    @Patch(':id/aceitar')
    aceitar(@Param('id', ParseIntPipe) id: number) {
        return this.solicitacoesService.aceitar(id);
    }
}