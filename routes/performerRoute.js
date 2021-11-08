const express = require('express');
const mongoose = require('mongoose');
const performingArtsReg = require('../models/performingModel');

const router = express.Router();

//route to formartistist.html
router.get('/performingArtists', (req, res) => {
    res.render('performingArtsReg');
});

//route to post the data from the solo artist form page
router.post('/performingArtists', (req, res) => {
    console.log(req.body);
    res.render('performingArtsReg');
    const perfValue = new performingArtsReg(req.body);
    perfValue.save();
});

module.exports = router;