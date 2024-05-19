import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerDocumentOptions,
} from '@nestjs/swagger';
import compression from '@fastify/compress';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );

  // Add Swagger documentation
  const config = new DocumentBuilder()
    .setTitle('Scheduler API')
    .setDescription('Manage schedules and tasks')
    .setVersion('1.0')
    .build();

  const documentOptions: SwaggerDocumentOptions = {
    operationIdFactory: (_controllerKey: string, methodKey: string) =>
      methodKey,
  };
  const document = SwaggerModule.createDocument(app, config, documentOptions);

  SwaggerModule.setup('api-docs', app, document);

  // Register other middlewares
  await app.register(compression);
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
