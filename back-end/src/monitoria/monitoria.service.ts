import { BadRequestException, Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { funcaoUsuario, statusMonitor, statusSolicit, modalidadePref } from 'src/generated/prisma/enums';
import { Prisma } from 'src/generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CriarMonitoriaDto } from './dtos/criar-monitoria.dto';
import { paraData, paraHorario, horarioEmMinutos } from 'src/common/utils/funcoes-comuns.util';

const limiteParticipantes = 10;

@Injectable()
export class MonitoriaService {
  constructor(private readonly prisma: PrismaService) { }

  async criar(dados: CriarMonitoriaDto, monitorId: number) {
    const solicitacao = await this.prisma.solicitacoes.findUnique({
      where: { id: dados.solicitacao_id },
    });

    if (!solicitacao) {
      throw new NotFoundException('Solicitação não encontrada.');
    }
    if (solicitacao.status !== statusSolicit.Pendente) {
      throw new BadRequestException('Esta solicitação já foi aceita ou não está disponível.');
    }

    const vinculo = await this.prisma.usuario_Disciplina.findFirst({
      where: {
        usuario_id: monitorId,
        disciplina_id: solicitacao.disciplina_id,
        funcao: funcaoUsuario.Monitor,
        ativo: true,
      },
      select: { id: true },
    });
    if (!vinculo) {
      throw new BadRequestException(
        'Você não está vinculado a esta disciplina.',
      );
    }

    if (dados.modalidade === modalidadePref.Presencial && !dados.local?.trim()) {
      throw new BadRequestException(
        'É necessário informar o local para uma monitoria presencial.',
      );
    }

    if (dados.modalidade === modalidadePref.Online && !dados.link) {
      throw new BadRequestException(
        'É necessário informar o link para uma monitoria online.',
      );
    }

    if (
      dados.modalidade !== modalidadePref.Presencial &&
      dados.modalidade !== modalidadePref.Online
    ) {
      throw new BadRequestException(
        'A modalidade da monitoria deve ser Presencial ou Online.',
      );
    }

    const inicioEmMinutos = horarioEmMinutos(dados.horario_inicio);
    const fimEmMinutos = horarioEmMinutos(dados.horario_fim);
    if (fimEmMinutos <= inicioEmMinutos) {
      throw new BadRequestException(
        'O horário de fim deve ser posterior ao horário de início.',
      );
    }

    const agora = new Date();
    try {
      return await this.prisma.$transaction(async (tx) => {
        const monitoria = await tx.monitoria.create({
          data: {
            solicitacao_id: solicitacao.id,
            monitor_id: monitorId,
            data: paraData(dados.data),
            horario_inicio: paraHorario(dados.horario_inicio),
            horario_fim: paraHorario(dados.horario_fim),
            modalidade: dados.modalidade,
            local: dados.modalidade === 'Presencial'
              ? dados.local!.trim()
              : '',
            link: dados.modalidade === 'Online'
              ? dados.link!
              : null,
            status: statusMonitor.Marcada,
            criado_em: agora,
            atualizado_em: agora,
            participantes: {
              create: {
                aluno: { connect: { id: solicitacao.aluno_id } },
                criado_em: agora,
              },
            },
          },
          include: {
            solicitacao: true,
            monitor: {
              select: { id: true, nome: true, email: true },
            },
          },
        });
        await tx.solicitacoes.update({
          where: { id: solicitacao.id },
          data: {
            status: statusSolicit.Aceita,
            atualizado_em: agora,
          },
        });
        return monitoria;
      });
    } catch (error: unknown) {
      if (
        error &&
        typeof error === 'object' &&
        'code' in error &&
        error.code === 'P2002'
      ) {
        throw new BadRequestException('Esta solicitação já possui uma monitoria.');
      }
      throw error;
    }
  }

  async listar(userId: number, funcao: funcaoUsuario) {
    return this.prisma.monitoria.findMany({
      where:
        funcao === funcaoUsuario.Monitor
          ? { monitor_id: userId }
          : { solicitacao: { aluno_id: userId } },
      include: {
        solicitacao: {
          include: {
            aluno: { select: { id: true, nome: true, email: true } },
            disciplina: { select: { id: true, nome: true, codigo: true } },
          },
        },
        monitor: { select: { id: true, nome: true, email: true } },
      },
      orderBy: { data: 'asc' },
    });
  }

  async listarDisponiveis(userId: number) {
    const monitorias = await this.prisma.monitoria.findMany({
      where: {
        status: statusMonitor.Marcada,
        monitor_id: { not: userId },
      },
      include: {
        solicitacao: {
          include: {
            aluno: {
              select: { id: true, nome: true },
            },
            disciplina: {
              select: { id: true, nome: true, codigo: true },
            },
          },
        },
        monitor: {
          select: { id: true, nome: true },
        },
        participantes: {
          where: {
            aluno_id: userId,
            ativo: true,
          },
          select: { aluno_id: true },
        },
        _count: {
          select: {
            participantes: {
              where: { ativo: true },
            },
          },
        },
      },
      orderBy: { data: 'asc' },
    });

    return monitorias.map(({ participantes, _count, ...monitoria }) => ({
      ...monitoria,
      participante_atual: participantes.length > 0,
      participantes_ativos: _count.participantes,
      limiteParticipantes,
    }));
  }

  async buscarPorId(id: number, userId: number, funcao: funcaoUsuario) {
    const monitoria = await this.prisma.monitoria.findFirst({
      where: {
        id,
        ...(funcao === funcaoUsuario.Monitor
          ? { monitor_id: userId }
          : { solicitacao: { aluno_id: userId } }),
      },
      include: {
        solicitacao: {
          include: {
            aluno: { select: { id: true, nome: true, email: true } },
            disciplina: { select: { id: true, nome: true, codigo: true } },
          },
        },
        monitor: { select: { id: true, nome: true, email: true } },
      },
    });
    if (!monitoria) {
      throw new NotFoundException('Monitoria não encontrada.');
    }
    return monitoria;
  }

  async concluir(id: number, monitorId: number) {
    const monitoria = await this.prisma.monitoria.findFirst({
      where: { id, monitor_id: monitorId },
    });
    if (!monitoria) {
      throw new NotFoundException('Monitoria não encontrada.');
    }
    if (monitoria.status !== statusMonitor.Marcada) {
      throw new BadRequestException('Apenas monitorias marcadas podem ser concluídas.');
    }
    return this.prisma.monitoria.update({
      where: { id },
      data: {
        status: statusMonitor.Concluida,
        atualizado_em: new Date(),
      },
    });
  }

  async cancelar(
    id: number,
    userId: number,
    funcao: funcaoUsuario,
    justificativa: string,
  ) {
    const justificativaTratada = justificativa?.trim();
    if (!justificativaTratada) {
      throw new BadRequestException(
        'É obrigatório informar uma justificativa.',
      );
    }
    const monitoria = await this.prisma.monitoria.findFirst({
      where: {
        id,
        ...(funcao === funcaoUsuario.Monitor
          ? { monitor_id: userId }
          : { solicitacao: { aluno_id: userId } }),
      },
    });
    if (!monitoria) {
      throw new NotFoundException('Monitoria não encontrada.');
    }
    if (monitoria.status === statusMonitor.Concluida) {
      throw new BadRequestException(
        'Uma monitoria concluída não pode ser cancelada.',
      );
    }
    if (monitoria.status === statusMonitor.Cancelada) {
      throw new BadRequestException(
        'Esta monitoria já está cancelada.',
      );
    }
    return this.prisma.monitoria.update({
      where: { id },
      data: {
        status: statusMonitor.Cancelada,
        justificativa_cancel: justificativaTratada,
        atualizado_em: new Date(),
      },
    });
  }

  async entrarNaMonitoria(id: number, alunoId: number) {
    try {
      return await this.prisma.$transaction(
        async (tx) => {
          const monitoria = await tx.monitoria.findUnique({
            where: { id },
            select: { id: true, monitor_id: true, status: true },
          });
          if (!monitoria) {
            throw new NotFoundException('Monitoria não encontrada.');
          }
          if (monitoria.status !== statusMonitor.Marcada) {
            throw new BadRequestException(
              'Só é possível participar de monitorias marcadas.',
            );
          }
          if (monitoria.monitor_id === alunoId) {
            throw new BadRequestException(
              'O monitor não pode participar da própria monitoria.',
            );
          }
          const chave = {
            monitoria_id_aluno_id: {
              monitoria_id: id,
              aluno_id: alunoId,
            },
          };
          const inscricao = await tx.participante_Monitoria.findUnique({
            where: chave,
          });
          if (inscricao?.ativo) {
            throw new ConflictException(
              'Você já está inscrito nesta monitoria.',
            );
          }
          const quantidade = await tx.participante_Monitoria.count({
            where: {
              monitoria_id: id,
              ativo: true,
            },
          });
          if (quantidade >= limiteParticipantes) {
            throw new ConflictException(
              'Esta monitoria já atingiu o limite de participantes.',
            );
          }
          if (inscricao) {
            return tx.participante_Monitoria.update({
              where: chave,
              data: { ativo: true },
            });
          }
          return tx.participante_Monitoria.create({
            data: {
              monitoria: { connect: { id } },
              aluno: { connect: { id: alunoId } },
              criado_em: new Date(),
              ativo: true,
            },
          });
        },
        { isolationLevel: Prisma.TransactionIsolationLevel.Serializable },
      );
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        (error.code === 'P2002' || error.code === 'P2034')
      ) {
        throw new ConflictException(
          'A inscrição não foi concluída. Atualize a lista e tente novamente.',
        );
      }
      throw error;
    }
  }

  async sairDaMonitoria(id: number, alunoId: number) {
    return this.prisma.$transaction(async (tx) => {
      const monitoria = await tx.monitoria.findUnique({
        where: { id },
        select: {
          id: true,
          monitor_id: true,
          status: true,
        },
      });
      if (!monitoria) {
        throw new NotFoundException('Monitoria não encontrada.');
      }
      if (monitoria.status !== statusMonitor.Marcada) {
        throw new BadRequestException(
          'Só é possível sair de uma monitoria marcada.',
        );
      }
      if (monitoria.monitor_id === alunoId) {
        throw new BadRequestException(
          'O monitor responsável não pode sair da própria monitoria.',
        );
      }
      const resultado = await tx.participante_Monitoria.updateMany({
        where: {
          monitoria_id: id,
          aluno_id: alunoId,
          ativo: true,
        },
        data: { ativo: false },
      });
      if (resultado.count === 0) {
        throw new NotFoundException(
          'Você não está inscrito nesta monitoria.',
        );
      }
      return { mensagem: 'Você saiu da monitoria.' };
    });
  }
}