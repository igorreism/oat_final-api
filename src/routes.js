const express = require('express');
const ItemController = require('./controllers/ItemController');
const routes = express.Router();

routes.get('/itens', ItemController.list)
routes.post('/itens', ItemController.create)
routes.put('/itens/:id', ItemController.update)
routes.delete('/itens/:id', ItemController.delete)
routes.post('/postman', ItemController.emailCliente)

module.exports = routes