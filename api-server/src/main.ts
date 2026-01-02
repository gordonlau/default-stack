import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter } from '@nestjs/platform-fastify';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, new FastifyAdapter());
    await app.listen(8080);
}
bootstrap();
