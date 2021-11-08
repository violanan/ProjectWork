const mongoose = require('mongoose');

const bandSchema = new mongoose.Schema({
    BandName: {
        type: String,
        trim: true,
    },
    BandId: {
        type: String,
        trim: true,
    },
    passid: {
        type: String,
        trim: true,
        // unique: true; for registration
    },
    Bandemail: {
        type: String,
        trim: true,
    },
    BandSlogan: {
        type: String,
        trim: true,
    },
    BandOwner: {
        type: String,
        trim: true,
    },
    BandHome: {
        type: String,
        trim: true,
    },
    members: {
        type: String,
        trim: true,
    },
    profile_photo: {
        type: String,
        trim: true,
    },
    DateOfFormation: {
        type: String,
        trim: true,
    },
    BandContact: {
        type: String,
        trim: true,
    },
    musicCategory: {
        type: String,
        trim: true,
    },
    SpecifyCategory: {
        type: String,
        trim: true,
    },
    NumberOfAlbums: {
        type: String,
        trim: true,
    },
    descrip: {
        type: String,
        trim: true,
    },
});
module.exports = mongoose.model('BandsReg', bandSchema);