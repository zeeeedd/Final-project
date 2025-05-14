
const path = require('path')
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

     if(req.body.title && req.body.description && req.files.length > 0) {
        const img = [];
        req.files.forEach((filePath) => {
          const pathOne = filePath.path.split(path.sep);
          const imgPath = "/" + pathOne[1] + "/" + pathOne[2];
          img.push(imgPath);
        });
        const offer = await Offer.create({
            title: req?.body?.title,
            description: req?.body?.description,
            image: img[0]
        })
        res.status(200).json(offer)
    }
    else{
        res.status(400)
        throw new Error('Please add a title and description field')
    }

    //  const image = req.file?.filename || '';
    //  console.log(req) 
     

    

    

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

   if (req.file) {
      offer.image = req.file.filename;
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
         await offer.deleteOne();

        res.status(200).json({ id: req.params.id})

});




// @desc   GET offer by ID
// @route   GET /api/offers:/id
// @access  Private

const getByIdDetailsOffers = asyncHandler(async(req, res) =>{
   
    
    const detailsOffer = await Offer.findById(req.params.id)
    
    res.status(200).json(detailsOffer)

console.log('detaolsOffer',detailsOffer);



})
module.exports = {
    getOffers,
    setOffer,
    updateOffer,
    deleteOffer,
    getByIdDetailsOffers,
}