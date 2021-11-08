const express = require('express');
const mongoose = require('mongoose');
const artistReg = require('../models/soloArtistModel');

const router = express.Router();

//route to formartistist.html
router.get('/SoloArtists', (req, res) => {
    res.render('artistReg');
});

//route to post the data from the solo artist form page
router.post('/SoloArtists', (req, res) => {
    console.log(req.body);
    res.render('artistReg');
    const soloReg = new artistReg(req.body);
    soloReg.save();
});

module.exports = router;