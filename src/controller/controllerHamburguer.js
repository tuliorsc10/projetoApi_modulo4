const res = require("express/lib/response")
const bd = require("../infra/sqlite-bd")
const BurguerConstructor = require("../model/ModelHamburguer")
const HamburguerDAO = require('../DAO/hamburguerDAO')

const hamburguer = (app,bd) => {

    const instanciaHamburguerDao = new HamburguerDAO(bd)
    app.get('/hamburguers', function(req,res) {
        instanciaHamburguerDao.listarHamburguers()
        .then((resposta) => {
            res.json(resposta)
        }).catch((error) => {
            res.json(error)
        })
    })

    app.get('/hamburguers/:id', (req,res) => {
        const requisicao = req.params.id

        bd.all(`SELECT * FROM HAMBURGUERS WHERE id = ${requisicao}`, (error, rows) => {
            if(error) {
                console.log(typeof requisicao, requisicao)
                res.json({"Erro ao retornar nome" : error})
            } else {
                console.log(typeof requisicao, requisicao)
                res.json ({"nome selecionado" : rows})
            }

        })
    })

    app.post('/hamburguers', (req,res) =>{
        const add = req.body
        console.log(add)
        bd.all(`INSERT INTO HAMBURGUERS (ID, TITULO, PRECO, INGREDIENTES) VALUES(?,?,?,?)`, 
        [add.id, add.titulo, add.preco, add.ingredientes])
        res.send("Item Hamburguer Cadastrado")
    })

}
    

module.exports = hamburguer