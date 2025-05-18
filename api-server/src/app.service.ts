import { Inject, Injectable } from '@nestjs/common';
import { Kysely } from 'kysely';
import { Token } from './global/db';

@Injectable()
export class AppService {
    constructor(@Inject(Token.DB) private db: Kysely<any>) {}

    async getHello() {
        return await this.db.selectFrom('users').selectAll().execute();
    }
}
