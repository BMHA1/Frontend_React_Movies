require('dotenv').config()

const mongoose = require ('mongoose');

module.exports = () => {
    mongoose.connect(process.env.DB_HOST,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

    .then(() => console.log('Conectado a la base de datos.'))
    .catch(e => console.log('ERROR: No conectado a la base de datos.', e))
}


