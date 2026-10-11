import { Module } from '@nestjs/common';
import { MonitoriaService } from './monitoria.service';
import { MonitoriaController } from './monitoria.controller';

@Module({
  providers: [MonitoriaService],
  controllers: [MonitoriaController]
})
export class MonitoriaModule {}
