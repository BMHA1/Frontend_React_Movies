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
// module.exports.createRental = async (req, res) => {
//     console.log(req.body)
//     try {
//         const orderCreate = new Rental(req.body);
//         console.log(orderCreate)
//         // orderCreate = { 
//         //     "idUsuario": (populate,
//         //     "idMovies": (populate)[{
//         //         "name": "title",
//         //          "price": 2
//         //     }],
//         //     "totalPrice": {totalprice:function cambiar(e)},
//         //     "rentalDate": Date.now(),
//         //     "expirateDate": Date.now().add(7, "days")    }
//         await Rental.save();
//         res.json({ movie:"hola mundo"});

//     } catch (e) {
//         console.log(e)
//         res.status(400).send(`dont create order ${e}`)
//     }
// }

// Método para ver todos sus pedidos por ID ??  pedidos (solo admin and user )

module.exports.getRentals = async (req, res) => {
    let filter = {} ;
    
    if (req.token.role == 'USER') {
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
        const rental = await Rental.findById(req.query.id);
        if (!rental) {
            res.status(404).json({
                message: 'rental not found'
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

// // Método para borrar películas. a través del ID.

// module.exports.deleteMovie = async (req, res) => {
//     const movie = await Movie.findByIdAndDelete({ _id: req.params.id })
//     res.json({ movie: Movie })
// }

// // Método para modificar un valor de películas a través de una búsqueda por ID.

// module.exports.modifyMovie = async (req, res) => {
//     const movie = await Movie.findByIdAndUpdate({ _id: req.params.id }, req.body)
//     res.json({ movie: Movie })
// }