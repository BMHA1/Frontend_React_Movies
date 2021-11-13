const router = require ('express').Router();

const controller = require ('./controller.js');
// const auth = require('../auth.js');

router.post('/', controller.createMovie);
router.get('/:id', controller.getMovieById);
router.get('/', controller.getMovieByKey);
router.put('/:id', controller.modifyMovie);
router.delete('/:id', controller.deleteMovie);

module.exports = router;