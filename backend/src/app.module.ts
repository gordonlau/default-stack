import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { Token } from './models/enums';
import { knex } from './db';



@Module({
    imports: [],
    controllers: [AppController],
    providers: [
        AppService,
        {
            provide: Token.DB,
            useValue: knex,
        },
    ],
})
export class AppModule {}
