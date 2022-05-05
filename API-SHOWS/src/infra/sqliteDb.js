const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/infra/databse.db');

process.on('SIGINT', () =>
    db.close(() => {
        console.log(`DB encerrado`);
        process.exit(0)
    })
);

module.exports = db
