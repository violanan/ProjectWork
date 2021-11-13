const express = require('express');
const mongoose = require('mongoose');
const logins = require('../models/loginModel');

const router = express.Router();

//route to login.html

router.get('/loginpage', (req, res) => {
    res.render('loginpage');
});

router.post('/loginpage', async(req, res) => {
    console.log(req.body);
    try {
        const logn = new logins(req.body);
        await logn.save();
        res.redirect('/Registration');
    } catch (err) {
        res.status(400).send('something went wrong');
        console.log(err);
    }
});

module.exports = router;