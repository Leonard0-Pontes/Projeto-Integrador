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
exports.DisciplinaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DisciplinaService = class DisciplinaService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async criar(dados) {
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
};
exports.DisciplinaService = DisciplinaService;
exports.DisciplinaService = DisciplinaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DisciplinaService);
//# sourceMappingURL=disciplina.service.js.map