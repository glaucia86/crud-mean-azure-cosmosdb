/**
 * Arquivo: src/routes/funcionario.routes.js
 * Descrição: arquivo responsável pelas rotas da aplicação
 * Data: 23/06/2019
 * Author Glaucia Lemos
 */

const express = require('express');

const router = express.Router();
const funcionarioController = require('../controllers/funcionario.controller');

// ==> Rota Criar Novo 'Funcionario': (POST): localhost:8000/funcionario/create
router.post('/create', funcionarioController.create);

// ==> Rota Selecionar Todos 'Funcionarios': (GET): localhost:8000/funcionario/findAll
router.get('/findAll', funcionarioController.findAll);

module.exports = router;
