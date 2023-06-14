import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const pipe = new ValidationPipe({
    whitelist: true,
    transform: true,
    // forbidNonWhitelisted: true
  });
  const corsOptions: CorsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  };

  app.useGlobalPipes(pipe);
  app.enableCors(corsOptions);

  await app.listen(3000);
}
bootstrap();
