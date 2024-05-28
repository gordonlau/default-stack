import postgres from "postgres"

export async function up(sql: postgres.Sql){

    await sql`
        CREATE TABLE users(
            id SERIAL,
            username text,
            password text,
            created_at timestamp default now()
        )
    `

}

export async function down(sql: postgres.Sql){

    await sql`
        DROP TABLE users
    `
}
