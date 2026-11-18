import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CriarSolicitacaoDto } from './dtos/criar-solicitacao.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { funcaoUsuario, Prisma } from 'src/generated/prisma/client';

function paraData(data: string): Date {
  const [ano, mes, dia] = data.split('-').map(Number);
  return new Date(Date.UTC(ano, mes - 1, dia));
}

function paraHorario(horario: string): Date {
  const [hora, minuto] = horario.split(':').map(Number);
  return new Date(Date.UTC(2026, 0, 1, hora, minuto));
}

@Injectable()
export class SolicitacaoService {
  constructor(private readonly prisma: PrismaService) { }
  async criar(dados: CriarSolicitacaoDto, userId: number) {
    const disciplina = await this.prisma.disciplinas.findFirst({
      where: {
        id: dados.disciplina_id,
        ativo: true,
      },
      select: { id: true },
    });
    if (!disciplina) {
      throw new NotFoundException('Disciplina não encontrada ou inativa.');
    }
    const agora = new Date();
    try {
      return await this.prisma.solicitacoes.create({
        data: {
          aluno_id: userId,
          disciplina_id: disciplina.id,
          assunto: dados.assunto,
          descricao: dados.descricao ?? null,
          preferencia_data: paraData(dados.data_preferida),
          preferencia_horario: paraHorario(dados.horario_preferido),
          preferencia_modal: dados.modalidade_preferida,
          preferencia_local: dados.local_preferido ?? null,
          criado_em: agora,
          atualizado_em: agora,
        },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2003'
      ) {
        throw new BadRequestException(
          'O aluno ou a disciplina informados não existem.',
        );
      }
      throw error;
    }
  }

  async listar(userId: number, funcao: funcaoUsuario) {
    return this.prisma.solicitacoes.findMany({
      where: funcao === funcaoUsuario.Monitor ? {} : { aluno_id: userId },
      include: {
        aluno: {
          select: { id: true, nome: true, email: true },
        },
        disciplina: {
          select: { id: true, nome: true, codigo: true },
        },
      },
      orderBy: { id: 'asc' },
    });
  }

  async buscarPorId(id: number, userId: number, funcao: funcaoUsuario) {
    const solicitacao = await this.prisma.solicitacoes.findFirst({
      where: funcao === funcaoUsuario.Monitor ? { id } : { id, aluno_id: userId },
      include: {
        aluno: {
          select: { id: true, nome: true, email: true },
        },
        disciplina: {
          select: { id: true, nome: true, codigo: true },
        },
      },
    });
    if (!solicitacao) {
      throw new NotFoundException('Solicitação não encontrada.');
    }
    return solicitacao;
  }
}
