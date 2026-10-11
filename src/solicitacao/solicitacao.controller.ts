import { Controller, Get, Param, ParseIntPipe, UseGuards, Patch } from '@nestjs/common';
import { SolicitacaoService } from './solicitacao.service';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';

@Controller('solicitacoes')
export class SolicitacaoController {
    constructor(private readonly solicitacoesService: SolicitacaoService) { }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('monitor')
    @Get(':id')
    buscarPorId(@Param('id', ParseIntPipe) id: number) {
        return this.solicitacoesService.buscarPorId(id);
    }
    
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('monitor')
    @Patch(':id/aceitar')
    aprovar(@Param('id', ParseIntPipe) id: number) {
        return this.solicitacoesService.aceitar(id);
    }
}