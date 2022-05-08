const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(`./src/infra/database.db`);

const BEBIDAS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "BEBIDAS" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nome" varchar(64),
    "tipo" varchar(64),
    "nacionalidade" varchar(64),
    "fornecedor" varchar(64)
);`;

const ADD_BEBIDAS_DATA = `
INSERT INTO BEBIDAS (id, nome, tipo, nacionalidade, fornecedor)
VALUES
    (1,'Jurupinga','vinho','Brasil', 'Seu Zé'),
    (2,'Caninha da Roça','Aguardente','Brasil','João das Neves'),
    (3,'51','Aguardente','Brasil','Anderson')
`

const criaTabelaBEBIDAS = function() {
    db.run(BEBIDAS_SCHEMA, (error) => {
        if(error) console.log(`Erro ao criar a tabela BEBIDAS`);
    });
}

const populaTabelaBEBIDAS = function() {
    db.run(ADD_BEBIDAS_DATA, (error) => {
        if(error) console.log(`Erro ao popular tabela BEBIDAS`);
    });
}

db.serialize(() => {
    criaTabelaBEBIDAS()
    populaTabelaBEBIDAS();
});
