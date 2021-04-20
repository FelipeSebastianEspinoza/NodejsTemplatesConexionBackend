const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'nodepostgres',
    password: 'secret',
    port: 15432,
})

module.exports = pool;