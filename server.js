const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const requireDir = require('require-dir')

// iniciando ao app
const app = express()
app.use(express.json())
app.use(cors())

// iniciando o db
mongoose.connect(
    "mongodb://localhost:27017/nodeapi", 
    { useNewUrlParser: true }
)
// carregando models (após, precisa estar conectado ao banco de dados)
requireDir('./src/models')

// const Product = mongoose.model('Product')

// requests for routes
app.use('/api', require('./src/routes'))


// ouvindo o serviço
app.listen(3001)