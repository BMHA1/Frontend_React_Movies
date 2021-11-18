const mongoose = require('mongoose')

const RentalSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    movieId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie",
        required: true
    }],
    totalPrice: [{
        type: Number,
        required: true 
    }],
    rentalDate: { 
        type: Date,
        required: true
    },
    expirationDate: {
        type: Date,
        required: true
    },
})

module.exports = mongoose.model('Rental', RentalSchema);