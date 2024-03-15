const express = require('express');
const table = require('../DB/table_message')
const con = require('../DB/connection')

const postRouter = express()

postRouter.post('/message', (req, res) => {

    const content = req.body;

    con.sync()
        .then(() => {
            table.create(content)
            
            return res.json({
                message: "Mensagem enviada com sucesso!"
            })
        })
        .catch(() => {
            return res.status(404).json({
                message: "Ocorreu um erro!"
            })
        })
})

module.exports = postRouter;