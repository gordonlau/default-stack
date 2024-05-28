import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { Token } from './models/enums';
import { sql } from './db';



@Module({
    imports: [],
    controllers: [AppController],
    providers: [
        AppService,
        {
            provide: Token.SQL,
            useValue: sql,
        },
    ],
})
export class AppModule {}
