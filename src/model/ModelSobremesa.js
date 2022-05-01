let id = 0;

class SobremesasConstructor  {
    constructor (titulo,preco,ingredientes){
    this.id = ++id;
    this.titulo = titulo;
    this.preco = preco;
    this.ingredientes = ingredientes;
}}



module.exports = SobremesasConstructor
