const express = require('express')
const router = express.Router()
const {
  getOffers,
  setOffer,
  updateOffer,
  deleteOffer,
  getByIdDetailsOffers,

} = require('../controllers/offersController')

// const{protect} = require('../middleware/authMiddleware')

router.route('/').get( getOffers).post(setOffer)
router.route('/:id').delete( deleteOffer).put( updateOffer).get(getByIdDetailsOffers)


module.exports = router