const Rental = require('./model');
const Movie = require('../movie/model');
const moment = require('moment');

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