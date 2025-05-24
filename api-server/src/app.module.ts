import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { GlobalModule } from './global/global.module';
import { APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';
import { AppRepository } from './app.repository';

@Module({
    imports: [GlobalModule],
    controllers: [AppController],
    providers: [
        AppService,
        {
            provide: APP_PIPE,
            useClass: ZodValidationPipe,
        },
        AppRepository,
    ],
})
export class AppModule {}
