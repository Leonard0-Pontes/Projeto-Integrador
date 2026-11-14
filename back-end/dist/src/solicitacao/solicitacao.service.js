"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitacaoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("../generated/prisma/client");
function paraData(data) {
    const [ano, mes, dia] = data.split('-').map(Number);
    return new Date(Date.UTC(ano, mes - 1, dia));
}
function paraHorario(horario) {
    const [hora, minuto] = horario.split(':').map(Number);
    return new Date(Date.UTC(2026, 0, 1, hora, minuto));
}
let SolicitacaoService = class SolicitacaoService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async criar(dados, userId) {
        const disciplina = await this.prisma.disciplinas.findFirst({
            where: {
                id: dados.disciplina_id,
                ativo: true,
            },
            select: { id: true },
        });
        if (!disciplina) {
            throw new common_1.NotFoundException('Disciplina não encontrada ou inativa.');
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
        }
        catch (error) {
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError &&
                error.code === 'P2003') {
                throw new common_1.BadRequestException('O aluno ou a disciplina informados não existem.');
            }
            throw error;
        }
    }
    async listar(userId) {
        return this.prisma.solicitacoes.findMany({
            where: { aluno_id: userId },
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
    async buscarPorId(id, userId) {
        const solicitacao = await this.prisma.solicitacoes.findFirst({
            where: { id, aluno_id: userId },
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
            throw new common_1.NotFoundException('Solicitação não encontrada.');
        }
        return solicitacao;
    }
};
exports.SolicitacaoService = SolicitacaoService;
exports.SolicitacaoService = SolicitacaoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SolicitacaoService);
//# sourceMappingURL=solicitacao.service.js.map