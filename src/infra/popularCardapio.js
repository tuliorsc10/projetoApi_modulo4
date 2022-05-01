const sqlite3 = require ("sqlite3");
const db = new sqlite3.Database('./src/infra/database.db');

//==== ENTRADAS
const ENTRADAS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "ENTRADAS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "TITULO" TEXT,
    "PRECO" FLOAT,
    "INGREDIENTES" TEXT
  );`;
    
    const ADD_ENTRADAS_DATA = `
INSERT INTO ENTRADAS (ID, TITULO, PRECO, INGREDIENTES)
VALUES 
    (1, 'José Antônio','11122233344', 'jose.antonio@bol.com.br', '*******'),
    (2, 'Maria de Lourdes','22244433355', 'maria.lourdes@gmail.com', '********'),
    (3, 'Almir Souza','66633355589' ,'almir_souza@yahoo.com', '********'),
    (4, 'Amaro da Silva','56564343388' ,'amaro_silva@bol.com.br', '*******'),
    (5, 'Andriele Rayane','12312312345', 'andriele_rayane@gmail.com', '********'),
    (6, 'Osvaldo de Souza','98987654322' ,'osvaldo_souza@yahoo.com', '********')
`

function criaTabelaEntradas() {
    db.run(CLIENTES_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de usuários");
    });
}


function populaTabelaEntradas() {
    db.run(ADD_CLIENTES_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de usuários");
    });
}


//==== PRATOS PRINCIPAIS


    db.serialize( ()=> {
        // criaTabelaCli();
        // populaTabelaCli();
        // criaTabelaFornece();
        // populaTabelaFornece();
        criasoumnome();
    });