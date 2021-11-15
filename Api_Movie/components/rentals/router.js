const router = require ('express').Router();
const controller = require ('./controller');
const auth = require('../../auth');


router.post('/',auth.checkUser, controller.createRental);
router.get('/:id', auth.checkUser, controller.getRentalId);
router.get('/', auth.checkUser, controller.getRentals);

module.exports = router;