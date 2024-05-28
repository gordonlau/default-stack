import { Inject, Injectable } from '@nestjs/common';
import postgres from 'postgres';
import { Token } from './models/enums';

@Injectable()
export class AppService {
    constructor(@Inject(Token.SQL) private sql: postgres.Sql) {}

    async getHello() {
        const users = await this.sql`SELECT * FROM USERS `;

        return users;
    }
}
