const express = require('express');
const app = express();
const port = process.env.port || 3000;
const cors = require('cors');
const bodyparser = require('body-parser');
const db = require('./service/connections/db.js');

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello world!');
})

app.get('/statistics', (req, res) => {
  console.log(req.body);
  db.select('todo_id', 'start_date', 'end_date', 'todo_body', 'category')
    .from('todos')
    .where('user_id', req.body.user_id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send('There was a server error', err);
    })
})

app.use((err, req, res, next) => {
  console.log('Error', err.message)
  res.status(500).json({
    status: 500,
    message: 'An error occured',
    error: err.message
  })
})
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
})