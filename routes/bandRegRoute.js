const express = require('express');
const mongoose = require('mongoose');
const Bandsregn = require('../models/bandModel');

const router = express.Router();

//route to formartistist.html
router.get('/BandsRegistration', (req, res) => {
    res.render('bandreg');
});

//route to post the data from the solo artist form page
router.post('/BandsRegistration', (req, res) => {
    console.log(req.body);
    res.render('bandReg');
    const bandValue = new Bandsregn(req.body);
    bandValue.save();
});

module.exports = router;