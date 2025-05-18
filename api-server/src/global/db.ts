import { db } from '../../kysely.config';

export enum Token {
    DB = 'DB',
}

export const dbProvider = {
    provide: Token.DB,
    useValue: db,
};
