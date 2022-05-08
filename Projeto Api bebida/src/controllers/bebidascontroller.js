const Bebida = require('../models/models')
const BebidaDAO = require('../dao/bebidasdao')

const bebida = (app,db) => {
    const bebidaDAO = new BebidaDAO(db)

    app.get('/bebida', (req, res) =>{
        const data = async() => {
            try{
                const bebida = await bebidaDAO.listarBebidas()
                res.status(200).json(bebida)
            }catch(error){
                res.status(400).json(error)
            }
        }
        data()
    })
    
    app.get('/bebida/:id', (req, res) => {
        const body = req.body;
        const id = req.params.id;
        const data = async() =>{
            try{
                const bebida = await bebidaDAO.listarBebidasPorId(id, body)
                res.status(200).json(bebida)
            }catch(error){
                res.status(404).json(error)
            }
        }
        data()
    })

    app.post('/bebida', (req, res) => {
        const body = req.body;
        const data = async() =>{
            try{
                const novobebida = new bebida(body.nome, body.tipo, body.nacionalidade, body.fornecedor)
                const bebida = await bebidaDAO.inserebebida(novobebida)
                res.status(201).json(bebida)
            }catch(error){
                res.status(400).json(error)
            }
        }
        data()
    })

    app.put('/bebida/:id', (req, res) => {
        const body = req.body;
        const id = req.params.id
        const data = async() => {
            try{
                const bebidaid = await bebidaDAO.listarBebidasPorId(id)
                const bebidaAlterado = new bebida(body.nome || bebidaid[0].nome,
                                              body.tipo || bebidaid[0].tipo,
                                              body.nacionalidade || bebidaid[0].nacionalidade,
                                              body.fornecedor || bebidaid[0].fornecedor)

                const bebida = await bebidaDAO.alterabebida(id, bebidaAlterado)
                res.status(200).json(bebida) 
            }catch(error){
                res.status(400).json(error)
            }           
        }
        data()
    })

    app.delete('/bebida/:id', (req, res) => {
        const data = async() => {
            const id = req.params.id
            try{
                const bebida = await bebidaDAO.deletabebida(id)
                res.status(200).json(bebida)
            }catch(error){
                res.status(400).json(error)
            }
        }
        data()
    })
}

module.exports = bebida