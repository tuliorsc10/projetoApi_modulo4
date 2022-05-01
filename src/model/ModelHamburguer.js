let id = 0;

class BurguerConstructor  {
    constructor (titulo,preco,ingredientes){
    this.id = ++id;
    this.titulo = titulo;
    this.preco = preco;
    this.ingredientes = ingredientes;
}}



module.exports = BurguerConstructor
