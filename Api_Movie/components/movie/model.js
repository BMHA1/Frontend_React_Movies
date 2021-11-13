const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({


    title: {
        type: String
    //si lo crea un admin siempre y pondria que sea required
    },
    directors: [{
        type: String 
    }],
    genres: [{ 
        type: String
    }],
     actors:[{
      type: String,
       required: true
     }],
    duration: {
        type: Number 
    },
    parental: { 
        type: Number
    },
    year: {
        type: Number 
    },
       price:{ type: Number }

})

module.exports = mongoose.model('Movie', MovieSchema)