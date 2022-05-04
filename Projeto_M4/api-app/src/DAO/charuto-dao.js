class CharutoDAO {
    constructor(bd){
        this.bd = bd
    }

    listarCharutos(){
        return new Promise((resolve, reject)=>{
            this.bd.all(`SELECT * FROM CHARUTO`, (error, rows) => {
                if(error){
                    console.log(error)
                 reject("ERRO AO SELECIONAR BANCO")
                }else {
                  resolve({"banco selecionado": rows})
                }
              })
        })
    }

    

    insereCharuto(DadosNovoCharuto){
        return new Promise((resolve, reject) => {
            this.bd.run(`INSERT INTO CHARUTO (NOME, NACIONALIDADE, FORNECEDOR, ESCALA_SABOR) VALUES (?,?,?,?)`, 
            [DadosNovoCharuto.nome, DadosNovoCharuto.nacionalidade, DadosNovoCharuto.fornecedor, DadosNovoCharuto.escala_Sabor],
            (error)=>{
                if(error){
                    reject(error)
                }else{
                   resolve("DEU CERTO INSERIR")
                }
            })
        })
       

    }

    deletaCharuto(nacionalidade) {
        return new Promise((resolve, reject) => {
            this.bd.run(`DELETE FROM CHARUTO WHERE NACIONALIDADE=${nacionalidade}`,
            (err) => {
                if(err) {
                    reject(err)
                } else {
                    resolve('Charuto deletado com sucesso')
                }
            })
        })
    }


}

module.exports = CharutoDAO