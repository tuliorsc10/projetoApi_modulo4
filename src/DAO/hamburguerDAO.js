class HamburguerDAO {
    constructor(bd) {
        this.bd = bd
    }

    listarHamburguers() {
        return new Promise((resolve, reject) =>{
            this.bd.all(`SELECT * FROM HAMBURGUERS`, (error, rows) =>{
                if(error) {
                    reject("Erro ao selecionar o Banco")
                } else {
                    resolve ({"banco selecionado" : rows})
                }
            })
        })
    }

    insereHamburguer(novoBurguer) {
        return new Promise((resolve, reject) => {
            this.bd.run(`insert into HAMBURGUERS (id, titulo, preco, ingredientes) values(?,?,?)`, 
            [novoBurguer.id, novoBurguer.titulo, novoBurguer.preco, novoBurguer.ingredientes], (error) => {
                error ? reject(error) : resolve('funcionou, hamburguer cadastrado')
            })
        })
    }

}

module.exports = HamburguerDAO