import postgres from "postgres";
import dotenv from 'dotenv';
import { Logger } from "@nestjs/common";

dotenv.config({
    path: ['.env', '.env.local'],
});

export const sql = postgres({
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    debug(connection, query, parameters, paramTypes) {
        Logger.debug(`sql:\n${query} \n[${parameters}]`)
    },
})