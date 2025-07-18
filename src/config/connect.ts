import {Pool} from "pg"

const db = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "senhanova",
    port: 5432,
})

export {db}