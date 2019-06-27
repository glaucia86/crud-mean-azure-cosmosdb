const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// Importando o arquivo: 'database.js'
const database = require('./config/database');

mongoose.Promise = global.Promise;

// ==> Conexão Base de Dados:
mongoose.connect(database.local.localUrl, { useNewUrlParser: true }).then(() => {
  console.log('A Base de dados foi conectada com sucesso!');
}, (err) => {
  console.log(`Erro ao conectar com a Base de Dados...: ${err}`);
  process.exit();
});

// ==> Rotas

const index = require('./routes/index');
const funcionarioRoute = require('./routes/funcionario.routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(morgan('dev'));
app.use(cors());

app.use('/', index);
app.use('/api/', funcionarioRoute);

module.exports = app;
