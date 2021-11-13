const mongoose = require('mongoose');
// const { Schema } = mongoose;

// const passportlocalMongoose = require('passport-local-mongoose');

const loginSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
    },
    passid: {
        type: String,
        trim: true,
    },
});
module.exports = mongoose.model('logins', loginSchema);