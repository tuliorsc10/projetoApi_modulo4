// importando express
const express = require('express');
// importando o express para a variável app
const app = express();
app.use(express.json())
// criando a porta dentro da variável porta
const porta = 3000
// importando o controller 
const musica = require('./controllers/musica_controller')
// importando o database, slite-bd
const db = require('./infra/sqlite-db')
// chamando o controller e passando o express
musica(app, db)



// teste de função, usando a porta 3000
app.listen(porta, ()=>{
    console.log(`api está rodando na porta ${porta}`);
})