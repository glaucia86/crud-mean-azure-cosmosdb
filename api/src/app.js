const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
// const path = require('path');

// Importando o arquivo: 'database.js'
const database = require('./config/database');

const app = express();

// ==> Conexão Base de Dados:
mongoose.connect(database.local.localUrl, { useNewUrlParser: true }).then(() => {
  console.log('A Base de dados foi conectada com sucesso!');
}, (err) => {
  console.log(`Erro ao conectar com a Base de Dados...: ${err}`);
});

// ==> Rotas

const index = require('./routes/index');
const funcionarioRoute = require('./routes/funcionarioRoute');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(morgan('dev'));
app.use(cors());

app.use('/', index);
app.use('/funcionario', funcionarioRoute);

module.exports = app;
