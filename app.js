const express = require ("express");
const BurguerConstructor = require("./src/model/ModelHamburguer");
// const cliente_controllers = require("./src/controllers/cliente_controllers")

const app = express();

app.use(express.json())

const HamburguerController = require('./src/controller/controllerHamburguer')
// const FornecedorController = require('./src/controllers/fornecedor_controllers')
const bd = require('./src/infra/sqlite-bd')

HamburguerController(app,bd)
// FornecedorController(app)



module.exports = app