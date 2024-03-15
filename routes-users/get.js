const express = require('express');
const table = require('../DB/table_users')
const con = require('../DB/connection')

const getRouter = express()

getRouter.get('/users', (req, res) => {

    con.sync()
        .then(() => {
            table.findAll()
                .then((data) => {
                    return res.json(data)
                })

                .catch(() => {
                    return res.status(404).json({
                        message: "Ocorreu um erro!"
                    })
                })
        })
        .catch(() => {
            return res.status(404).json({
                message: "Ocorreu um erro!"
            })
        })
})

module.exports = getRouter;