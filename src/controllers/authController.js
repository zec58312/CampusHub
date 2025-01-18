const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../config/db');

const SECRET_KEY = process.env.JWT_SECRET_KEY; // Load from .env file

// User registration
exports.registerUser = async (req, res) => {
  const { username, password, jmbag } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      'INSERT INTO users (username, password, jmbag) VALUES ($1, $2, $3) RETURNING id',
      [username, hashedPassword, jmbag]
    );
    res.status(201).json({ userId: result.rows[0].id });
  } catch (err) {
    res.status(500).send('Error registering user');
  }
};

// User login
exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    if (user.rows.length === 0) return res.status(400).json({ message: 'User not found' });

    const validPassword = await bcrypt.compare(password, user.rows[0].password);
    if (!validPassword) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ userId: user.rows[0].id }, SECRET_KEY);
    res.json({ token });
  } catch (err) {
    res.status(500).send('Error logging in');
  }
};
