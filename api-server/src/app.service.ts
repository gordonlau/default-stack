import { Inject, Injectable } from '@nestjs/common';
import { Kysely } from 'kysely';
import { Token } from './global/db';
import { DB } from './global/db-types';

@Injectable()
export class AppService {
    constructor(@Inject(Token.DB) private db: Kysely<DB>) {}

    async getHello() {
        return {};
    }
}
