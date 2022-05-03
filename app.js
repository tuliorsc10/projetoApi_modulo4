const express = require ("express");
const BurguerConstructor = require("./src/model/ModelHamburguer");
const PratosPrincipaisConstructor = require("./src/model/ModelPratoPrincipal");

const app = express();

app.use(express.json())

const HamburguerController = require('./src/controller/controllerHamburguer')
const PratoPrincipalController = require('./src/controller/controllerPratoPrincipal')

const bd = require('./src/infra/sqlite-bd')

HamburguerController(app,bd)
PratoPrincipalController(app,bd)



module.exports = app