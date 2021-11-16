const express = require('express');
const mongoose = require('mongoose');
const logins = require('../models/loginModel');

const router = express.Router();

//route to login.html

router.get('/loginpage', (req, res) => {
    res.render('loginpage');
});

router.post('/loginpage', async(req, res) => {
    try {
        const logn = new logins(req.body);
        console.log(req.body);
        await logn.save();
        res.redirect('/register');
    } catch (err) {
        res.status(400).send('something went wrong');
        console.log(err);
    }
});

module.exports = router;