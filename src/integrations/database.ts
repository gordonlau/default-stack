import { Pool } from 'pg'
import { Kysely, PostgresDialect } from 'kysely'
import type { DB } from '../models/types'

const dialect = new PostgresDialect({
    pool: new Pool({
        database: import.meta.env.POSTGRES_DATABASE,
        host: import.meta.env.POSTGRES_HOST,
        user: import.meta.env.POSTGRES_USER,
        password: import.meta.env.POSTGRES_PASSWORD,
        port: 5432,
    }),
})

export const db = new Kysely<DB>({
    dialect,
})
