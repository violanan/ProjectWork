const mongoose = require('mongoose');

const soloArtistSchema = new mongoose.Schema({
    StageName: {
        type: String,
        trim: true,
    },
    ArtId: {
        type: String,
        trim: true,
    },
    passid: {
        type: String,
        trim: true,
        // unique: true; for registration
    },
    email: {
        type: String,
        trim: true,
    },
    DateOfBirth: {
        type: String,
        trim: true,
    },
    FirstName: {
        type: String,
        trim: true,
    },
    LastName: {
        type: String,
        trim: true,
    },
    NIN: {
        type: String,
        trim: true,
    },
    profile_photo: {
        type: String,
        trim: true,
    },
    sex: {
        type: String,
        trim: true,
    },
    location: {
        type: String,
        trim: true,
    },
    Manager: {
        type: String,
        trim: true,
    },
    Artistemail: {
        type: String,
        trim: true,
    },
    Contact: {
        type: String,
        trim: true,
    },
    DateOfStart: {
        type: String,
        trim: true,
    },
    musicCategory: {
        type: String,
        trim: true,
    },
    NumberOfAlbums: {
        type: String,
        trim: true,
    },
    NumberOfSongs: {
        type: String,
        trim: true,
    },
    NumberOfAwards: {
        type: String,
        trim: true,
    },
    descrip: {
        type: String,
        trim: true,
    },
});
module.exports = mongoose.model(
    'ArtistsRegistration Collection',
    soloArtistSchema
);