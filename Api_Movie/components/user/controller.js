const User = require('./model');

// Método para crear un usuario.

module.exports.createUser = async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json(user);
}

// Método para buscar todos usuarios.

module.exports.getUserCollection = async (req, res) => {
    const user = await User.find({});
    res.json(user);
}

// Método para buscar a través de uno de los valores del documento Users.

module.exports.getUserByKey = async (req, res) => {
    const query = {};
        if(req.query.name)query.name = req.query.name;
        if(req.query.surname)query.surname = req.query.surname;
        if(req.query.mail)query.mail = req.query.mail;
    const user = await User.find(query);
    res.json(user);
    }

// Método para buscar un usuario por ID.

module.exports.getUserById = async (req, res) => {
    const user = await User.find({_id: req.params.id});
    res.json(user);
}

// LOGIN: Buscar el usuario por ID, comparar TOKEN y devolver si es incorrecto.
// const login = (req, res) => {const data = await User.find({})}

module.exports.deleteUser = async (req, res) => {
    const user = await User.findByIdAndDelete({_id: req.params.id})
    res.json({user : User})
}

module.exports.modifyUser = async (req, res) => {
    const user = await User.findByIdAndUpdate({_id: req.params.id}, req.body)
    res.json({user : User})
}