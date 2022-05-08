const res = require("express/lib/response")
const bd = require("../infra/sqlite-bd")
const SobremesasConstructor = require("../model/ModelSobremesa")
const SobremesaDAO = require("../DAO/sobremesaDAO")

const sobremesa = (app,bd) => {

    const instanciaSobremesaDao =  new SobremesaDAO(bd)
    app.get('/sobremesa', function(req,res) {
        instanciaSobremesaDao.listarSobremesas()
        .then((resposta) => {
            res.json(resposta)
        }).catch((error) => {
            res.json(error)
        })
    })

    app.get('/sobremesa/:id', (req,res) => {
        const requisicao = req.params.id

        bd.all(`SELECT * FROM SOBREMESAS WHERE id = ${requisicao}`, (error, rows) => {
            if(error) {
                console.log(typeof requisicao, requisicao)
                res.json({"Erro ao retornar nome" : error})
            } else {
                console.log(typeof requisicao, requisicao)
                res.json ({"nome selecionado" : rows})
            }

        })
    })

    app.post('/sobremesa', (req,res) =>{
        const add = req.body
        // console.log(add)
        const NovaSobremesa = new SobremesasConstructor(add.titulo, add.preco, add.ingredientes)
        
        const data = async()=> {
            try {
                const sobreNova = await instanciaSobremesaDao.insereSobremesas(NovaSobremesa)
                res.send(sobreNova)
            } catch(err) {
                res.send("A sobremesa não foi inserida")
            }
        }
        data()
        
    })

    app.put('/sobremesa/id', )

    app.delete('/sobremesa/:id', async (req,res) => {
        
        const deleta = async () => {
            const retira = req.params.id
            console.log(retira)
        try {
            const del = await instanciaSobremesaDao.deletaSobremesa(retira)
            res.json(del)
        }catch (error) {
            res.send("O item não foi excluido")
        }
    }
        deleta()
    })

}
    

module.exports = sobremesa