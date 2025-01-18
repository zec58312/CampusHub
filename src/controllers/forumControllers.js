// forumControllers.js

const pool = require('../config/db'); // Import the database connection

// Create a forum post
const createForumPost = async (req, res) => {
  const { title, content, authorid } = req.body;
  try {
    await pool.query(
      'INSERT INTO forum_posts (title, content, authorid) VALUES ($1, $2, $3)',
      [title, content, authorid]
    );
    res.status(201).send('Forum post created successfully');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error creating forum post');
  }
};

// Get all forum posts
const getForumPosts = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM forum_posts');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error fetching forum posts');
  }
};

module.exports = { createForumPost, getForumPosts };
