const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/index.js');
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public'));

app.get('/suggestions', function(req, res) {
  Promise.resolve(db.find())
    .then((results) => {
      res.status(200).send(results);
    }).catch((error) => {
      console.log(error);
    });
});


const port = 3050;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});