const Rental = require('./model');
const Movie = require('../movie/model');
const moment = require('moment');

// Método para crear un pedido

module.exports.createRental = async (req, res) => {
    const userId = req.token._id ;
    const rentalData = req.body; //peliculasId
    const rentalDate = moment() ;
    const expirationDate = rentalDate.clone().add(8, "days");
    const precioSuma = 0 ;
//recorro array rentaldata de ahi cojo el precio de cada una peliculas buscadas hacemos un reduce del precio de cada pelicula

    try {

        for (let i = 0; i < rentalData.length; i++) {
            const element = rentalData[i];
            const cadaPelicula = await Movie.findById(element);
            for (let o = 0; o < rentalData.length; o++) {
                const busquedaIgual = rentalDatal[o];
                if (busquedaIgual == element) {
                    res.status(404).json({message:'a movie is duplicate'})
                }
                
            }
            precioSuma += cadaPelicula.precio
        }
        const newRental = new Rental({
            userId: userId,
            moviesID: rentalData,
            totalPrice: precioSuma, 
            rentalDate: rentalDate,
            expirationDate: expirationDate
        });

        await newRental.save();

    } catch (error) {
        
    }
};

// Método para ver todos sus pedidos por ID ??  pedidos (solo admin and user )

module.exports.getRentals = async (req, res) => {
    let filter = {} ;
    
    if (req.token.role == 'user') {
        filter.userId = req.token._id        
    }

    try {
        const rentals = await Rental.find(filter);
        res.json(rentals);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

// // Método para buscar rental id 

module.exports.getRentalId = async (req, res) => {

    try {
        
        const rental = await Rental.findById(req.params.id);

        if (!rental) {
            res.status(404).json({
                message: 'rental not found'
            });
        } else if (rental.userId !== req.token._id) {
            res.status(403).json({
                message: 'user not authorized'
            });
        } else {
            res.json(rental);
        }

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};