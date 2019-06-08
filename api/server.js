/* eslint-disable quotes */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable space-before-function-paren */
/**
 * Arquivo: server.js
 * Descrição: arquivo responsável por toda a configuração da aplicação.
 * Data: 02/06/2019
 * Author: Glaucia Lemos
 */

// ==> Exemplo sem realizar o SOLID:

/* const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(morgan('dev'));
app.use(cors());

const port = process.env.PORT || 8000;

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Entrei aqui!' });
});

app.use('/api', router);

app.listen(port);
console.log("Aplicação executando na porta ", port); */

// ==> Exemplo usando o SOLID:

const app = require('./src/app');

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("Aplicação executando na porta ", port);
});
