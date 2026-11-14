import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { CriarUsuarioDto } from './dtos/criar-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsuarioModel } from 'src/generated/prisma/models';
import * as bcrypt from 'bcrypt'
import { Prisma } from 'src/generated/prisma/client';

export type UsuarioAutenticado = Omit<UsuarioModel, 'senha_hash'>;
export type UsuarioJwt = Pick<UsuarioModel, 'id' | 'nome' | 'email' | 'funcao' | 'curso' | 'periodo'>

@Injectable()
export class UsuarioService {
    constructor(private prisma: PrismaService) { }

    async listarUsuarios() {
        return this.prisma.usuario.findMany({
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

    async buscarUsuarioLogin(email: string) {
        return this.prisma.usuario.findUnique({
            where: { email },
        });
    }

    async buscarUsuario(email: string) {
        const usuario = await this.prisma.usuario.findUnique({
            where: { email },
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

        if (!usuario) {
            throw new NotFoundException('Usuário não encontrado.');
        }

        return usuario;
    }

    async criarNovoUsuario(dados: CriarUsuarioDto) {
        const senhaHash = await bcrypt.hash(dados.senha, 10);
        const agora = new Date();
        try {
            return await this.prisma.usuario.create({
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
        } catch (error) {
            if (
                error instanceof Prisma.PrismaClientKnownRequestError &&
                error.code === 'P2002'
            ) {
                throw new ConflictException("Este e-mail já está cadastrado.");
            }

            throw error;
        }
    }

    async tornarAdmin(id: number) {
        try {
            return await this.prisma.usuario.update({
                where: { id },
                data: {
                    is_admin: true,
                    atualizado_em: new Date(),
                },
                select: {
                    id: true,
                    nome: true,
                    email: true,
                    is_admin: true,
                    atualizado_em: true,
                },
            });
        } catch (error) {
            if (
                error instanceof Prisma.PrismaClientKnownRequestError &&
                error.code === 'P2025'
            ) {
                throw new NotFoundException("Usuário não encontrado.");
            }
            throw error;
        }
    }
}
