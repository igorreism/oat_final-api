const express = require('express');
const ItemController = require('./controllers/ItemController');
const routes = express.Router();

routes.get('/itens', ItemController.list)
routes.post('/itens', ItemController.create)

module.exports = routes