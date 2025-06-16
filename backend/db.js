const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');

let db;

const initDB = async () => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
  });

  await connection.query(
    `CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\``
  );
  console.log(`Database '${process.env.DB_NAME}' ready`);

  db = await mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });

  await db.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL
    )
  `);
  console.log('Users table ensured');

  const [rows] = await db.query('SELECT COUNT(*) as count FROM users');
  if (rows[0].count === 0) {
    const hashedPassword = await bcrypt.hash('admin123', 10);
    await db.query('INSERT INTO users (email, password) VALUES (?, ?)', [
      'admin@example.com',
      hashedPassword,
    ]);
    console.log('Default admin user inserted');
  }
};

const getDB = () => db;

module.exports = {
  initDB,
  getDB,
};
