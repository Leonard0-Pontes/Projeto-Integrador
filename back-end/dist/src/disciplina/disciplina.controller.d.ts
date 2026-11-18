import { DisciplinaService } from './disciplina.service';
import { CriarDisciplinaDto } from './dtos/criar-disciplina.dto';
export declare class DisciplinaController {
    private readonly disciplinaService;
    constructor(disciplinaService: DisciplinaService);
    listar(): Promise<{
        nome: string;
        codigo: string;
        id: number;
    }[]>;
    criar(body: CriarDisciplinaDto): Promise<{
        nome: string;
        codigo: string;
        ativo: boolean;
        criado_em: Date;
        atualizado_em: Date;
        id: number;
    }>;
}
