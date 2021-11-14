const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    surname: {
        type: String
    },
    mail: {

        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i, 'Please fill a valid email address']

    },
    password: {
        type: String
    },
    role: [{
        type: String
    }],

})

module.exports = mongoose.model('User', UserSchema)