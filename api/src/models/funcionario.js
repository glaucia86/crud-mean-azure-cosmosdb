/**
 * Arquivo: models/funcionario.js
 * Descrição: arquivo responsável pelo modelo da classe 'Funcionario'
 * Data: 23/06/2019
 * Author Glaucia Lemos
 */

/**
 * Classe: Funcionario
 *  id: (number - guid gerado pelo MongoDb)
 *  nomeFuncionario: String
 *  cargo: String
 *  numeroIdentificador: Number
 */
const mongoose = require('mongoose');

// const Schema = mongoose.Schema;
const { Schema } = mongoose;

const FuncionarioSchema = new Schema({
  nomeFuncionario: { type: String, required: true },
  cargo: { type: String, required: true },
  numeroIdentificador: { type: Number, required: true },
}, {
  collection: 'funcionario',
});

const Funcionario = mongoose.model('Funcionario', FuncionarioSchema);

module.exports = Funcionario;
