import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMonitoriaDto } from './dto/create-monitoria.dto';
import { UpdateMonitoriaDto } from './dto/update-monitoria.dto';
import { Monitoria } from './entities/monitoria.entity';

@Injectable()
export class MonitoriaService {
    constructor(
        @InjectRepository(Monitoria)
        private readonly monitoriaRepository: Repository<Monitoria>,
    ) { }

    async create(createMonitoriaDto: CreateMonitoriaDto): Promise<Monitoria> {
        const monitoria = this.monitoriaRepository.create(createMonitoriaDto);
        return await this.monitoriaRepository.save(monitoria);
    }

    async findAll(): Promise<Monitoria[]> {
        return await this.monitoriaRepository.find({
            relations: ['solicitacao', 'monitor', 'laboratorio']
        });
    }

    async findOne(id: number): Promise<Monitoria> {
        const monitoria = await this.monitoriaRepository.findOne({
            where: { id },
            relations: ['solicitacao', 'monitor', 'laboratorio']
        });
        if (!monitoria) throw new NotFoundException(`Monitoria ID ${id} não encontrada`);
        return monitoria;
    }

    async update(id: number, updateMonitoriaDto: UpdateMonitoriaDto): Promise<Monitoria> {
        await this.findOne(id);
        await this.monitoriaRepository.update(id, updateMonitoriaDto);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.findOne(id);
        await this.monitoriaRepository.delete(id);
    }
}