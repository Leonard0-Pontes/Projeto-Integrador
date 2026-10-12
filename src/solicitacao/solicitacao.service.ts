import { Injectable, NotFoundException } from '@nestjs/common';
import { CriarSolicitacaoDto } from './dtos/criar-solicitacao.dto';

type Solicitacao = CriarSolicitacaoDto & {
  id: number;
  criadoEm: string;
};

@Injectable()
export class SolicitacaoService {
  private readonly solicitacao: Solicitacao[] = [
    {
      id: 1,
      assunto: 'Dificuldade em trigonometria',
      data_preferida: '2026-10-23',
      horario_preferido: '14:00',
      status: 'pendente',
      criadoEm: '2026-10-11'
    },
    {
      id: 2,
      assunto: 'Problemas com código Python',
      data_preferida: '2026-10-25',
      horario_preferido: '08:00',
      status: 'pendente',
      criadoEm: '2026-10-11'
    },
  ];

  criar(dados: CriarSolicitacaoDto) {
    const novaSolicitacao: Solicitacao = {
      id: this.solicitacao.length + 1,
      ...dados,
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
}
