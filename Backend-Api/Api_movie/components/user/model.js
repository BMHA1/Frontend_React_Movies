const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    surname: {
        type: String
    },
    email: {

        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i

    },
    password: {
        type: String
    },
    role: {
        type: String
    },

})

module.exports = mongoose.model('User', UserSchema)