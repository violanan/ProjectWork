const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const Bandsregn = require('../models/bandModel');

const router = express.Router();

//route to formartistist.html
router.get('/BandsRegistration', (req, res) => {
    res.render('bandreg');
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

//route to post the data from the band form page
router.post(
    '/BandsRegistration',
    upload.single('profile_photo'),
    async(req, res) => {
        try {
            const bandsReg = new Bandsregn(req.body);
            bandsReg.profile_photo = req.file.path;
            console.log(req.body);
            await bandsReg.save();
            res.redirect('/');
        } catch (err) {
            res.status(400).send('something went wrong');
            console.log(err);
        }
    }
);

module.exports = router;

//update route
router.get('/bandList', async(req, res) => {
    // if (req.session.user) {
    try {
        let bands = await Bandsregn.find();
        if (req.query.BandName) {
            band = await Bandsregn.find({
                BandName: req.query.BandName,
            });
        }
        res.render('list', { bands: bands });
    } catch (err) {
        res.status(400).send('No bands found!');
        console.log(err);
    }
    // } else {
    //   res.redirect('/login')
    // };
});