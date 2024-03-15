const express = require('express');
const cors = require('cors');
const get = require('../API-mensages/routes-message/get');
const post = require('../API-mensages/routes-message//post');
const del = require('../API-mensages/routes-message/delete');
const getUsers = require('../API-mensages/routes-users/get');
const postUsers = require('../API-mensages/routes-users/post');

const app = express()

app.use(express.json())
app.use(cors())

app.use('/', get)
app.use('/', post)
app.use('/', del)
app.use('/', postUsers)
app.use('/', getUsers)

app.listen(process.env.PORT || 8000, ()=>{
    console.log('Servidor rodando na porta 8000');
})