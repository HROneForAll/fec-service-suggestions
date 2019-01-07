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

app.get('/user/favorites', function(req, res) {
  db.getFavorites()
    .then((results) => {
      res.status(200).send(results);
    }).catch((error) => {
      console.log(error);
    });
});

app.post('/user/favorites', function(req, res) {
  let listName = req.body.listName;
  db.createFavoriteList(listName, () => {
    res.status(201).send('List Added');
  });
});

app.put('/user/updateFavorite', function(req, res) {
  let listName = req.body.listName;
  let oldList = req.body.oldList;
  let updatedList = req.body.favList;

  db.updateFavorite(listName, oldList, updatedList, () => {
    res.status(201).send('List Updated');
  });
});

const port = 3050;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});