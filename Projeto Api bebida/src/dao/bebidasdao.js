class BebidasDAO{
    constructor(db){
        this.db = db;
    }

    listarBebidas(){
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * FROM BEBIDAS`, (error, results) => {
                if(error){
                    reject({message: error.message});
                }else{
                    resolve({results});
                }
            })
        })
    }

    listarBebidasPorId(id){
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * FROM BEBIDAS WHERE ID=${id}`,(error, results) => {
                if(error){
                    reject({message: error.message});
                }else{
                    resolve({results});
                }
            })
        })
    }

    insereBebida(novaBebida){
        return new Promise((resolve, reject) => {
            this.db.run(`INSERT INTO BEBIDAS (NOME, TIPO, NACIONALIDADE, FORNECEDOR) VALUES (?,?,?,?)`,
            novaBebida.nome, novaBebida.tipo, novaBebida.nacionalidade, novaBebida.fornecedor,(error) => {
                if(error){
                    reject({message: error.message});
                }else{
                    resolve({message:`Bebida inserida com sucesso`,
                            bebida: novaBebida})
                }
            })
        })
    }

    alteraBebida(id, bebida){
        return new Promise((resolve, reject) => {
            this.db.run(`UPDATE BEBIDAS SET NOME = ?, TIPO = ?, NACIONALIDADE = ?, FORNECEDOR = ? WHERE id = ?`,
            bebida.nome, bebida.tipo, bebida.nacionalidade, bebida.fornecedor, id,(error) => {
                if(error){
                    reject({message: error.message});
                }else{
                    resolve({message:`O Bebida de id ${id} foi alterada com sucesso`,
                            bebida: bebida
                })
                }
            })
        })
    }

    deletaBebida(id){
        return new Promise((resolve, reject) => {
            this.db.run(`DELETE FROM BEBIDAS WHERE ID=${id}`, (error) => {
                if(error){
                    reject({message: error.message});
                }else{
                    resolve({message:`O Bebida de id ${id} foi deletada com sucesso`})
                }
            })
        })
    }
}

module.exports = BebidasDAO