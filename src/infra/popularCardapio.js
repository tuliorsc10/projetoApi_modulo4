const sqlite3 = require ("sqlite3");
const db = new sqlite3.Database('./src/infra/database.db');

//==== HAMBURGUERS
const HAMBURGUERS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "HAMBURGUERS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "TITULO" TEXT,
    "PRECO" FLOAT,
    "INGREDIENTES" TEXT
  );`;
    
    const ADD_HAMBURGUERS_DATA = `
INSERT INTO HAMBURGUERS (ID, TITULO, PRECO, INGREDIENTES)
VALUES 
    (1, 'PODEROSO HAMBURGÃO', '40', 'PÃO, 300 gramas de carne bovina, ovo, bacon, 2 fatias de queijo cheddar, alface , tomate e muito molho'),
    (2, 'UM SONHO DE HAMBURGUER', '32', 'PÃO, 200 gramas de carne bovina, bacon, 2 fatias de queijo cheddar, cream cheese, alface , tomate e muito molho'),
    (3, 'HAMBURTRIX', '25', 'PÃO, 150 gramas de carne de frango, 2 fatias de queijo cheddar, 2 fatias de queijo prato, cream cheese, alface , tomate e muito molho'),
    (4, 'O HAMBURGUER DOS INOCENTES', '20', 'PÃO, 100 gramas de carne bovina, 2 fatias de queijo cheddar, alface , tomate e muito molho')
`

function criaTabelaHamburgues() {
    db.run(HAMBURGUERS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de Hamburgues");
    });
}


function populaTabelaHamburgues() {
    db.run(ADD_HAMBURGUERS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de Hamburgues");
    });
}


//==== PRATOS PRINCIPAIS
const PRATOS_PRINCIPAIS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "PRATOS_PRINCIPAIS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "TITULO" TEXT,
    "PRECO" FLOAT,
    "INGREDIENTES" TEXT
  );`;
    
    const ADD_PRATOS_PRINCIPAIS_DATA = `
INSERT INTO PRATOS_PRINCIPAIS (ID, TITULO, PRECO, INGREDIENTES)
VALUES 
    (1, 'ASINHA DE FRANGO', '40.00', 'Asinhas especiais de frango e molho da casa'),
    (2, 'CALABRESA COM FRITAS', '30.00', 'Calabresa e Batata frita'),
    (3, 'CREPE', '12.00', 'Massa de crepe, sabor a sua escolha, cream cheese, cebola e tomate '),
    (4, 'PIZZA', '60.00', 'Sabor desejado, tipo de queijo a sua escolha , tomate cebola e muito molho')
`

function criaTabelaPratoPrincipais() {
    db.run(PRATOS_PRINCIPAIS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de Pratos Principais");
    });
}


function populaTabelaPratosPrincipais() {
    db.run(ADD_PRATOS_PRINCIPAIS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de Pratos Principais");
    });
}

//==== SOBREMESA
const SOBREMESAS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "SOBREMESA" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "TITULO" TEXT,
    "PRECO" FLOAT,
    "INGREDIENTES" TEXT
  );`;
    
    const ADD_SOBREMESAS_DATA = `
INSERT INTO SOBREMESA (ID, TITULO, PRECO, INGREDIENTES)
VALUES 
    (1, 'PUDIM DE LEITE', '5.00', 'LEITE E OVOS'),
    (2, 'CAKE', '5.00', 'FARINHA DE TRIGO, OVOS, LEITE E CHOCOLATE'),
    (3, 'BOLO DE ROLO', '7.00', 'FARINHA DE TRIGO, OVOS, LEITE E DOCE DE GOIABA'),
    (4, 'SORVETE', '8.00', 'LEITE E O SABOR DESEJADO')
`

function criaTabelaSobremesa() {
    db.run(SOBREMESAS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de Sobremesa");
    });
}


function populaTabelaSobremesa() {
    db.run(ADD_SOBREMESAS_DATA , (error)=> {
       if (error) console.log("Erro ao popular tabela de Sobremesa");
    });
}

    db.serialize( ()=> {
        criaTabelaHamburgues();
        criaTabelaPratoPrincipais();
        criaTabelaSobremesa();
        populaTabelaHamburgues();
        populaTabelaPratosPrincipais();
        populaTabelaSobremesa();
    });