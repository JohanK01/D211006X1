'use strict'

const express = require('express');
const router = require('./routes')
const app = express();
const port = 8080;
const indexRouter = require('./routes/index')
const carsRouter = require('./routes/cars')

app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/cars', carsRouter);

app.listen(port);
console.log('server upp and running on port: ' + port);