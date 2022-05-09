
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

        
           
        app.get('/charuto/:id', (req, res) => {
            const id = req.params.id
            const data = async() => {
                try{
                    const charutos = await InstCharutoDao.listarCharutosid(id)
                    res.send(charutos)
                }catch(err){
                    res.send(err)
                }
        
            }
            
            data()
            })
        


        app.put('/charuto/:id', (req, res) => {
        const id = req.params.id
        const body = req.body
        
      
        const data = async() => {
            try{
                const CharutosDados = await InstCharutoDao.listarCharutosid(id)                
                const charutoAtualizado = new Charuto(
                    body.nome || CharutosDados[0].NOME,
                    body.nacionalidade || CharutosDados[0].NACIONALIDADE,
                    body.fornecedor || CharutosDados[0].FORNECEDOR,
                    body.escalaSabor || CharutosDados[0].ESCALA_SABOR
                   
                )               

                const dados = [charutoAtualizado.nome,charutoAtualizado.nacionalidade, charutoAtualizado.fornecedor, charutoAtualizado.escala_Sabor,id]
                console.log(dados)
                const charutos = await InstCharutoDao.alteraCharuto(dados)
                console.log(charuto)
                res.send(charutos)
            }catch(err){
                res.send(err)
            }
    
        }
        
        data()

       
    })



    app.delete('/charuto/:id', (req, res)=> {
            
        
            const id = req.params.id
            const data = async() => {
                try{
                    const charutos = await InstCharutoDao.deletaCharuto(id)
                    res.send(charutos)
                }catch(err){
                    res.send(err)
                }
        
            }
            
            data()
    })
           
              
        
    }

module.exports = charuto
