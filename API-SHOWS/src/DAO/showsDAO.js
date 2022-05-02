class ShowDAO{
    constructor(db){
        this.db = db;
    }

    listarShows(){
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * FROM SHOWS`, (error, results) => {
                if(error){
                    reject({message: error.message});
                }else{
                    resolve({results});
                }
            })
        })
    }

    listarShowsPorId(id){
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * FROM SHOWS WHERE ID=${id}`,(error, results) => {
                if(error){
                    reject({message: error.message});
                }else{
                    resolve({results});
                }
            })
        })
    }

    insereShow(novoShow){
        return new Promise((resolve, reject) => {
            this.db.run(`INSERT INTO SHOWS (BANDA, DATA, HORARIO) VALUES (?,?,?)`,
            novoShow.banda, novoShow.data, novoShow.horario,(error) => {
                if(error){
                    reject({message: error.message});
                }else{
                    resolve({message:`Show inserido com sucesso`,
                            show: novoShow})
                }
            })
        })
    }

    alteraShow(id, show){
        return new Promise((resolve, reject) => {
            this.db.run(`UPDATE SHOWS SET BANDA = ?, DATA = ?, HORARIO = ? WHERE id = ?`,
            show.banda, show.data, show.horario, id,(error) => {
                if(error){
                    reject({message: error.message});
                }else{
                    resolve({message:`O show de id ${id} foi alterado com sucesso`,
                            show: show
                })
                }
            })
        })
    }

    deletaShow(id){
        return new Promise((resolve, reject) => {
            this.db.run(`DELETE FROM SHOWS WHERE ID=${id}`, (error) => {
                if(error){
                    reject({message: error.message});
                }else{
                    resolve({message:`O show de id ${id} foi deletado com sucesso`})
                }
            })
        })
    }
}

module.exports = ShowDAO