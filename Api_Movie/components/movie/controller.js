const Movie = require('./model');

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
    if (req.query.directors) {
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
};

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
};

module.exports.deleteMovie = async (req, res) => {
    
    try {
        const movie = await Movie.findById(req.params.id);
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
};

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
};