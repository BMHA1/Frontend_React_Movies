const router = require ('express').Router();
const controller = require ('./controller.js');
const auth = require('../../auth');

router.get('/:id', auth.checkAdminOrOwn, controller.getUserById); // buscar usario por id
router.get('/', auth.checkUser, controller.getUserByKey); // buscar un usuario por un filtro en particular-solo (ADMIN)
// router.get('/', auth.checkAdminOrOwn, controller.getUserCollection);// buscar todos los usario (SOLO ADMIN) 
router.post('/', controller.createUser); // Crear usario, no necesita 
router.post('/login', controller.loginUser); // Crear usario, no necesita 
router.put('/:id', auth.checkAdminOrOwn, controller.modifyUser); // Modificar asímismo 
router.delete('/:id', auth.checkAdminOrOwn, controller.deleteUser) // Borrar usario asímismo 

module.exports = router;