/**
 * Arquivo: config/database.js
 * Descrição: arquivo responsável pelas 'connectionStrings' da aplicação: MongoDb & CosmosDb
 * Data: 02/06/2019
 * Author: Glaucia Lemos
 */

module.exports = {
  local:
  {
    localUrl: 'mongodb://localhost:27017/meantutorialcrud',
  },

  /* cosmosdb:
  {
    name: 'mean-tutorial-crud',
    url: '<incluir-a-connection-string-cosmosDb>',
    port: 10255,
  }, */
};
