const router = require ('express').Router();
const controller = require ('./controller.js');

router.post(('/'), controller.createMovie);
router.get(('/:id'), controller.getMovieById);
router.get(('/'), controller.getMovieByKey);
router.get(('/'), controller.getMovieCollection);
router.put(('/:id'), controller.modifyMovie);
router.delete(('/:id'), controller.deleteMovie);

module.exports = router;