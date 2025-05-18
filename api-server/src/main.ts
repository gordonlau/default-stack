import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { FastifyAdapter } from '@nestjs/platform-fastify';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, new FastifyAdapter());

    const config = new DocumentBuilder()
        .setTitle('Default Stack')
        .setDescription('Default Stack API description')
        .setVersion('1.0')
        .addTag('default')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
    await app.listen(8080);
}
bootstrap();
