const {Pool} = require('pg')
require('dotenv').config();

const pool =  new Pool({
    user:process.env.DATABASE_USER,
    host:process.env.DATABASE_HOST,
    database:process.env.DATABASE_NAME,
    password:process.env.DATABASE_PASSWORD,
    port:process.env.DATABASE_PORT,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
})


let getConnection = async () => {
    const connection = await pool.connect();
    return connection;
}

let executeQuery = async (query, params, callback) => {
    const connection = await getConnection();
    connection.query(query, params, callback);
}



module.exports = {getConnection,executeQuery}