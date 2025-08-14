import { Injectable } from '@nestjs/common';
import { Kysely } from 'kysely';
import { DB } from './global/db-types';

@Injectable()
export class AppRepository {
    constructor() {}

    async getHello(db: Kysely<DB>) {
        return {};
    }
}
