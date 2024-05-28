import { glob } from 'glob';
import postgres from 'postgres';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();
const sql = postgres({
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

interface Migration {
    id: number;
    name: string;
    create_at: string;
}

async function createMigrationsTable(sql: postgres.Sql) {
    await sql`
        CREATE TABLE IF NOT EXISTS migrations (
            id SERIAL PRIMARY KEY,
            name text,
            created_at  timestamp DEFAULT NOW() 
        );
    `;
}

async function migrateUp() {
    const pathNames = await glob(__dirname + '/migrations/*.{js,ts}');
    const files = pathNames.map(
        (pathName) => pathName.split('/migrations/')[1].split('.')[0],
    );
    files.sort();
    await sql.begin(async (tx) => {
        await createMigrationsTable(tx);
        const migrations = await tx<Migration[]>`
            SELECT * FROM migrations order by name
        `;
        for (let i = 0; i < files.length; i++) {
            const migration: Migration | undefined = migrations.shift();
            const file = files[i];
            if (migration) {
                if (file === migration.name) {
                    console.log(
                        `Migration [${migration.name}] matched with the file [${file}].`,
                    );
                    continue;
                } else {
                    throw new Error(
                        `file [${file}] does not match the migration [${migration.name}].`,
                    );
                }
            }
            const { up } = await import(__dirname + `/migrations/${file}`);
            if(!up){
                throw new Error(`up function not defined for ${migration.name}`)
            }
            await up(tx);
            await tx`
                INSERT INTO migrations ${tx({
                    name: file,
                })}
            `;
            console.log(`New Migration [${file}] run successfully.`);
        }
    });
    await sql.end();
}

async function migrateDown() {
    await sql.begin(async (tx) => {
        await createMigrationsTable(tx);
        const [migration] = await tx<Migration[]>`
            SELECT * FROM migrations order by name desc limit 1
        `;
        if (!migration) {
            throw new Error('There is no migrations in the migration table');
        }
        const { down } = await import(
            __dirname + `/migrations/${migration.name}`
        );
        if(!down){
            throw new Error(`down function not defined for ${migration.name}`)
        }
        await down(tx);

        await tx`
            DELETE FROM migrations where name = ${migration.name}
        `;
        console.log(`Migration [${migration.name}] rolled back.`);
    });
    await sql.end();
}

async function makeMigration(name: string) {
    await fs.promises.writeFile(
        __dirname + `/migrations/${name}.ts`,
        `import postgres from "postgres"

export async function up(sql: postgres.Sql){

}

export async function down(sql: postgres.Sql){

}
`,
        { flag: 'w' },
    );
    console.log(`Migration [${name}] added to migration folder.`);
}

switch (process.argv[2]) {
    case 'down':
        migrateDown();
        break;
    case 'make':
        makeMigration(process.argv[3]);
        break;
    case 'up':
    default:
        migrateUp();
}
