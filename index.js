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
  db.select('todo_id', 'start_date', 'end_date', 'todo_body', 'category')
    .from('todos')
    .where('user_id', 9)
    .then((data) => {
      console.log(data);
      res.send(data);
    })
})


app.listen(port, () => {
  console.log(`app listening on port ${port}`);
})