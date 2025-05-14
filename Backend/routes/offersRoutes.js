const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const {
  getOffers,
  getOfferById,
  createOffer,
  updateOffer,
  deleteOffer
} = require('../controllers/offersController');

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'public/images'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|svg/;
    const isValid = allowedTypes.test(file.mimetype) && allowedTypes.test(path.extname(file.originalname).toLowerCase());
    cb(isValid ? null : new Error('Only image files are allowed'), isValid);
  }
}).array('images', 1); // 1 image max

// Routes
router.get('/', getOffers);
router.get('/:id', getOfferById);
router.post('/', upload, createOffer);
router.put('/:id', upload, updateOffer);
router.delete('/:id', deleteOffer);

module.exports = router;
