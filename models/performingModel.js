const mongoose = require('mongoose');

const performingSchema = new mongoose.Schema({
    Category: {
        type: String,
        trim: true,
    },
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
    Management: {
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

    NumberOfskits: {
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
module.exports = mongoose.model('performingReg', performingSchema);