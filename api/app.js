const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();

// ==> Rotas

const index = require('./routes/index');
// const funcionarioRoute = require('./routes/funcionarioRoute');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(morgan('dev'));
app.use(cors());

app.use('/', index);
// app.use('/funcionario', funcionarioRoute);

module.exports = app;
