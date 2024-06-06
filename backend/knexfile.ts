import type { Knex } from "knex";
import dotenv from 'dotenv';
import { Logger } from "@nestjs/common";

dotenv.config({
    path: ['.env', '.env.local'],
});


const config: { [key: string]: Knex.Config } = {
    development: {
		debug: true,
		client: 'postgresql',
		connection: {
			database: process.env.POSTGRES_DB,
			user: process.env.POSTGRES_USER,
			password: process.env.POSTGRES_PASSWORD,
			host: process.env.POSTGRES_HOST || 'localhost'
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations'
		}
	},

    test: {
		client: 'postgresql',
		connection: {
			database: process.env.POSTGRES_TESTDB || process.env.POSTGRES_DB,
			user: process.env.POSTGRES_USER,
			password: process.env.POSTGRES_PASSWORD,
			host: process.env.POSTGRES_HOST || 'localhost'
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations'
		}
	},
	production: {
		client: 'postgresql',
		connection: {
			database: process.env.POSTGRES_DB,
			user: process.env.POSTGRES_USER,
			password: process.env.POSTGRES_PASSWORD,
			host: process.env.POSTGRES_HOST || 'localhost'
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations'
		}
	}

};

module.exports = config;
