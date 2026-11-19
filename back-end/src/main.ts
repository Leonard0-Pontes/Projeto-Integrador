// back-end/src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Lê a origem do CORS da variável de ambiente.
  // Fallback para a URL de produção do Render, mantendo o deploy atual seguro.
  const corsOrigin = process.env.CORS_ORIGIN || 'https://pi-soma-frontend.onrender.com';

  app.enableCors({
    origin: corsOrigin,
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();