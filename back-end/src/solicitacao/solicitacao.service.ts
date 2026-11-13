import { Injectable, NotFoundException } from '@nestjs/common';
import { CriarSolicitacaoDto } from './dtos/criar-solicitacao.dto';

type Solicitacao = CriarSolicitacaoDto & {
  id: number;
  criadoEm: string;
};

@Injectable()
export class SolicitacaoService {
  /*
  criar(dados: CriarSolicitacaoDto) {
    const novaSolicitacao: Solicitacao = {
      id: this.solicitacao.length + 1,
      ...dados,
      status: 'pendente',
      criadoEm: new Date().toISOString(),
    };
    this.solicitacao.push(novaSolicitacao);
    return novaSolicitacao;
  }

  listar() {
    return this.solicitacao;
  }

  buscarPorId(id: number) {
    const solicitacao = this.solicitacao.find((item) => item.id === id);

    if (!solicitacao) {
      throw new NotFoundException('Solicitação não encontrada');
    }

    return solicitacao;
  }

  aceitar(id: number) {
    const solicitacao = this.buscarPorId(id);
    solicitacao.status = 'aceita';
    return solicitacao;
  }
  */
}
