const mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'me',
    password: process.env.password,
    database: 'burgers_db'
});

module.exports = connection;