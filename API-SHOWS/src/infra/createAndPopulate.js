const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(`./src/infra/databse.db`);

const SHOWS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "SHOWS" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "banda" varchar(64),
    "dia" varchar(64),
    "horario" varchar(64)
);`;

const ADD_SHOWS_DATA = `
INSERT INTO SHOWS (id, banda, dia, horario)
VALUES
    (1,)
    (2,)
    (3,)
`

const criaTabelaShows = () =>{
    db.run(SHOWS_SCHEMA, (error) => {
        if(error) console.log(`Erro ao criar a tabela Shows`);
    });
}

const populaTabelaShows = () => {
    db.run(ADD_SHOWS_DATA, (error) => {
        if(error) console.log(`Erro ao popular tabela Shows`);
    });
}

db.serialize(() => {
    criaTabelaShows()
    populaTabelaShows();
});