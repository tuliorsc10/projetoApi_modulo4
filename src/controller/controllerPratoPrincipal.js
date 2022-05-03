const res = require("express/lib/response")
const bd = require("../infra/sqlite-bd")
const BurguerConstructor = require("../model/ModelHamburguer")
const PratoPrincipalDAO= require('../DAO/pratoPrincipalDAO')

const pratoPrincipal = (app,bd) => {

    const instanciaPratoPrincipalDao = new PratoPrincipalDAO(bd)
    app.get('/pratoprincipal', function(req,res) {
        instanciaPratoPrincipalDao.listarPratosPrincipais()
        .then((resposta) => {
            res.json(resposta)
        }).catch((error) => {
            res.json(error)
        })
    })

    app.get('/pratoprincipal/:id', (req,res) => {
        const requisicao = req.params.id

        bd.all(`SELECT * FROM PRATOS_PRINCIPAIS WHERE id = ${requisicao}`, (error, rows) => {
            if(error) {
                console.log(typeof requisicao, requisicao)
                res.json({"Erro ao retornar nome" : error})
            } else {
                console.log(typeof requisicao, requisicao)
                res.json ({"nome selecionado" : rows})
            }

        })
    })

    app.post('/pratoprincipal', (req,res) =>{
        const add = req.body
        console.log(add)
        bd.all(`INSERT INTO PRATOS_PRINCIPAIS (ID, TITULO, PRECO, INGREDIENTES) VALUES(?,?,?,?)`, 
        [add.id, add.titulo, add.preco, add.ingredientes])
        res.send("Item prato principal Cadastrado")
    })

}
    

module.exports = pratoPrincipal