class estrutura_de_musicas {
    constructor(db){
        this.db = db;
    }
    
    listar_musicas(){
        return new Promise((resolve, reject) =>{
            this.db.all(`SELECT * FROM MUSICA`, (err, results) => {
                if(err){
                    reject({message: err.message});
                }else{
                    resolve({results});
                }
            })
        })
    }

    listar_musicas_ID(id){
        return new Promise((resolve, reject) =>{
            this.db.all(`SELECT * FROM MUSICA WHERE ID=${id}`, (err, results) => {
                if(err){
                   reject({message: err.message});
                }else{
                   resolve({results});
                }
            })
        })

    }
    insere_musicas(insere){
        return new Promise((resolve, reject) =>{
            this.db.run(`INSERT INTO MUSICA (NOME, GENERO, TEMPO_DE_DURACAO ) VALUES (?,?,?)`,
            insere.nome, insere.genero, insere.tempo_de_duracao,(error)=>{
                if(error){
                   reject({message: error.message});
                }else{
                    resolve({message:`música inserida com sucesso!`})
                }
            })
      
        })

    }

    altera_musicas(id, alterado){
        return new Promise((resolve, reject) =>{
            this.db.run(`UPDATE MUSICA SET NOME = ?, GENERO = ? , TEMPO_DE_DURACAO = ? WHERE id = ?`, alterado.nome, alterado.genero, alterado.tempo_de_duracao, id,(error)=>{
            if(error){
                reject({message: error.message});
            }else{
                resolve({message:`A música do id ${id} foi alterada com sucesso`})
            }
        })
    })

    }

    deleta_musicas(id){
        return new Promise((resolve, reject) =>{
            this.db.run(`DELETE FROM MUSICA WHERE ID = ${id}`,(error)=>{
                if(error){
                    reject({message: error.message});
                }else{
                    resolve({message:`A música do id ${id} foi deletada com sucesso`})
                }
            })
    })


    }

}

module.exports = estrutura_de_musicas;