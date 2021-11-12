const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: { type: String },
    surname: { type: String },
    mail: { email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']}},
    password: { type: String},
    role: { type: String, default: 'USER'},
    favorites: [{ type: String, ref: 'Movie' }]
})

module.exports = mongoose.model('User', UserSchema)