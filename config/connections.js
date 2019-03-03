const mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '5xfbHo4U',
    database: 'burgers_db'
});

module.exports = connection;