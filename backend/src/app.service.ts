import { Inject, Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { Token } from './global/db';

@Injectable()
export class AppService {
    constructor(@Inject(Token.DB) private knex: Knex) {}

    async getHello() {
        return await this.knex.select<{ id: string }>('*').from('users');
    }
}
