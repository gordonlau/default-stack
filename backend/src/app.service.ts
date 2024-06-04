import { Inject, Injectable } from '@nestjs/common';
import { Token } from './models/enums';
import { Knex } from 'knex'

@Injectable()
export class AppService {
    constructor(@Inject(Token.DB) private knex: Knex) {}

    async getHello() {
        return await this.knex.select<{id:string}>('*').from('users'); 
    }
}
