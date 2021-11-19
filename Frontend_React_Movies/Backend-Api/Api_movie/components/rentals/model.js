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
<<<<<<< HEAD:Api_Movie/components/rentals/model.js
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
=======
    totalPrice: [{ type: Number }], // "funcion que sume todos los precios de las peliculas seleccionada"
    rentalDate: {type: Object},
    expirationDate: {type: Object
>>>>>>> be916ae0484730d21ce3fa3e7a29c0a6cf80780f:Frontend_React_Movies/Backend-Api/Api_movie/components/rentals/model.js
    },
})

module.exports = mongoose.model('Rental', RentalSchema);