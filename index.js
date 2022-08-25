const express = require('express');
const app = express();
const port = process.env.port || 3000;
const cors = require('cors');
const bodyparser = require('body-parser');
const db = require('./service/connections/db.js');



app.get('/', (req, res) => {
  res.send('Hello world!');
})

app.get('/statistics', (req, res) => {
  db.select('*')
    .from('todos')
    .limit(10)
    .then((data) => {console.log(data);})
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
})