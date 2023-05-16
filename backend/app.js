const express = require('express');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
const sqlite3 = require('sqlite3').verbose();
// Skapa en anslutning till databasen
const db = new sqlite3.Database('./db/database.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database.');
});

const port = process.env.PORT || 4000;

app.get('/', (req, res) =>{
  res.send('Hello from praktikanterna');
});

app.get('/hello', function(req, res){
  console.log(req.query);
  res.setHeader('Content-Type', 'application/json');

  const greeting = `Hej gästanvändare, och välkommen till Apendo!`;

  res.send(JSON.stringify({ message: greeting }));
});

app.post('/hello', function(req, res){
  console.log(req.body);
  const firstName =  req.body.firstName;
  const lastName = req.body.lastName;
  res.setHeader('Content-Type', 'application/json');


  db.run("INSERT INTO Register(firstName, lastName) VALUES (?,?)",[firstName, lastName], function (err) {

    const greeting = `Hej ${firstName} ${lastName}, och välkommen till Apendo!`;

    res.send(JSON.stringify({ message: greeting, userId: this.lastID }));

    if (err) {
      console.error(err.message);
    } 
  });
});

app.put('/hello', function(req, res){
  console.log(req.body);
  const userId = req.body.userId;
  const firstName =  req.body.firstName;
  const lastName = req.body.lastName;
  res.setHeader('Content-Type', 'application/json');

  db.run("UPDATE Register SET firstName = ?, lastName = ? WHERE id = ?",[firstName, lastName, userId], function (err) {
    if (err) {
      console.error(err.message);
    } 
  });
  

  const greeting = `Hej ${firstName} ${lastName}! Du har nu ändrat dina uppgifter, välkommen till Apendo!`;

  res.send(JSON.stringify({ message: greeting }));
});


app.listen(port, () =>
  console.log(`Server ts running on port ${port}, http://localhost:${port}`)
);

