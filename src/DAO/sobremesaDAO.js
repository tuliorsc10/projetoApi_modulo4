const sobremesa = require('../controller/controllerSobremesa')

class SobremesaDAO {
    constructor(bd) {
        this.bd = bd
    }

    listarSobremesas() {
        return new Promise((resolve, reject) =>{
            this.bd.all(`SELECT * FROM SOBREMESA`, (error, rows) =>{
                if(error) {
                    reject("Erro ao selecionar o Banco")
                } else {
                    resolve ({"banco selecionado" : rows})
                }
            })
        })
    }

    insereSobremesas(novaSobremesa) {
        return new Promise((resolve, reject) => {
          this.bd.run(`insert into sobremesa (titulo, preco, ingredientes) values(?,?,?)`, 
            [novaSobremesa.titulo, novaSobremesa.preco, novaSobremesa.ingredientes], (error) => {
                error ? reject(error) : resolve('funcionou, sobremesa cadastrada')
            })
        })
    }

    deletaSobremesa(id) {
        return new Promise ((resolve, reject) => {
            this.bd.run(`delete from sobremesa where titulo = ${id} `, (error) => {
                if(error) {
                    reject("Erro ao deletar do Banco")
                }else {
                    resolve(`Você deletou o título do banco`)
                    
                }
            })
        })
    }

}

module.exports = SobremesaDAO