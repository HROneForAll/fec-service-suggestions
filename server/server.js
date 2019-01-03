const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/index.js');
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public'));

app.get('/homes/:id/suggestions', function(req, res) {
  let id = req.params.id;
  db.findHome(id)
    .then((results) => {
      res.status(200).send(results);
    }).catch((error) => {
      console.log(error);
    });
});

app.get('/favorites', function(req, res) {
  db.getFavorites()
    .then((results) => {
      res.status(200).send(results);
    }).catch((error) => {
      console.log(error);
    });
});

app.post('/favorites', function(req, res) {
  let listName = req.body.listName;
  db.createFavoriteList(listName);
  res.status(201).send('List Added');
});

const port = 3050;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});