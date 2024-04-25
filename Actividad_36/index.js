const express = require('express')
const db = require('better-sqlite3')('act36.sqlite')
const app = express()
const port = 3000

app.use(express.json())


app.get('/empreses', (req, res) => {
    const row = db.prepare("SELECT * FROM empreses").all();
    res.send(row)
  })

app.get('/empresa', (req, res) => {
    empresaID = req.query.id
    const row = db.prepare("SELECT * FROM empreses WHERE id = ?").get(empresaID);
    res.send(row)
  })

app.get('/productes', (req, res) => {
  const row = db.prepare("SELECT * FROM productes").all();
  res.send(row)
})

app.get('/producte', (req, res) => {
    producteID = req.query.id
    const row = db.prepare("SELECT * FROM productes WHERE id = ?").get(producteID);
    res.send(row)
  })

app.get('/comandes', (req, res) => {
  const row = db.prepare("SELECT * FROM comandes").all();
  res.send(row)
})

app.get('/comanda', (req, res) => {
    comandaID = req.query.id
    const row = db.prepare("SELECT * FROM comandes WHERE id = ?").get(comandaID);
    res.send(row)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})