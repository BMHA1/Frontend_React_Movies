const { Router } = require('express');
const express = require ('express');
const app = express();
const jwt = require('jsonwebtoken');
const routingMovie = require('./components/movie/router.js')
const routingUser = require('./components/user/router.js')
const connection = require('./connection.js')

connection()

app.use(express.json())

app.use('/api/movie/', routingMovie)
app.use('/api/user/', routingUser)

app.listen(3000, () => console.log('Servidor levantado en 3000.'))


// const token = jwt.sign({foo: 'bar'}, 'aswdfghjuko+854lokijhgfds');
// console.log(token)