const path = require('path');
const asyncHandler = require('express-async-handler');
const Offer = require('../models/offersModels');

// GET all offers
const getOffers = asyncHandler(async (req, res) => {
  const offers = await Offer.find();
  res.status(200).json(offers);
});

// GET offer by ID
const getOfferById = asyncHandler(async (req, res) => {
  const offer = await Offer.findById(req.params.id);
  if (!offer) throw new Error('Offer not found');
  res.status(200).json(offer);
});

// CREATE new offer
const createOffer = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description || !req.files || req.files.length === 0) {
    res.status(400);
    throw new Error('All fields and an image are required');
  }

  const imgPath = req.files[0].path.replace(/\\/g, '/'); // normalize Windows path
  const offer = await Offer.create({ title, description, image: imgPath });
  res.status(201).json(offer);
});

// UPDATE offer
const updateOffer = asyncHandler(async (req, res) => {
  const offer = await Offer.findById(req.params.id);
  if (!offer) throw new Error('Offer not found');

  const { title, description } = req.body;
  if (req.files && req.files.length > 0) {
    const imgPath = req.files[0].path.replace(/\\/g, '/');
    offer.image = imgPath;
  }

  offer.title = title || offer.title;
  offer.description = description || offer.description;

  const updated = await offer.save();
  res.status(200).json(updated);
});

// DELETE offer
const deleteOffer = asyncHandler(async (req, res) => {
  const offer = await Offer.findById(req.params.id);
  if (!offer) throw new Error('Offer not found');
  await offer.deleteOne();
  res.status(200).json({ message: 'Offer deleted', id: req.params.id });
});

module.exports = {
  getOffers,
  getOfferById,
  createOffer,
  updateOffer,
  deleteOffer
};
