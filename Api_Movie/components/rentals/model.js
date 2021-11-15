const mongoose = require('mongoose')

const RentalSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    movieId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie",
        require: true
    }],
    totalPrice: [{ type: Number }], // "funcion que sume todos los precios de las peliculas seleccionada"
    rentalDate: {type: Object},
    expirationDate: {type: Object
    },
})

module.exports = mongoose.model('Rental', RentalSchema)
// const User = mongoose.model('User', userSchema)
// const Movie = mongoose.model('Movie', movieSchema)
