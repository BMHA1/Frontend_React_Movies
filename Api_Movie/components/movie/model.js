const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    title: { type: String },
    director: { type: String },
    genre: { type: String },
    duration: { type: Number },
    parental: { type: Number },
    year: { type: Number },
    price:{ type: Number }
})

module.exports = mongoose.model('Movie', MovieSchema)