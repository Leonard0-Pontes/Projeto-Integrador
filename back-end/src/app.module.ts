import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MonitoriaModule } from './monitoria/monitoria.module';
import { DisciplinaModule } from './disciplina/disciplina.module';
import { UsuarioModule } from './usuario/usuario.module';
import { SolicitacaoModule } from './solicitacao/solicitacao.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from "./prisma/prisma.module";

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), MonitoriaModule, DisciplinaModule, UsuarioModule, SolicitacaoModule, AuthModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
