import { Module } from '@nestjs/common';
import { MonitoriaService } from './monitoria.service';
import { MonitoriaController } from './monitoria.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  providers: [MonitoriaService],
  controllers: [MonitoriaController]
})
export class MonitoriaModule {}
