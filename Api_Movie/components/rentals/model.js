const mongoose = require('mongoose')

const RentalSchema = new mongoose.Schema({
    idUsuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    idMovie: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie",
        require: true
    }],
    totalPrice: [{ type: Number }], // "funcion que sume todos los precios de las peliculas seleccionada"
    rentalDate: { type: Date },
    expirationDate: { type: Date },
})











module.exports = mongoose.model('Rental', RentalSchema)
// const User = mongoose.model('User', userSchema)
// const Movie = mongoose.model('Movie', movieSchema)
