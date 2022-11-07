import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {FastifyAdapter, NestFastifyApplication} from '@nestjs/platform-fastify'
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );

  app.useGlobalPipes(
    new ValidationPipe ({
    transform: true,
    errorHttpStatusCode: 422,
    whitelist: true,
    forbidNonWhitelisted: true
  }))
  await app.listen(8100, '0.0.0.0', () => console.log(`Listening on port: 8100`));
}
bootstrap();  
