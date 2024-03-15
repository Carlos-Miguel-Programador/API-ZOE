const express = require('express');
const table = require('../DB/table_message')
const con = require('../DB/connection')

const deleteRouter = express()

deleteRouter.delete('/message', (req, res) => {
    const {id=1} = req.query;

    con.sync()
        .then(() => {
            table.destroy({where: {id: id}})
            return res.status(404).json({
                message: "mensagem deletada com sucesso!"
            })
        })
        .catch(() => {
            return res.status(404).json({
                message: "Ocorreu um erro!"
            })
        })
})

module.exports = deleteRouter;