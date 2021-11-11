const express = require('express');
const mongoose = require('mongoose');
const performingReg = require('../models/performingModel');

const router = express.Router();

//route to formartistist.html
router.get('/performingArtists', (req, res) => {
    res.render('performingArtsReg');
});

//route to post the data from the solo artist form page
router.post('/performingArtists', async(req, res) => {
    try {
        const performer = new performingReg(req.body);
        console.log(req.body);
        // ArtistsReg.profile_photo = req.file.path
        await performer.save();
        res.redirect('/');
    } catch (err) {
        res.status(400).send('something went wrong');
        console.log(err);
    }
});

module.exports = router;