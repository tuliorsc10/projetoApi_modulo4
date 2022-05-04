const express = require('express') 
const app = express() 
const port = 3000

const bdSqlite = require('./infra/sqlite-db')


const charuto = require('./controllers/charuto_controller')




app.use(express.json())



charuto(app,bdSqlite)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})