const Store = require('../models/Store');

module.exports = {

    async list(req,res){
        const itens = await Store.find()
        res.json(itens)
    },

    async create(req, res){
        const newItem = req.body
        const itemCreated = await Store.create(newItem)
        res.json(itemCreated)
    }
}