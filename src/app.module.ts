import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { SolicitacaoModule } from './solicitacoes/solicitacoes.module'; // Ajuste o caminho se necessário
import { MonitoriaModule } from './monitoria/monitoria.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASS || 'postgres',
      database: process.env.DB_NAME || 'monitoria_db',
      autoLoadEntities: true,
      synchronize: true, //para desenvolvimento
    }),
    SolicitacaoModule,
    MonitoriaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }