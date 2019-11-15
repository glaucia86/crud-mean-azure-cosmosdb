/* eslint-disable import/no-unresolved */
// @ts-nocheck
/**
 * Arquivo: src/routes/funcionario.routes.js
 * Descrição: arquivo responsável pelas rotas da aplicação
 * Data: 23/06/2019
 * Author Glaucia Lemos
 */

// const express = require('express');

const router = require('express-promise-router')();
const funcionarioController = require('../controllers/funcionario.controller');

// ==> Rota Criar Novo 'Funcionario': (POST): localhost:8000/api/funcionarios/
router.post('/funcionarios', funcionarioController.create);

// ==> Rota Selecionar Todos 'Funcionarios': (GET): localhost:8000/api/funcionarios/
router.get('/funcionarios', funcionarioController.findAll);

// ==> Rota Selecionar 'Funcionario' pelo 'Id': (GET): localhost:8000/api/funcionarios/:id
router.get('/funcionarios/:id', funcionarioController.findById);

// ==> Rota Atualizar 'Funcionario' pelo 'Id': (UPDATE): localhost:8000/api/funcionarios/:id
router.put('/funcionarios/:id', funcionarioController.update);

// ==> Rota Deletar 'Funcionario' pelo 'Id': (DELETE): localhost:8000/api/funcionarios/:id
router.delete('/funcionarios/:id', funcionarioController.delete);

module.exports = router;
