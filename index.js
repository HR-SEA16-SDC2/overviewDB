const express = require('express');
const morgan = require('morgan');
//const db = require('pathToDbFiles');
const routes = require('./routes.js');
const app = express();

app.use(morgan('dev'));
app.use(routes);

app.listen(3000, () => {
  console.log('Now rockin\' out to port 3000! \\m/(>.<)\\m/');
});