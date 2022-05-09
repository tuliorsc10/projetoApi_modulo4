const charuto = require("../controllers/charuto_controller")

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

    listarCharutosid(id){
        return new Promise((resolve, reject)=>{
            this.bd.all(`SELECT * FROM CHARUTO WHERE ID = ${id}`,  (error, rows) => {
                if(error){
                    console.log(error)
                 reject("ERRO AO SELECIONAR BANCO")
                }else {
                  resolve( rows)
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

    alteraCharuto(dados){
        return new Promise((resolve, reject) =>{
            this.db.run(`UPDATE CHARUTO SET NOME = ?, NACIONALIDADE = ? , FORNECEDOR = ? , ESCALA_SABOR = ? WHERE ID = ?`, dados,(error)=>{
            if(error){
                console.log(error)
               reject(error);
            }else{
               resolve("ALTERADO COM SUCESSO!")
            }
        })
    })

    }
   

    deletaCharuto(id){
      return new Promise((resolve, reject) =>{
         this.db.run(`DELETE FROM CHARUTO WHERE ID = ${id}`,(error)=>{
            if(error){
               reject(error);
            }else{
               resolve("CHARUTO DELETADO COM SUCESSO!")
            }
        })
})


}

}

module.exports = CharutoDAO