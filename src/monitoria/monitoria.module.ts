import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MonitoriaService } from './monitoria.service';
import { MonitoriaController } from './monitoria.controller';
import { Monitoria } from './entities/monitoria.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Monitoria])],
    controllers: [MonitoriaController],
    providers: [MonitoriaService],
})
export class MonitoriaModule { }