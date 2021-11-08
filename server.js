//Dependencies
const express = require('express');
const path = require('path');

const mongoose = require('mongoose');
require('dotenv').config();

const contactRoute = require('./routes/contactRoute');
const soloRoute = require('./routes/soloRoute');
const performerRoute = require('./routes/performerRoute');
const bandRegRoute = require('./routes/bandRegRoute');

// const ContactUs = require('./models/contactUsModel');
const registerArtistRoutes = require('./models/soloArtistModel');

//instatations
const app = express();
const port = 4030;

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
});

mongoose.connection
    .on('open', () => {
        console.log('Mongoose connection open');
    })
    .on('error', (err) => {
        console.log(`Connection error: ${err.message}`);
    });

//Configurations
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public/images', express.static((__dirname, 'images')));


//routes(all pages should have routes)
//routes for dynamic pages
app.use('/registerArtist', registerArtistRoutes);
app.use('/', contactRoute);
app.use('/', soloRoute);
app.use('/', performerRoute);
app.use('/', bandRegRoute);

//routes to static pages
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});
app.get('/Solo', (req, res) => {
    console.log(req.body);
    res.sendFile(__dirname + '/views/SoloArtists.html');
});
app.get('/Bands', (req, res) => {
    console.log(req.body);
    res.sendFile(__dirname + '/views/Bands.html');
});
// app.get('/ContactUs', (req, res) => {
//     res.sendFile(__dirname + '/views/contactUs.html');
// });
app.get('/Performers', (req, res) => {
    console.log(req.body);
    res.sendFile(__dirname + '/views/performingArtists.html');
});
app.get('/AboutUs', (req, res) => {
    console.log(req.body);
    res.sendFile(__dirname + '/views/aboutUs.html');
});
app.get('/Login', (req, res) => {
    console.log(req.body);
    res.sendFile(__dirname + '/views/login.html');
});
app.get('/Registration', (req, res) => {
    console.log(req.body);
    res.sendFile(__dirname + '/views/registrationpages.html');
});

// app.get('/', (req, res) => {});

// app.get('*', () => {
//     res.status(404).send('This route doent exist');
// }); //must be the last route on the server page

//server
app.listen(port, () => {
    console.log(`listening: ${port}`);
});