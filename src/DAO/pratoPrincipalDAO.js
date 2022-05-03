class PratoPrincipalDAO {
    constructor(bd) {
        this.bd = bd
    }

    listarPratosPrincipais() {
        return new Promise((resolve, reject) =>{
            this.bd.all(`SELECT * FROM PRATOS_PRINCIPAIS`, (error, rows) =>{
                if(error) {
                    reject("Erro ao selecionar o Banco")
                } else {
                    resolve ({"banco selecionado" : rows})
                }
            })
        })
    }

    inserePratosPrincipais(novoPrato) {
        return new Promise((resolve, reject) => {
            this.bd.run(`insert into PRATOS_PRINCIPAIS (id, titulo, preco, ingredientes) values(?,?,?)`, 
            [novoPrato.id, novoPrato.titulo, novoPrato.preco, novoPrato.ingredientes], (error) => {
                error ? reject(error) : resolve('funcionou, prato principal cadastrado')
            })
        })
    }

}

module.exports = PratoPrincipalDAO