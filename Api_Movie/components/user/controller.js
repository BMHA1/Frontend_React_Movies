const User = require('./model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports.createUser = async (req, res) => {
    if (!req.body.password) {
        res.json({
            message: 'password is required'
        }, 400);
    } else {
        let data = req.body;

        if (!req.token || req.token.role == 'user') {
            delete data.role;
        }
        
        const user = new User(data);

        const salt = bcrypt.genSaltSync(8);
        const hash = bcrypt.hashSync(req.body.password, salt);
        user.password = hash;

        try {
            await user.save();
            res.json(user);
        } catch (error) {
            if (error.message == 'ValidationError') {
                res.status(400).json({ message: error.message });
            } else {
                res.status(500).json({ message: error.message });
            }

        }
    }
}

module.exports.getUserCollection = async (req, res) => {
    try {
        if (req.query.name) {
            const users = await User.find({
                name: { $regex: new RegExp(req.query.name, 'i') }
            });
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

module.exports.getUserByKey = async (req, res) => {
    let query = {};

    if (req.query.name) query.name = { $regex: new RegExp(req.query.name, 'i') };
    if (req.query.surname) query.surname = { $regex: new RegExp(req.query.surname, 'i') };
    if (req.query.mail) query.mail = { $regex: new RegExp(req.query.email, 'i') };
    if (req.query.role) query.role = req.query.role;
    
    if (req.token.role == 'user'){
        query._id = req.token._id ;
    }
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

module.exports.getUserById = async (req, res) => {
    const name = req.params.id ;
    try {
        const movie = await User.findById(name)
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

module.exports.loginUser = async (req, res) => {
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
                        expiresIn: '24h'
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
};

module.exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            const userDelete = await User.findByIdAndDelete(user);
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
};

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
};
