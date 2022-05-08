const express = require ("express");

const SobremesasConstructor = require("./src/model/ModelSobremesa")

const app = express();

app.use(express.json())

const SobremesaController = require('./src/controller/controllerSobremesa')

const bd = require('./src/infra/sqlite-bd')


SobremesaController(app,bd)



module.exports = app