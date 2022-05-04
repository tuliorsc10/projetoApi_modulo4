
const bd = require('../infra/sqlite-db')
const Charuto = require('../models/charuto-models')
const CharutoDAO = require('../DAO/charuto-dao')

const charuto = (app,bdSqlite)=>{

const InstCharutoDao = new CharutoDAO(bdSqlite)
      app.get('/charuto',(req, res) => {
        const data = async() => {
            try{
                const charutos = await InstCharutoDao.listarCharutos()
                res.send(charutos)
            }catch(err){
                res.send(err)
            }
    
        }
        
        data()
      })

      app.post('/charuto', (req, res) => {
      
            const body = req.body
            const NovoCharuto = new Charuto(body.nome,body.nacionalidade, body.fornecedor, body.escalaSabor)
            InstCharutoDao.insereCharuto(NovoCharuto)
            .then((resposta) =>{
                res.status(200).json(resposta)
            }).catch((error)=>{
                res.json(error)
            })

        })

        app.get('/charuto/:nome', (req, res) => {
            const nome = req.params.nome
            res.json({
                "mensagem": " por parametro",
                "parametro": nome,

            })
        })
    
        app.get('/charuto/:nacionalidade', (req, res) => {
            const nacionalidade = req.params.nacionalidade
            for (let i = 0; i <= bdSqlite.length; i++) {
                if (bdSqlite[i].nacionalidade == nacionalidade) {
                    return `a nacionalidade encontrada é ${nacionalidade}`
                }
            }
        })

        app.put('/charuto/:nacionalidade', (req, res) => {
        const nacionalidade = req.params.nacionalidade
        const body = req.body
        const indexCharuto = bdSqlite.charuto.findIndex((charuto => charuto.nacionalidade === nacionalidade))

        try {
            if (indexCharuto > -1) {
                const charutoAntigo = bdSqlite.charuto[indexCharuto]
                const charutoAtualizado = new Charuto(
                    body.nome || charutoAntigo.nome,
                    body.nacionalidade || charutoAntigo.nacionalidade,
                    body.fornecedor || charutoAntigo.fornecedor,
                    body.escala_Sabor || charutoAntigo.escala_Sabor,
                    charutoAntigo.id,
                )
                const DadoCharutoAtualizado = bdSqlite.charuto.splice(indexCharuto, 1, charutoAtualizado)
                res.json({"atualizado": DadoCharutoAtualizado,})
            } else {
                res.json({"mensagem": `Charuto com nacionalidade "${nacionalidade}" não existe`,})
            }
        } catch (error) {
            res.json({ "mensagem": error.message,})
        }
    })

    app.delete('/charuto/:nacionalidade', (req, res)=> {
        const nacionalidade = req.params.nacionalidade
        const charuto = InstCharutoDao.deletaCharuto(nacionalidade) 
        res.status(200).json(charuto)
    })
           
              
        
    }

module.exports = charuto
