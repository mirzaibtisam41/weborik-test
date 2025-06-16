const {getDB} = require('../db');
const bcrypt = require('bcryptjs');

const findUserByEmail = async (email) => {
  const db = getDB();
  const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0];
};

const validatePassword = (inputPassword, hashedPassword) => {
  return bcrypt.compare(inputPassword, hashedPassword);
};

module.exports = {
  findUserByEmail,
  validatePassword,
};
