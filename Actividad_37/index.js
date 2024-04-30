const express = require('express')
const db = require('better-sqlite3')('act37.sqlite')

const app = express()
const port = 3000

app.set("view engine","ejs");

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/",(req,res) =>{
    const rows = db.prepare("SELECT * FROM empreses").all();
    res.render("index", msgs={msgs : rows})
})


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
    const rows = db.prepare("SELECT * FROM productes").all();
    res.render("productes", msgs={msgs : rows})
})

//
app.get('/producte', (req, res) => {
    //producteID = req.query.id
    //const row = db.prepare("SELECT * FROM productes WHERE id = ?").get(producteID);
    res.render("producte")
  })
//
app.post('/producte', (req, res) => {
  console.log(req.body)
  if(req.body.nom && req.body.preu){
    const statement = db.prepare("INSERT INTO productes (nom,preu) VALUES (?,?)")
    const info = statement.run(req.body.nom,req.body.preu)
  }
  res.redirect("producte")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})