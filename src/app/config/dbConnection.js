// const mysql = require("mysql2");
const mysql = require("mysql2");

const connObject = {
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  rowsAsArray: true,
};

const pool = mysql.createPool({
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  waitForConnections: true,
  connectionLimit: 100,
  queueLimit: 0,
});

// let pool;

pool.getConnection((err, conn) => {
  if (err) {
    console.log("error occured");
  } else {
    conn.query("show tables", (err, results, fields) => {
      if (err) {
        console.log(err);
      }

      if (results.length > 0) {
        console.log("Database connected!");
      }
    });
  }
});

module.exports = pool;