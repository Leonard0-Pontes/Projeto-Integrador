import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSolicitacaoDto } from './dto/create-solicitacao.dto';
import { UpdateSolicitacaoDto } from './dto/update-solicitacao.dto';
import { Solicitacao } from './entities/solicitacao.entity';

@Injectable()
export class SolicitacaoService {
    constructor(
        @InjectRepository(Solicitacao)
        private readonly solicitacaoRepository: Repository<Solicitacao>,
    ) { }

    async create(createSolicitacaoDto: CreateSolicitacaoDto): Promise<Solicitacao> {
        const solicitacao = this.solicitacaoRepository.create(createSolicitacaoDto);
        return await this.solicitacaoRepository.save(solicitacao);
    }

    async findAll(): Promise<Solicitacao[]> {
        return await this.solicitacaoRepository.find({ relations: ['aluno', 'disciplina'] });
    }

    async findOne(id: number): Promise<Solicitacao> {
        const solicitacao = await this.solicitacaoRepository.findOne({
            where: { id },
            relations: ['aluno', 'disciplina', 'monitoria']
        });
        if (!solicitacao) throw new NotFoundException(`Solicitação ID ${id} não encontrada`);
        return solicitacao;
    }

    async update(id: number, updateSolicitacaoDto: UpdateSolicitacaoDto): Promise<Solicitacao> {
        await this.findOne(id);
        await this.solicitacaoRepository.update(id, updateSolicitacaoDto);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.findOne(id);
        await this.solicitacaoRepository.delete(id);
    }
}