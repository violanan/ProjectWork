const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer')
const ArtistsReg = require('../models/soloArtistModel');

const router = express.Router();

//route to formartistist.html
router.get('/Solo', (req, res) => {
    res.render('artistReg')
});

//instations of storage
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
var upload = multer({ storage: storage })


//route to post the data from the solo artist form page
router.post('/Solo', upload.single('profile_photo'), async(req, res) => {
    console.log(req, body);
    try {
        const soloReg = new soloReg(req.body);
        ArtistsReg.profile_photo = req.file.path
        await soloReg.save();
        res.redirect('/registerArtist/Solo');
    } catch (err) {
        res.status(400).send("something went wrong");
        console.log(err);
    }

});

module.exports = router;