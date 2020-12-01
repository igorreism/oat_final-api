const Store = require('../models/Store');

module.exports = {

    list(req,res){
        const itens = Store.list()
        res.json(itens)
    },

    create(req, res){
        const item = req.body
        Store.create(item)
        res.json(item)
    }
}