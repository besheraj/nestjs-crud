import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {FastifyAdapter, NestFastifyApplication} from '@nestjs/platform-fastify'
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

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

  const options = new DocumentBuilder()
    .setTitle('NESTJS CRUD')
    .setVersion('1.0')
    .addServer('http://0.0.0.0:8100')
    .build();

  const document = SwaggerModule.createDocument(app,options, {
    ignoreGlobalPrefix: true
  })

  SwaggerModule.setup('docs',app, document);

  await app.listen(8100, '0.0.0.0', () => console.log(`Listening on port: 8100`));

}

bootstrap();  
