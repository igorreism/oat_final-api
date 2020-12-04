const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');

app.use(express.json())
app.use(cors())
app.use(fileUpload({
    createParentPath: true
}))
app.use(express.static('img'))

app.use('/api', require('./src/routes'))

mongoose.connect('mongodb://root:rootpwd@localhost:27017/catalogo?authSource=admin', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

app.listen(3000)