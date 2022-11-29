import { createPool } from "mysql2/promise";

const pool = createPool({
    host: "usuario",
    user: "root",
    password: "",
    port: 3306,
    database: "myunify",
});

export { pool };