const express = require('express');
const bodyParser = require('body-parser');
// const db = require('../db/index.js');
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public'));


const port = 3050;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});