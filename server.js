const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

app.use(express.json())
app.use(cors())

app.use('/api', require('./src/routes'))

mongoose.connect('mongodb://root:rootpwd@localhost:27017/test?authSource=admin', { useUnifiedTopology: true })

app.listen(3000)