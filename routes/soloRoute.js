const express = require('express');
const mongoose = require('mongoose');
const Artistsregistration = require('../models/soloArtistModel');

const router = express.Router();

//route to formartistist.html
router.get('/SoloArtists', (req, res) => {
    res.render('artistReg');
});

//route to post the data from the solo artist form page
router.post('/SoloArtists', async(req, res) => {
    try {
        const soloReg = new Artistsregistration(req, body);
        console.log(req.body);
        // ArtistsReg.profile_photo = req.file.path
        await soloReg.save();
        res.redirect('/');
    } catch (err) {
        res.status(400).send('something went wrong');
        console.log(err);
    }
});

module.exports = router;