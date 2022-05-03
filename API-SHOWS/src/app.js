const express = require('express');
const app = express();

app.use(express.json());

const db = require('./infra/sqliteDb');
const show = require('./showsController/showController');

show(app, db)

app.get('/', (req, res) => {
    res.status(200).send(`tudo ok por enquanto`)
});

module.exports = app