import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CriarDisciplinaDto } from './dtos/criar-disciplina.dto';

@Injectable()
export class DisciplinaService {
    constructor(private readonly prisma: PrismaService) { }
    async criar(dados: CriarDisciplinaDto) {
        const agora = new Date();
        return this.prisma.disciplinas.create({
            data: {
                nome: dados.nome,
                codigo: dados.codigo,
                criado_em: agora,
                atualizado_em: agora,
            },
            select: {
                id: true,
                nome: true,
                codigo: true,
                ativo: true,
                criado_em: true,
                atualizado_em: true,
            },
        });
    }

    async listar() {
        return this.prisma.disciplinas.findMany({
            where: { ativo: true },
            orderBy: { id: 'asc' },
            select: {
                id: true,
                nome: true,
                codigo: true,
            },
        });
    }
}
