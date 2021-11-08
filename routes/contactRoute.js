const express = require('express');
const mongoose = require('mongoose');
const contactUs = require('../models/contactUsModel');

const router = express.Router();

//route to formartistist.html
router.get('/ContactUs', (req, res) => {
    res.render('contactUs');
});

//route to post the data from the solo artist form page
router.post('/ContactUs', (req, res) => {
    console.log(req.body);
    res.render('contactUs');
    const contact = new contactUs(req.body);
    contact.save();
});

module.exports = router;