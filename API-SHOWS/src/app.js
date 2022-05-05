const express = require('express');
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors());

const db = require('./infra/sqliteDb');
const show = require('./showsController/showController');

show(app, db)

app.get('/', (req, res) => {
    res.status(200).json({message:`tudo ok por enquanto`})
});

module.exports = app