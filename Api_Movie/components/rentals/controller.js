const Rental = require('./model');

// Método para crear un pedido

module.exports.createRental = async (req, res) => {
    console.log(req.body)
    try {
        const orderCreate = new Rental(req.body);
        console.log(orderCreate)
        // orderCreate = { 
        //     "idUsuario": (populate,
        //     "idMovies": (populate)[{
        //         "name": "title",
        //          "price": 2
        //     }],
        //     "totalPrice": {totalprice:function cambiar(e)},
        //     "rentalDate": Date.now(),
        //     "expirateDate": Date.now().add(7, "days")    }
        await Rental.save();
        res.json({ movie:"hola mundo"});

    } catch (e) {
        console.log(e)
        res.status(400).send(`dont create order ${e}`)
    }
}

// Método para ver todos sus pedidos por ID ??  pedidos (solo admin)

// module.exports.getMovieCollection = async (req, res) => {
// // const userId = recibir por query.params=id
// // order.finAll({
// //     idUsuario: userID
// // })

// }

// // Método para buscar a través de uno de los valores del documento Movies.



// // Método para buscar película por ID.



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