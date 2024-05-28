import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import postgres from 'postgres';
import dotenv from 'dotenv';
import { Token } from './models/enums';

dotenv.config({
    path: ['.env', '.env.local', '.env.production'],
});

@Module({
    imports: [],
    controllers: [AppController],
    providers: [
        AppService,
        {
            provide: Token.SQL,
            useValue: postgres({
                username: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
            }),
        },
    ],
})
export class AppModule {}
