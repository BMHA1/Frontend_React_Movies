const router = require ('express').Router();

const controller = require ('./controller.js');
const auth = require('../../auth');

router.post('/', controller.createUser);
router.get('/:id', auth.checkUser, controller.getUserById);
router.get('/', auth.checkUser, controller.getUserByKey);
router.get('/', controller.getUserCollection);
router.put('/:id', controller.modifyUser);
router.delete('/:id', controller.deleteUser)

module.exports = router;