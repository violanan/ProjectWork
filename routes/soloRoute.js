const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const Artistsregistration = require('../models/soloArtistModel');

const router = express.Router();

//route to formartistist.html
router.get('/SoloArtists', (req, res) => {
    res.render('artistReg');
});
//instations of storage
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/new_images');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
var upload = multer({ storage: storage });

//route to post the data from the solo artist form page
router.post(
    '/SoloArtists',
    upload.single('profile_photo'),
    async(req, res) => {
        try {
            const soloReg = new Artistsregistration(req.body);
            soloReg.profile_photo = req.file.path;
            console.log(req.body);
            await soloReg.save();
            res.redirect('/');
        } catch (err) {
            res.status(400).send('something went wrong');
            console.log(err);
        }
    }
);
module.exports = router;

//update route
router.get('/artsitList', async(req, res) => {
    // if (req.session.user) {
    try {
        let artists = await Artistsregistration.find();
        if (req.query.StageName) {
            artist = await Artistsregistration.find({
                StageName: req.query.StageName,
            });
        }
        res.render('list', { artists: artists });
    } catch (err) {
        res.status(400).send('No Artist found!');
        console.log(err);
    }
    // } else {
    //   res.redirect('/login')
    // };
});