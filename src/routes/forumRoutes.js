const express = require('express');
const router = express.Router();
const { createForumPost, getForumPosts } = require('../controllers/forumControllers');

// Route to create a forum post
router.post('/forum', createForumPost);

// Route to get all forum posts
router.get('/forum', getForumPosts);

module.exports = router;
