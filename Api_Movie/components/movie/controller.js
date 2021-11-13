const { query } = require('express');//esto como no lo usamos podriamos quitarlo 
const { model } = require('mongoose');//esto tambien no se usa
const Movie = require('./model');

// Método para crear una película en la BBDD.

module.exports.createMovie = async (req, res) => {
    const movie = new Movie(req.body);
    try {
        await movie.save();
        res.json(movie);
    } catch (error) {
        console.error(error);
        if (error.name == "ValidationError") {
            res.json({
                menssage: error.message
            }, 400);
        } else {
            res.json({
                message: error.message
            }, 500);
        }
    }
};

// Método para buscar todas las películas.

module.exports.getMovieCollection = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id)
        if (movie) {
            res.json(movie);
        } else {
            res.json({
                message: "movie not found"
            }, 404);
        }
    } catch (error) {
        console.error(error);
        res.json({
            message: error.message
        }, 500);
    }
    /**
     * Guille lo usa por find pero creo que es mejor por id no se como veais 
     * const movie = await Movie.find({});
     * res.json(movie);
     */
    
    
};

// Método para buscar a través de uno de los valores del documento Movies.

module.exports.getMovieByKey = async (req, res) => {

    let query  = {};
    if (req.query.title) {
        query.title = { $regex: new RegExp(req.query.title, 'i') };
    }
    if (req.query.genres) {
        query.genres = { $regex: new RegExp(req.query.genres, 'i') };
    }
    if (req.query.actors) {
        query.actors = { $regex: new RegExp(req.query.actors, 'i') };
    }
    
    if (req.query.actors) {
        query.directors = { $regex: new RegExp(req.query.directors, 'i') };
    }
    
    if (req.query.actors) {
        query.year = { $regex: new RegExp(req.query.year, 'i') };
    }
    try {
        const movies = await Movie.find(query);
        res.json({ movies });
    } catch (error) {
        console.error(error);
        res.json({
            message: error.message
        }, 500);
    }

/**
 * 
 * const query = {};
 *  if(req.query.title)query.title = req.query.title;
 *  if(req.query.director)query.director = req.query.director;
 *  if(req.query.genre)query.genre = req.query.genre;
 *  if(req.query.year)query.year = req.query.year;
 * const movie = await Movie.find(query);
 * res.json(movie);
 */
    
};

// Método para buscar película por ID.

module.exports.getMovieById = async (req, res) => {

    try {
        const movie = await Movie.findById(req.params.id)
        if (movie) {
            res.json(movie);
        } else {
            res.json({
                message: "movie not found"
            }, 404);
        }
    } catch (error) {
        console.error(error);
        res.json({
            message: error.message
        }, 500);
    }

/**
 * 
 * const movie = await Movie.findById({_id: req.params.id})
 * res.json(movie)
 */
};

// Método para borrar películas. a través del ID.

module.exports.deleteMovie = async (req, res) => {
    
    try {
        const movie = await Movie.findById(req.params.id)
        if (movie) {
            const movie = await Movie.findByIdAndDelete(req.params.id);
            res.json({
                message: 'movie deleted'
            });
        } else {
            res.json({
                message: "movie not found"
            }, 404);
        }
    } catch (error) {
        res.json({
            message: error.message
        }, 500);
    }


    /**
     * Guille lo hizo asi, aqui no contempla errores
     * const movie = await Movie.findByIdAndDelete({_id: req.params.id})
     * res.json({movie : Movie})
    */
};

// Método para modificar un valor de películas a través de una búsqueda por ID.

module.exports.modifyMovie = async (req, res) => {

    try {
        const movie = await Movie.findById(req.params.id);
        if (movie) {
            const movieUpdate = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(movieUpdate);
        } else {
            res.json({
                message: "movie not found"
            }, 404);
        }
    } catch (error) {
        console.error(error);
        if (error.name == "ValidationError") {
            res.json({
                menssage: error.message
            }, 400);
        } else {
            res.json({
                message: error.message
            }, 500);
        }
    }

/**
 * aqui no le devuelve el valo de movie y tampoco contempla que exista o no una pelicula 
 * const movie = await Movie.findByIdAndUpdate({_id: req.params.id}, req.body)
 * res.json({movie : Movie})
*/
};