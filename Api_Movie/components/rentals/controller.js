const Rental = require('./model');

// Método para crear un pedido

module.exports.createRental = async (req, res) => {
    try {
        const orderCreate = new Rental(req.body);
        await Rental.save();
        res.json({ order: orderCreate });
    } catch (e) {
        console.log(e)
        res.status(400).send(`don't create order ${e}`)
    }
}

// Método para ver todos sus pedidos por ID ??  pedidos (solo admin)

module.exports.getMovieCollection = async (req, res) => {
    try {
        const ordersSearch = await Rental.find({})
            .populate({ path: 'idUser', model: 'User' });
        res.status(200).json({list: ordersSearch});
    } catch (e) {
        console.log(e)
        res.status(400).send(`dont create order ${e}`)
    }
}

// Método para buscar a través de uno de los valores del documento Movies.

module.exports.getIvoiceValues = async (req, res)=>{};

// Método para buscar película por ID.



// Método para borrar películas. a través del ID.

module.exports.deleteMovie = async (req, res) => {
    const movie = await Movie.findByIdAndDelete({ _id: req.params.id })
    res.json({ movie: Movie })
}

// Método para modificar un valor de películas a través de una búsqueda por ID.

module.exports.modifyMovie = async (req, res) => {
    const movie = await Movie.findByIdAndUpdate({ _id: req.params.id }, req.body)
    res.json({ movie: Movie })
}