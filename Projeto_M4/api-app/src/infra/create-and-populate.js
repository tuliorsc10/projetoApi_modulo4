/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/infra/database.db');

const CHARUTOS_SCHEMA = `
CREATE TABLE CHARUTO (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "NACIONALIDADE" varchar(64),
    "FORNECEDOR" varchar(64),
    "ESCALA_SABOR" varchar(64)
  );`;

const ADD_CHARUTOS_DATA = `
INSERT INTO CHARUTO (ID, NOME, NACIONALIDADE, FORNECEDOR, ESCALA_SABOR)
VALUES (1, 'Quorum Robusto Maduro', 'Nicarágua', 'Quorum', 'Suave a Médio'),(2, 'Don Blend Robusto SF', 'Honduras', 'Don Blend', 'Suave a Médio'),(3, 'Dannemann', 'Brasil', 'Jamm Cigars Charutos ltda', 'Suave a Médio')
`

function criaTabelaUsr() {
    db.run(CHARUTOS_SCHEMA, (error)=> {
       if (error) console.log(error);
    });
}


function populaTabelaUsr() {
    db.run(ADD_CHARUTOS_DATA, (error)=> {
       if (error)        console.log(error);
    });
}



db.serialize( ()=> {
    criaTabelaUsr();
    populaTabelaUsr();
    
});