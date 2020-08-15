const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  // Your username
  user: "root",
  // Your password
  password: "86h350xbanshee",
  database: "employees"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log('success');
  
});

module.exports = connection;