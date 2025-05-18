import { defineConfig } from 'kysely-ctl';
import { Pool } from 'pg';
import { Kysely, PostgresDialect } from 'kysely';
import dotenv from 'dotenv';
import { DB } from 'src/global/db-types';

dotenv.config();

const env = process.env.NODE_ENV || 'development';
export const db = new Kysely<DB>({
    dialect: new PostgresDialect({
        pool: new Pool({
            url:
                env === 'test'
                    ? process.env.DATABASE_URL
                    : process.env.TEST_DATABASE_URL,
        }),
    }),
});

export default defineConfig({
    kysely: db,
});
