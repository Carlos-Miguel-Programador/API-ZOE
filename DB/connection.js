const sequelize = require('sequelize');

const connection = new sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT
})

connection.authenticate()
    .then(() => {
        console.log('Connected');
    })


module.exports = connection;