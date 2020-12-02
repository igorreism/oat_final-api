const mongoose = require('mongoose')
const CatalogoSchema = new mongoose.Schema({

    codigo: {
        type: 'number'
    },
    nome: {
        type: 'string'
    },
    descricao: {
        type: 'string'
    },
    imagem: {
        type: 'string'
    }
})

const Store = mongoose.model('Store', CatalogoSchema)

module.exports = Store