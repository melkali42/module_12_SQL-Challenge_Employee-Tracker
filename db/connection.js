const mysql = require("mysql2");

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Linus@Clark6^#',
  database: 'company_db',
});

// connection.connect((err) => {
//   if (err) throw err;
//   console.log('Connected to the database.');
// });

module.exports = db;
