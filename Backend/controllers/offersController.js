

const asyncHandler = require('express-async-handler')
const Offer = require('../models/offersModels')


// @desc   Get offer
// @route   GET /api/offers
// @access  Private
const getOffers = asyncHandler(async (req, res) => {

      const offers = await Offer.find()
    res.status(200).json(offers)

})  

// @desc   set offer
// @route   POST /api/offers
// @access  Private


const setOffer = asyncHandler(async (req, res) => {
    
     console.log('reqq',req?.body?.title);
     

    if(!req?.body?.title && req?.body?.description ){
        res.status(400)
        throw new Error('Please add a title and description field')
    }

    const offer = await Offer.create({
        title: req?.body?.title,
        description: req?.body?.description,
    })
    res.status(200).json(offer)

})


// @desc   Update offer
// @route   PUT /api/offers:/id
// @access  Private


const updateOffer = asyncHandler(async (req, res) => {
    const offer = await Offer.findById(req.params.id)
    if(!offer)  {
        res.status(400)
        throw new Error('Offer not found')

    }
    const updatedOffer = await Offer.findByIdAndUpdate(req.params.id, req.body, {
             new: true,
         })
         res.status(200).json(updatedOffer)
     
     
     })
     

// @desc   Delete offer
// @route   DELETE /api/offers:/id
// @access  Private


const deleteOffer = asyncHandler(async(req, res) =>{
   
    
        const offer = await Offer.findById(req.params.id)
        if(!offer)  {
            res.status(400)
            throw new Error('Offer not found')
    
        }

        await offer.remove

        res.status(200).json({ id: req.params.id})

})

const getByIdDetailsOffers = asyncHandler(async(req, res) =>{
   
    
    const detaolsOffer = await Offer.findById(req.params.id)
    
    res.status(200).json(detaolsOffer)

console.log('detaolsOffer',detaolsOffer);



})
module.exports = {
    getOffers,
    setOffer,
    updateOffer,
    deleteOffer,
    getByIdDetailsOffers,
}