const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const performingReg = require('../models/performingModel');

const router = express.Router();

//route to performingartistist.html
router.get('/performingArtists', (req, res) => {
    res.render('performingArtsReg');
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

//route to post the data from the performingvartist form page
router.post(
    '/performingArtists',
    upload.single('profile_photo'),
    async(req, res) => {
        try {
            const performer = new performingReg(req.body);
            performer.profile_photo = req.file.path;
            console.log(req.body);
            await performer.save();
            res.redirect('/Register');
        } catch (err) {
            res.status(400).send('something went wrong');
            console.log(err);
        }
    }
);

module.exports = router;