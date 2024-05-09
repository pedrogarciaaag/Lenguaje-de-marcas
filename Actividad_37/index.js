const express = require('express')
const db = require('better-sqlite3')('act37.sqlite')

const app = express()
const port = 3000

app.set("view engine", "ejs");

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//INDEX
app.get("/", (req, res) => {
  const productes = db.prepare("SELECT * FROM productes").all();
  const empreses = db.prepare("SELECT * FROM empreses").all();
  res.render("patata", { productes: productes, empreses: empreses });
  res.render("patata")
})

//EMPRESES
app.get('/empreses', (req, res) => {
  const empreses = db.prepare("SELECT * FROM empreses").all();
  res.render("empreses", msgs = { msgs: empreses })
})

app.get('/empresa', (req, res) => {
  res.render("empresa")
})

app.post('/empresa', (req, res) => {
  if (req.body.nom && req.body.email) {
    const statement = db.prepare("INSERT INTO empreses (nom,email) VALUES (?,?)")
    const info = statement.run(req.body.nom, req.body.email)
  }
  res.redirect("empresa")
})

//PRODUCTES
app.get('/productes', (req, res) => {
  const productes = db.prepare("SELECT * FROM productes").all();
  res.render("productes", msgs = { msgs: productes })
})

//
app.get('/producte', (req, res) => {
  res.render("producte")
})

//
app.post('/producte', (req, res) => {
  if (req.body.nom && req.body.preu) {
    const statement = db.prepare("INSERT INTO productes (nom,preu) VALUES (?,?)")
    const info = statement.run(req.body.nom, req.body.preu)
  }
  res.redirect("producte")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})