import { PrismaService } from "../prisma/prisma.service";
import { CriarDisciplinaDto } from './dtos/criar-disciplina.dto';
export declare class DisciplinaService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    criar(dados: CriarDisciplinaDto): Promise<{
        nome: string;
        codigo: string;
        ativo: boolean;
        criado_em: Date;
        atualizado_em: Date;
        id: number;
    }>;
    listar(): Promise<{
        nome: string;
        codigo: string;
        id: number;
    }[]>;
}
