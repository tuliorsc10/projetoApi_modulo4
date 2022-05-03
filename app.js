const express = require ("express");
const BurguerConstructor = require("./src/model/ModelHamburguer");
const PratosPrincipaisConstructor = require("./src/model/ModelPratoPrincipal");
const SobremesasConstructor = require("./src/model/ModelSobremesa")

const app = express();

app.use(express.json())

const HamburguerController = require('./src/controller/controllerHamburguer')
const PratoPrincipalController = require('./src/controller/controllerPratoPrincipal')
const SobremesaController = require('./src/controller/controllerSobremesa')

const bd = require('./src/infra/sqlite-bd')

HamburguerController(app,bd)
PratoPrincipalController(app,bd)
SobremesaController(app,bd)



module.exports = app