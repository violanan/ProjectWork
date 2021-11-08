const mongoose = require('mongoose');
// const { Schema } = mongoose;

// const passportlocalMongoose = require('passport-local-mongoose');

const contactUsSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
    },

    email: {
        type: String,
        trim: true,
    },
    descrip: {
        type: String,
        trim: true,
    },
});
module.exports = mongoose.model('ContactUs Collection', contactUsSchema);
// module.exports = Mongoose.model('ContactUs', contactUs);