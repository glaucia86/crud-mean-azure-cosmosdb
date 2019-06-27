/**
 * Arquivo: src/routes/funcionario.routes.js
 * Descrição: arquivo responsável pelas rotas da aplicação
 * Data: 23/06/2019
 * Author Glaucia Lemos
 */

const express = require('express');

const router = express.Router();
const funcionarioController = require('../controllers/funcionario.controller');

// ==> Rota Criar Novo 'Funcionario': (POST): localhost:8000/api/funcionario/
router.post('/funcionario', funcionarioController.create);

// ==> Rota Selecionar Todos 'Funcionarios': (GET): localhost:8000/api/funcionarios/
router.get('/funcionarios', funcionarioController.findAll);

// ==> Rota Selecionar 'Funcionario' pelo 'Id': (GET): localhost:8000/api/funcionario/:id
router.get('/funcionario/:id', funcionarioController.findById);

module.exports = router;
