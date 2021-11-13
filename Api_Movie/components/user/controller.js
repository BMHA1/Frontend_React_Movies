const User = require('./model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Método para crear un usuario.

module.exports.createUser = async (req, res) => {
    /**
     * aqui podemos poner la validacion junto con el hasheo de la contraseña
     * o crear un uno helpper para ello como vosotros veais
     */
    if (!req.body.password) {
        res.json({
            message: 'password is required'
        }, 400);
    } else {
        let data = req.body
        /**
         * aqui vendria el helper para hashear la contraseña no se como lo queris hacer
         * data.password=hash 
         */

        const user = new User(data);
        try {
            await user.save();
            res.json(user);
        } catch (error) {
            if (error.message == 'ValidationError') {
                res.json({
                    message: error.message
                }, 400);
            } else {
                res.json({
                    message: error.message
                }, 500);
            }
            
        }
    }
}

// Método para buscar todos usuarios.

module.exports.getUserCollection = async (req, res) => {
    try {
        if (req.query.name) {
            const users = await User.find({ name: { $regex: new RegExp(req.query.name, 'i') } });
            res.json({
                user: users
            });
        } else {
            res.json({
                users: await User.find()
            });
        }
    } catch (error) {
        console.error(error);
        res.json({
            message: error.message
        }, 500);
    }
}

// Método para buscar a través de uno de los valores del documento Users.

module.exports.getUserByKey = async (req, res) => {
    const query = {};
        if(req.query.name)query.name = req.query.name;
        if(req.query.surname)query.surname = req.query.surname;
        if(req.query.mail)query.mail = req.query.mail;
    
    try {
        const user = await User.find(query);
        res.json(user);
    } catch (error) {
        console.error(error);
        if (error.message == "ValidationError") {
            res.json({
                message: error.message
            }, 400);
        } else {
            res.json({
                message: error.message
            }, 500);
        }
    }
    }

// Método para buscar un usuario por ID.

module.exports.getUserById = async (req, res) => {
    try {
        const movie = await User.findById(req.params.id)
        if (movie) {
            res.json(movie);
        } else {
            res.json({
                message: 'user not found'
            }, 404);
        }
    } catch (error) {
        console.error(error);
        res.json({
            message: error.message
        }, 500);
    }
    
    
    
}

// LOGIN: Buscar el usuario por ID, comparar TOKEN y devolver si es incorrecto.
// const login = (req, res) => {const data = await User.find({})}
/**esta es mi idea para el login */
module.exports.loginUser = async(req, res) => {
    if (!req.body.email || !req.body.password) {
        res.json({
            message: "invalid user or password"
        }, 400);
    } else {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            res.json({
                message: "invalid user or password"
            }, 400);
        } else {
            try {
                const validated = bcrypt.compareSync(req.body.password, user.password);
                if (validated) {
                    const token = jwt.sign({
                        _id: user._id,
                        role: user.role
                    }, process.env.PRIVATE_KEY, {
                        expiresIn: '4h'
                    });
                    res.json(token);
                } else {
                    res.json({
                        message: "invalid user or password"
                    }, 400);
                }
            } catch (error) {
                console.error(error);
                res.json({
                    message: error.message
                }, 500);
            }
        }
    }
}

module.exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            const userDelete = await User.findByIdAndDelete(user);
            // const userDelete = await User.findByIdAndDelete({_id: req.params.id});
            res.json({
                message: 'user deleted'
            });
        } else {
            res.json({
                message: 'user not found'
            }, 404);
        }
    } catch (error) {
        console.error(error);
        res.json({
            message: error.message
        }, 500);
    }
}

module.exports.modifyUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            let data = req.body;

            if (!req.token || req.token.role == 'user') {
                delete data.role;
            }

            if (req.body.password) {
                const salt = bcrypt.genSaltSync(15);
                const hash = bcrypt.hashSync(req.body.password, salt);
                data.password = hash;
            }

            const userUpdate = await User.findByIdAndUpdate(req.params.id, data, { new: true });
            res.json(userUpdate);
        } else {
            res.json({
                message: 'user not found'
            }, 404);
        }
    } catch (error) {
        console.error(error);
        if (error.name == "ValidationError") {
            res.json({
                menssage: error.message
            }, 400);
        } else {
            res.json({
                message: error.message
            }, 500);
        }
    }    
}