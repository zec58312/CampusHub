const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const documentRoutes = require('./routes/documentRoutes');
const multer = require('multer');
const forumRoutes = require('./routes/forumRoutes');

// Initialize the server
const app = express();

// Middleware
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/documents', documentRoutes);
app.use(forumRoutes);

// Multer setup for file uploads
const upload = multer({ dest: 'uploads/' });
app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded');
});

//add multer storage for files to be saved unnder user-given name

module.exports = app;

