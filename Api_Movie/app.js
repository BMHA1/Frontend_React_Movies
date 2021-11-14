const express = require ('express');
const routingRental= require('./components/rentals/router')
const routingMovie = require('./components/movie/router.js');
const routingUser = require('./components/user/router.js');
const connection = require('./connection.js');
require('dotenv').config();



connection();

const app = express();

app.use(express.json());
app.use('/user', routingUser);
app.use('/rental', routingRental)
app.use('/movie', routingMovie);


app.listen(4000, () => console.log('Servidor levantado en', 4000));
