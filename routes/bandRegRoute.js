const express = require('express');
const mongoose = require('mongoose');
const Bandsregn = require('../models/bandModel');

const router = express.Router();

//route to formartistist.html
router.get('/BandsRegistration', (req, res) => {
    res.render('bandreg');
});

//route to post the data from the band form page
router.post('/BandsRegistration', async(req, res) => {
    try {
        const bandsReg = new Bandsregn(req.body);
        console.log(req.body);
        // ArtistsReg.profile_photo = req.file.path
        await bandsReg.save();
        res.redirect('/');
    } catch (err) {
        res.status(400).send('something went wrong');
        console.log(err);
    }
});

module.exports = router;

//update route
// router.post('/BandsRegistration', async(req, res) => {
//     try {
//         const bandsReg = new Bandsregn(req.body);
//         console.log(req.body);
//         // ArtistsReg.profile_photo = req.file.path
//         await bandsReg.save();
//         res.render('/list, {artists : artists}');
//     } catch (err) {
//         res.status(400).send('something went wrong');
//         console.log(err);
//     }
// });