const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'trybe-renan',
  password: 'Password1@',
  database: 'mvc_example'
});

module.exports = connection;