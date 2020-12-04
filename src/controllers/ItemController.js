const Store = require('../models/Store');
const EmailController = require('../controllers/EmailController')

module.exports = {

    async list(req,res){
        const itens = await Store.find()
        itens.forEach(item =>{
            item.imagem = 'http://localhost:3000/' + item.imagem
        })
        res.json(itens)
    },

    async create(req, res){
        const imagem = req.files.imagem
        const dados = req.body
        const newItem = {...dados, 'imagem': imagem.name}
        const itemCreated = await Store.create(newItem)
        if (itemCreated)
            imagem.mv('./img/'+imagem.name)
        res.json(itemCreated)
    },

    async update(req, res){
        const id = req.params.id
        const item = req.body
        const itemUpdated = await Store.findOneAndUpdate({ _id: id }, item, {new: true})
        if(!itemUpdated){
            return res.status(400).json({msg: "Item não encontrado!"})
        }
        return res.json(itemUpdated)
    },

    async delete(req, res){
        const id = req.params.id
        const itemDeleted = await Store.findOneAndDelete({ _id: id })
        if(!itemDeleted){
            return res.status(400).json({msg: "Item não encontrado!"})
        }
        return res.status(204).json()
    },

    async emailCliente(req, res) {

        const info = await EmailController.sendMail(req.body)
        res.json({message: 'Email encaminhado com sucesso!', info: info})
    }
}