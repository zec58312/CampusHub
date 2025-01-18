const multer = require('multer');
const path = require('path');

// Define storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads'); // Store files in the 'uploads' folder
  },
  filename: (req, file, cb) => {
      // Generate a unique filename for the uploaded file
    cb(null, Date.now() + '-' + file.originalname);// Adds a timestamp to avoid name collisions
  }
});

// Initialize multer with the storage configuration
const upload = multer({ storage/*,

    //Accept only certain file types (e.g., images, PDFs) with the max size of 5MB

    limits: { fileSize: 5 * 1024 * 1024 }, // Max file size of 5MB
    fileFilter: (req, file, cb) => {
      // Accept only certain file types (e.g., images, PDFs)
      const fileTypes = /pdf|jpeg|jpg|png|gif/;
      const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
      const mimetype = fileTypes.test(file.mimetype);

      if (extname && mimetype) {
        return cb(null, true);
      } else {
        cb('Error: Only image and PDF files are allowed');
      }*/
    });

    //Include more file types such as word, pp, .cvs, audio, video ...
module.exports = upload;