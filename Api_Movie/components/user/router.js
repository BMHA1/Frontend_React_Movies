const router = require ('express').Router();
const controller = require ('./controller.js');
const auth = require('../../auth');

router.post('/', controller.createUser); // Crear usario, no necesita 
router.post('/login', controller.loginUser); // Crear usario, no necesita 
router.get('/:id', controller.getUserById); // buscar usario por id
router.get('/', controller.getUserByKey); // buscar un usuario por un filtro en particular-solo (ADMIN)
router.get('/', controller.getUserCollection);// buscar todos los usario (SOLO ADMIN) 
router.put('/:id', controller.modifyUser); // Modificar asímismo 
router.delete('/:id', controller.deleteUser) // Borrar usario asímismo 

module.exports = router;