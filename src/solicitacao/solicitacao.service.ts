import { Injectable, NotFoundException } from '@nestjs/common';
import { CriarSolicitacaoDto } from './dtos/criar-solicitacao.dto';

type StatusSolicitacao = 'pendente' | 'aprovada';

type Solicitacao = CriarSolicitacaoDto & {
  id: number;
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
    },
    { 
        id: 1, 
        assunto: 'Problemas com código Python', 
        data_preferida: '2026-10-25',
        horario_preferido: '08:00',
        status: 'pendente',
    },
  ];

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
