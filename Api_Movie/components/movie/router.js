const router = require ('express').Router();

const controller = require ('./controller.js');
const auth = require('../../auth');


router.post('/',auth.checkAdminOrOwn, controller.createMovie);
router.get('/:id', auth.checkUser, controller.getMovieById);
router.get('/', auth.checkUser, controller.getMovieByKey);
router.put('/:id', auth.checkAdminOrOwn, controller.modifyMovie);
router.delete('/:id', auth.checkAdminOrOwn, controller.deleteMovie);


module.exports = router;