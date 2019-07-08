/* eslint-disable prefer-arrow-callback */
/**
 * Arquivo: src/controllers/funcionario.controller.js
 * Descrição: arquivo responsável pelo CRUD da classe: 'Funcionário'
 * Data: 23/06/2019
 * Author Glaucia Lemos
 */

const Funcionario = require('../models/funcionario.model');

// Async & Await:

// ==> Método responsável por criar um novo 'Funcionario':
exports.create = async (req, res) => {
  const novoFuncionario = new Funcionario(req.body);
  const funcionario = await novoFuncionario.save();
  res.status(200).send({ message: 'Funcionário(a) criado(a) com sucesso!', funcionario });
};

// ==> Método responsável por selecionar todos os 'Funcionários':
exports.findAll = async (req, res) => {
  const funcionarios = await Funcionario.find({});
  res.status(200).send(funcionarios);
};

// ==> Método responsável por selecionar 'Funcionário' pelo 'Id':
exports.findById = async (req, res) => {
  const funcionario = await Funcionario.findById(req.params.id);
  res.status(200).send(funcionario);
};

// ==> Método responsável por atualizar 'Funcionário' pelo 'Id':
exports.update = async (req, res) => {
  // Validação de campos vazios:
  if (!req.body.nomeFuncionario || !req.body.cargo || !req.body.numeroIdentificador) {
    return res.status(400).send({ message: 'Os campos não podem ser vazios' });
  }

  const funcionario = await Funcionario.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).send({ message: 'Funcionário(a) atualizado(a) com sucesso!', funcionario });
};

// Método responsável por deletar 'Funcionário pelo 'Id':
exports.delete = async (req, res) => {
  const funcionario = await Funcionario.findByIdAndRemove(req.params.id);
  res.status(200).send({ message: 'Funcionário(a) excluído com sucesso!', funcionario });
};
