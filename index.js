const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('ci with travis');
});

const server = app.listen(5000, () => {
  console.log('App running on heroku');
});

module.exports = server;