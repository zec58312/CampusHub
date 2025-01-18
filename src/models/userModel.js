const pool = require('../config/db'); // Import the database connection

// Register a user
const registerUser = async (username, hashedPassword, jmbag) => {
  try {
    const result = await pool.query(
      'INSERT INTO users (username, password, jmbag) VALUES ($1, $2, $3) RETURNING id',
      [username, hashedPassword, jmbag]
    );
    return result.rows[0].id; // Return the user's id
  } catch (err) {
    console.error(err.message);
    throw new Error('Error registering user');
  }
};

// Find user by username
const findUserByUsername = async (username) => {
  try {
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    return result.rows[0]; // Return the user object
  } catch (err) {
    console.error(err.message);
    throw new Error('Error finding user');
  }
};

module.exports = { registerUser, findUserByUsername };
