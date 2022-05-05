const Show = require('../showsModel/showModel')
const ShowDAO = require('../DAO/showsDAO')

const show = (app,db) => {
    const showDAO = new ShowDAO(db)

    app.get('/show', (req, res) =>{
        const data = async() => {
            try{
                const show = await showDAO.listarShows()
                res.status(200).json(show)
            }catch(error){
                res.status(400).json(error)
            }
        }
        data()
    })
    
    app.get('/show/:id', (req, res) => {
        const body = req.body;
        const id = req.params.id;
        const data = async() =>{
            try{
                const show = await showDAO.listarShowsPorId(id, body)
                res.status(200).json(show)
            }catch(error){
                res.status(404).json(error)
            }
        }
        data()
    })

    app.post('/show', (req, res) => {
        const body = req.body;
        const data = async() =>{
            try{
                const novoShow = new Show(body.banda, body.data, body.horario)
                const show = await showDAO.insereShow(novoShow)
                res.status(201).json(show)
            }catch(error){
                res.status(400).json(error)
            }
        }
        data()
    })

    app.put('/show/:id', (req, res) => {
        const body = req.body;
        const id = req.params.id
        const data = async() => {
            try{
                const showid = await showDAO.listarShowsPorId(id)
                const showAlterado = new Show(body.banda || showid[0].nome,
                                              body.data || showid[0].data,
                                              body.horario || showid[0].horario)
                const show = await showDAO.alteraShow(id, showAlterado)
                res.status(200).json(show) 
            }catch(error){
                res.status(400).json(error)
            }           
        }
        data()
    })

    app.delete('/show/:id', (req, res) => {
        const data = async() => {
            const id = req.params.id
            try{
                const show = await showDAO.deletaShow(id)
                res.status(200).json(show)
            }catch(error){
                res.status(400).json(error)
            }
        }
        data()
    })
}

module.exports = show