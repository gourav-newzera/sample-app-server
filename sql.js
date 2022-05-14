const mysql = require("mysql");
const util = require("util");
require("dotenv").config();

const con = mysql.createConnection({
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected!");
});

// const tableName = 'users';

// // Table Creation : One Time
// const createTableQuery = `CREATE TABLE ${tableName} (
//    id int NOT NULL AUTO_INCREMENT, name VARCHAR(255), job VARCHAR(255), url VARCHAR(255), photo VARCHAR(255), PRIMARY KEY (id))`;
// con.query(createTableQuery, (err, result) => {
//   if (err) throw err;
//   console.log('Table Created');
// });

const sql = util.promisify(con.query).bind(con);

module.exports = sql;
