const express = require('express')
const router = express.Router()
const multer = require('multer');
const path = require('path')
const {
  getOffers,
  setOffer,
  updateOffer,
  deleteOffer,
  getByIdDetailsOffers,

} = require('../controllers/offersController')
// Multer configuration
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => { 
//     cb(null, './public');
//   },

//   filename: (req, file, cb) =>{
//     const filename = `${Date.now()}_${file.originalname}`;
//     cb(null, filename);

//   }
// });
// const upload = multer({ storage }); // keep this as the Multer instance

const storeImage = multer.diskStorage({
   
  destination: (req, file, cb) => {
      cb(null, 'public/images')
  },
  filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname))
  }
})


const uploadImage = multer({
  storage: storeImage,
  limits: { fileSize: '5000000' },
  fileFilter: (req, file, cb) => {
      const exts = /jpeg|png|jpg|gif/
      const fileType = exts.test(file.mimetype)
      const imgExt = exts.test(path.extname(file.originalname))
      if(fileType && imgExt) return cb(null, true)
      cb(JSON.stringify('file uploded is invalid'))
  }
}).array('images',4)





// const{protect} = require('../middleware/authMiddleware')

router.route('/').get( getOffers).post( uploadImage, setOffer);
router.route('/:id').delete( deleteOffer).put( updateOffer).get(getByIdDetailsOffers)


// router.post('/uploads', upload, (req, res) =>{
//   const{file} = req;
//   res.send({
//     file: file.originalname;
//     path: file.path,

//   });
// }); 


module.exports = router