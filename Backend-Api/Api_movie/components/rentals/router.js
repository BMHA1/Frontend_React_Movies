const router = require ('express').Router();
const controller = require ('./controller');
const auth = require('../../auth');


router.post('/', controller.createRental);
router.get('/:id', controller.getRentalId);
router.get('/', controller.getRentals);

module.exports = router;