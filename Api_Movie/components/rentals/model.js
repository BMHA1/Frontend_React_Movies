const mongoose = require('mongoose')

const RentalSchema = new mongoose.Schema({
    idUser: { type: mongoose.Schema.type.ObjectID,
        ref: 'User'},
    idMovie: [{
        type: mongoose.Schema.type.ObjectID,
        ref: 'Movie',
    }], // Es un array porque pùede elegir muchas peliculas 
    rentalDate: { type: Number },
    expirationDate: { type: Number },
})

module.exports = mongoose.model('Rental', RentalSchema)