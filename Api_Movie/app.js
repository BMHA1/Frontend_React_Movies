require('dotenv').config();
const express = require ('express');

const routingRental= require('./components/rentals/router')
const routingMovie = require('./components/movie/router.js');
const routingUser = require('./components/user/router.js');
const connection = require('./connection.js');
require('dotenv').config();



connection();

const app = express();

app.use(express.json());
app.use('/users', routingUser);
app.use('/rentals', routingRental)
app.use('/movies', routingMovie);


app.listen(process.env.PORT, () => console.log('Servidor levantado en', process.env.PORT));
