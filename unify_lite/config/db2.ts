import { createPool } from "mysql2/promise";

const pool = createPool({
    host: "localhost",
    user: "usuarioX",
    password: "1234",
    port: 3306,
    database: "myunify",
});

export { pool };