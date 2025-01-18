const pool = require('../config/db');

exports.uploadDocument = async (req, res) => {
  const { title, description, authorid, ispublic } = req.body;
  const fileUrl = req.file.path; // Multer sets this
  try {
    await pool.query(
      'INSERT INTO documents (title, description, file_url, uploaded_by, visibility) VALUES ($1, $2, $3, $4, $5)',
      [title, description, fileUrl, authorid, ispublic]
    );
    res.status(201).send('Document uploaded successfully');
  } catch (err) {
    res.status(500).send('Error uploading document');
  }
};
