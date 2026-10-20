import { Injectable } from '@nestjs/common';
import { CriarUsuarioDto } from './dtos/criar-usuario.dto';

export type Funcao = 'aluno' | 'monitor' | 'professor' | 'admin';

export type Usuario = CriarUsuarioDto & {
    id: number;
    criadoEm: string;
}

export type UsuarioAutenticado = Omit<Usuario, 'senha'>;

@Injectable()
export class UsuarioService {
    private usuario: Usuario[] = [
        {
            id: 1,
            nome: 'Leonardo',
            email: 'leo@email.com',
            senha: '$2b$12$PHvkWinRGqZiV89CyqjWuewve6G2gnLnHMUg5csRn1urarH2jpt12',
            funcao: 'aluno',
            curso: 'TSI',
            periodo: 4,
            criadoEm: '2026-10-11',
        },
        {
            id: 2,
            nome: 'Paulo',
            email: 'paulo@email.com',
            senha: '$2b$12$V8Q6bP6m9vGqdkdAsBst.O.PsbyksuBrhsdVeQMDeLNCwvrLm.URC',
            funcao: 'monitor',
            curso: 'TSI',
            periodo: 6,
            criadoEm: '2026-10-11',
        },
        {
            id: 3,
            nome: 'Lucas',
            email: 'lucas@email.com',
            senha: '$2b$12$f.eRKV5bqPIKkfFQJ/UN2O.XkCUG89HNP6bgMLdXEFJaFxfFm1bf.',
            funcao: 'admin',
            criadoEm: '2026-10-11',
        },
    ]

    criar(dados: CriarUsuarioDto) {
        const novoUsuario: Usuario = {
            id: this.usuario.length + 1,
            ...dados,
            criadoEm: new Date().toISOString(),
        };
        this.usuario.push(novoUsuario);
        return novoUsuario;
    }

    listar() {
        return this.usuario;
    }

    buscarPorEmail(email: string) {
        return this.usuario.find((usuario) => usuario.email === email);
    }
}
