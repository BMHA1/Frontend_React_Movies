const { query } = require('express');
const { model } = require('mongoose');
const Movie = require('./model');

// Método para crear una película en la BBDD.

module.exports.createMovie = async (req, res) => {
    const movie = new Rental(req.body);
    await movie.save();
    res.json(movie);
}

// Método para buscar todas las películas.

module.exports.getMovieCollection = async (req, res) => {
    const movie = await Movie.find({});
    res.json(movie);
}

// Método para buscar a través de uno de los valores del documento Movies.

module.exports.getMovieByKey = async (req, res) => {
    const query = {};
        if(req.query.title)query.title = req.query.title;
        if(req.query.director)query.director = req.query.director;
        if(req.query.genre)query.genre = req.query.genre;
        if(req.query.year)query.year = req.query.year;
    const movie = await Movie.find(query);
    res.json(movie);
    }

// Método para buscar película por ID.

module.exports.getMovieById = async (req, res) => {
    const movie = await Movie.findById({_id: req.params.id})
    res.json(movie)
}

// Método para borrar películas. a través del ID.

module.exports.deleteMovie = async (req, res) => {
    const movie = await Movie.findByIdAndDelete({_id: req.params.id})
    res.json({movie : Movie})
}

// Método para modificar un valor de películas a través de una búsqueda por ID.

module.exports.modifyMovie = async (req, res) => {
    const movie = await Movie.findByIdAndUpdate({_id: req.params.id}, req.body)
    res.json({movie : Movie})
}