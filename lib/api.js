const express = require('express');
const dbPath = require('../lib/db_loading').getDbName();
const low = require('lowdb');

const app = express();

const db = low(dbPath);

app.get('/api', (req, res) => {
  const tasks = db.get('tasks').value();
  res.status(200).json(tasks);
});


module.exports = app;
