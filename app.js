const express = require('express');
const dbLoading = require('./lib/db_loading');

const app = express();

console.log("env: " + process.env.NODE_ENV)

app.use('/', express.static('public'));

// eslint-disable-next-line no-console
app.listen(3000, () => { console.log('listening...'); });
