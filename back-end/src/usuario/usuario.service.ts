import { Injectable, ConflictException, NotFoundException, BadRequestException } from '@nestjs/common';
import { CriarUsuarioDto } from './dtos/criar-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsuarioModel } from 'src/generated/prisma/models';
import * as bcrypt from 'bcrypt'
import { funcaoUsuario, Prisma } from 'src/generated/prisma/client';

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

    async buscarMeuPerfil(id: number) {
        const usuario = await this.prisma.usuario.findUnique({
            where: { id },
            select: {
                id: true,
                nome: true,
                email: true,
                funcao: true,
                curso: true,
                periodo: true,
            },
        });

        if (!usuario) {
            throw new NotFoundException('Usuário não encontrado.');
        }

        return usuario;
    }

    async listarDisciplinas(usuarioId: number, funcao: funcaoUsuario) {
        const vinculos = await this.prisma.usuario_Disciplina.findMany({
            where: { usuario_id: usuarioId, funcao },
            select: {
                disciplina: {
                    select: { id: true, nome: true, codigo: true },
                },
            },
            orderBy: { disciplina_id: 'asc' },
        });

        return vinculos.map(({ disciplina }) => disciplina);
    }

    async adicionarDisciplina(
        usuarioId: number,
        funcao: funcaoUsuario,
        disciplinaId: number,
    ) {
        const disciplina = await this.prisma.disciplinas.findFirst({
            where: { id: disciplinaId, ativo: true },
            select: { id: true },
        });

        if (!disciplina) {
            throw new NotFoundException('Disciplina não encontrada ou inativa.');
        }

        try {
            const vinculo = await this.prisma.usuario_Disciplina.create({
                data: {
                    usuario_id: usuarioId,
                    disciplina_id: disciplina.id,
                    funcao,
                    criado_em: new Date(),
                },
                select: {
                    disciplina: {
                        select: { id: true, nome: true, codigo: true },
                    },
                },
            });

            return vinculo.disciplina;
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new ConflictException(
                        'Esta disciplina já está na sua lista.',
                    );
                }
                if (error.code === 'P2003') {
                    throw new BadRequestException(
                        'Usuário ou disciplina não encontrado.',
                    );
                }
            }

            throw error;
        }
    }

    async removerDisciplina(
        usuarioId: number,
        funcao: funcaoUsuario,
        disciplinaId: number,
    ) {
        const resultado = await this.prisma.usuario_Disciplina.deleteMany({
            where: {
                usuario_id: usuarioId,
                disciplina_id: disciplinaId,
                funcao,
            },
        });

        if (resultado.count === 0) {
            throw new NotFoundException(
                'Disciplina não encontrada na sua lista.',
            );
        }

        return { disciplina_id: disciplinaId };
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
