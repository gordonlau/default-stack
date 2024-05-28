import postgres from "postgres";
import dotenv from 'dotenv';

dotenv.config({
    path: ['.env', '.env.local'],
});

export const sql = postgres({
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})