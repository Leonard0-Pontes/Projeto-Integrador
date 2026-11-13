import { Injectable } from '@nestjs/common';
import { CriarUsuarioDto } from './dtos/criar-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsuarioModel } from 'src/generated/prisma/models';
import * as bcrypt from 'bcrypt'

export type UsuarioAutenticado = Omit<UsuarioModel, 'senha_hash'>;
export type UsuarioJwt = Pick<UsuarioModel, 'id' | 'nome' | 'email' | 'funcao' | 'curso' | 'periodo'>

@Injectable()
export class UsuarioService {
    constructor(private prisma: PrismaService) { }

    async listarUsuarios() {
        return this.prisma.usuario.findMany();
    }

    async buscarUsuario(email: string) {
        return this.prisma.usuario.findUnique({
            where: { email },
        });
    }

    async criarNovoUsuario(dados: CriarUsuarioDto) {
        const senhaHash = await bcrypt.hash(dados.senha, 10);
        const agora = new Date();
        return this.prisma.usuario.create({
            data: {
                nome: dados.nome,
                email: dados.email,
                senha_hash: senhaHash,
                funcao: dados.funcao,
                curso: dados.curso,
                periodo: dados.periodo,
                criado_em: agora,
                atualizado_em: agora,
            },
            select: {
                id: true,
                nome: true,
                email: true,
                funcao: true,
                curso: true,
                periodo: true,
                is_admin: true,
                ativo: true,
                criado_em: true,
                atualizado_em: true,
            },
        });
    }
}
