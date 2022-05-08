require("dotenv").config();
const { Pool } = require("pg");
process.env.PGOPTIONS="-c search_path=analytcoz"

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    ssl: {
        rejectUnauthorized: false,
    }
});

module.exports = pool;