/**
 * Arquivo: src/routes/funcionarioRoute.js
 * Descrição: arquivo responsável pelas rotas da aplicação
 * Data: 23/06/2019
 * Author Glaucia Lemos
 */

const express = require('express');

const router = express.Router();
const controller = require('../controllers/funcionarioController');

// ==> Definindo as rotas do CRUD (api):

router.post('/', controller.post);
// router.get('/', controller.get);
// router.get('/:id', controller.getById);
// router.put('/:id', controller.put);
// router.delete('/:id', controller.delete);

module.exports = router;
