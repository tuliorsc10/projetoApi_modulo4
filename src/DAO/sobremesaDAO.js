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
            this.bd.run(`insert into SOBREMESA (id, titulo, preco, ingredientes) values(?,?,?)`, 
            [novaSobremesa.id, novaSobremesa.titulo, novaSobremesa.preco, novaSobremesa.ingredientes], (error) => {
                error ? reject(error) : resolve('funcionou, sobremesa cadastrada')
            })
        })
    }

}

module.exports = SobremesaDAO