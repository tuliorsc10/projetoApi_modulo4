var id = 0

class Charuto {
    constructor(nome, nacionalidade, fornecedor, escala_Sabor) {
        this.id = id++
        this.nome = nome;
        this.nacionalidade = nacionalidade;
        this.fornecedor = fornecedor;
        this.escala_Sabor = escala_Sabor;
    }

   

}

module.exports = Charuto 