
const express = require('express');

const app = express();
app.use(express.json())

const porta = 3000

const bebida = require('./src/controllers/bebidascontroller')

const db = require('./src/infra/sqliteDB')

const cors = require('cors')
app.use(cors());


bebida(app, db)


app.listen(porta, ()=>{
    console.log(`api está rodando na porta ${porta}`);
})