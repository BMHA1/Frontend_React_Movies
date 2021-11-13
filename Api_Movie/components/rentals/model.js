const mongoose = require('mongoose')
// const User = mongoose.model('User', userSchema)
// const Movie = mongoose.model('Movie', movieSchema)

const RentalSchema = new mongoose.Schema({
    idUser: {
        // type: mongoose.Schema.type.ObjectID,
        // ref: User
    },
    idMovie: [{
        // type: mongoose.Schema.type.ObjectID,
        // ref: Movie,
    }],
    totalPrice:[{type:Number}], // Es un array porque pùede elegir muchas peliculas 
    rentalDate: { type: Number },
    expirationDate: { type: Number },
})

module.exports = mongoose.model('Rental', RentalSchema)
