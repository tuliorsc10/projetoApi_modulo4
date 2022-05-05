/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/infra/database.db');

// atributos de músicas
const MUSICAS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "MUSICA" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nome" varchar(64),
    "genero" varchar(64),
    "tempo_de_duracao" varchar(64)
  );`;

const ADD_MUSICAS_DATA = `
INSERT INTO MUSICA (id, nome, genero, tempo_de_duracao)
VALUES 
    (1, 'Smells Like Teen Spirit', 'rock', '4:38'),
    (2, 'Wonderwall', 'rock', '4:39'),
    (3, 'Californication', 'rock', '5:21')
`

function criaTabela() {
    db.run(MUSICAS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de musicas");
    });
}


function populaTabela() {
    db.run(ADD_MUSICAS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de musicas");
    });
}

db.serialize(()=> {
    criaTabela();
    populaTabela();
});