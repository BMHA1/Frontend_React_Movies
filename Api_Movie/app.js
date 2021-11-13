require('dotenv').config();

const express = require ('express');

// const jwt = require('jsonwebtoken');
const routingRental= require('./components/rentals/router')
const routingMovie = require('./components/movie/router.js');
const routingUser = require('./components/user/router.js');
const connection = require('./connection.js');

connection();

const app = express();

app.use(express.json());
app.use('/rental', routingRental)
app.use('/movie', routingMovie); //@BMHA1 PODRIAMOS DEJAR EL EMDPOINT SIN API PERO COMO VEAIS
app.use('/user', routingUser);

app.listen(process.env.PORT, () => console.log('Servidor levantado en', process.env.PORT));


// const token = jwt.sign({foo: 'bar'}, 'aswdfghjuko+854lokijhgfds');
// console.log(token)