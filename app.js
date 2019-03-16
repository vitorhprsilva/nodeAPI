const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


const indexRoute = require('./Routes/index')
const usersRoute = require('./Routes/users')


const app = express()

const url = 'mongodb+srv://usuario_admin:bk0Mhoqy5Mk9gXTV@cluster0-j4mhp.mongodb.net/test?retryWrites=true'
const options = { reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser: true }

mongoose.connect(url, options)
mongoose.set('useCreateIndex', true)

mongoose.connection.on('error', (err) =>{
    console.log('Erro na conexão com o banco de dados: '+err)
})

mongoose.connection.on('disconnected', ()=>{
    console.log('Aplicação desconectada do banco de dados')
})

mongoose.connection.on('connected', ()=>{
    console.log('Aplicação conectada ao banco de dados')
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', indexRoute)
app.use('/users', usersRoute)

app.listen(3000)

module.exports = app