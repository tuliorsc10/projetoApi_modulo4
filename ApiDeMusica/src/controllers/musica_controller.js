const musica = require('../models/musicas_models')
const DAO_musica = require('../DAO/estrutura_de_musicas')

const musicas_de_controler = (app,db) => {
const music = new DAO_musica(db)
//CREATE DO CRUD - INSERIR REGISTROS

// READ DO CRUD E EXIBI REGISTROS
app.get('/musica', (req, res) => {
    const data = async() => {
        try {
            const musicas =  await music.listar_musicas()
            res.send(musicas)
        }catch(err) {
            res.send(err)
        }
       
    }
    data()
 
})


// READ DO CRUD E EXIBI REGISTROS
app.get('/musica/:id', (req, res) => {
    const data = async() => {
        try {
            const musicas =  await music.listar_musicas_ID(req.params.id);
            res.send(musicas)
        }catch(err) {
            res.send(err)
        }
       
    }
    data()
   })  


app.post('/musica', (req, res) => {
    // pegar dados e armazenar no banco
    const body = req.body;
        const data = async() =>{
            try{
                const nova_musica = new musica(body.nome, body.genero, body.tempo_de_duracao)
                const musicas = await music.insere_musicas(nova_musica)
                console.log(musicas)
                res.status(201).json(musicas)
            }catch(error){
                res.status(400).json(error)
            }
        }
        data()
 })
 
    
//UPDATE DO CRUD - ATUALIZAR REGISTROS
app.put('/musica/:id', (req, res) => {
    const body = req.body;
        const id = req.params.id
        const data = async() => {
            try{
                const musica_id = await music.altera_musicas(id)
                const musica_alterada = new musica(body.nome || musica_id[0].nome,
                                              body.genero || musica_id[0].genero,
                                              body.tempo_de_duracao || musica_id[0].tempo_de_duracao)
                const musicas = await music.altera_musicas(id, musica_alterada)
                res.status(200).json(musicas) 
            }catch(error){
                res.status(400).json(error)
            }           
        }
        data()
  
})
//DELETE DO CRUD - DELETAR REGISTROS
app.delete('/musica/:id', (req, res) => {
    const data = async() => {
        const id = req.params.id
        try{
            const musicas = await music.deleta_musicas(id)
            res.status(200).json(musicas)
        }catch(error){
            res.status(400).json(error)
        }
    }
    data()
    
}) 
    }

module.exports = musicas_de_controler;
