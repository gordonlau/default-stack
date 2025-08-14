import { Inject, Injectable, Logger } from '@nestjs/common';
import { AppRepository } from './app.repository';
import { Token } from './global/db';
import { Kysely } from 'kysely';
import { DB } from './global/db-types';

@Injectable()
export class AppService {
    constructor(
        @Inject(Token.DB) private db: Kysely<DB>,
        private appRepository: AppRepository,
    ) {}

    async getHello() {
        const transaction = await this.db.startTransaction().execute();
        try {
            const data = this.appRepository.getHello(transaction);
            await transaction.commit().execute();
            return data;
        } catch (e) {
            await transaction.rollback().execute();
            Logger.error(e);
        }
    }
}
