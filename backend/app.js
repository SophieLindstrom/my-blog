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
const db = new sqlite3.Database('./db/SophieDatabase.db', (err) => {
  if (err) {
    console.error(err.message);
  }else{console.log('Connected to the database.');}
  
});


console.log(db);

const port = process.env.PORT || 4000;

app.get('/', (req, res) =>{
  res.send('Hello from praktikanterna');
});

app.get('/posts', function(req, res){
  console.log(req.query);
  res.setHeader('Content-Type', 'application/json');

  db.all("SELECT * FROM blogposts LIMIT 10", function(err, rows) {  
    if (err) {
      console.error(err.message);
    }

      res.send(JSON.stringify(rows));
  });
});

app.get('/post/:id', function(req, res){
  console.log(req.params.id);

  const id = req.params.id;

  res.setHeader('Content-Type', 'application/json');

  db.get("SELECT * FROM blogposts WHERE id = ? LIMIT 1", [id], function(err, row) {  
    if (err) {
      console.error(err.message);
    }

      res.send(JSON.stringify(row));
  });
});

app.post('/addpost', function(req, res){
  console.log(req.body);
  const title =  req.body.title;
  const author = req.body.author;
  const image = req.body.image;
  const text = req.body.text;
  res.setHeader('Content-Type', 'application/json');


  db.run("INSERT INTO blogposts (author, title, image, text) VALUES (?,?,?,?)",[author, title, image, text], function (err) {

    // const greeting = `Det här är min titel: ${title}`;

    console.log("här är mitt id", this.lastID);

     res.send(JSON.stringify({ id: this.lastID }));

    if (err) {
      console.error(err.message);
    } 
  });
});

app.listen(port, () =>
  console.log(`Server ts running on port ${port}, http://localhost:${port}`)
);

