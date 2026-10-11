import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SolicitacaoService } from './solicitacoes.service';
import { SolicitacoesController } from './solicitacoes.controller';
import { Solicitacao } from './entities/solicitacao.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Solicitacao])],
    controllers: [SolicitacoesController],
    providers: [SolicitacaoService],
    exports: [SolicitacaoService]
})
export class SolicitacoesModule { }