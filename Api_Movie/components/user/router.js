const router = require ('express').Router();

const controller = require ('./controller.js');
const auth = require('../../auth');

router.post('/', controller.createUser);
router.get('/:id', controller.getUserById);
router.get('/', controller.getUserByKey);
router.get('/', controller.getUserCollection);
router.put('/:id', controller.modifyUser);
router.delete('/:id', controller.deleteUser)

module.exports = router;