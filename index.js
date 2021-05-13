const express = require('express');
// const morgan = require('morgan');
//const db = require('pathToDbFiles');
// const routes = require('./routes.js');
const app = express();
const {
  getSingleProduct,
} = require('./Queries/index.js');
// app.use(morgan('dev'));
// app.use(routes);


app.get('/product/:product_id', getSingleProduct);



app.get('/', (req, res) => {
  res.status(200).send('♪┏(・o･)┛♪┗ ( ･o･) ┓♪♪   ♪⁽⁽٩( ᐖ )۶⁾⁾♪♪₍₍٩( ᐛ )۶₎₎♪   ♪└[∵┌]♪└[ ∵ ]┘[┐∵]┘♪♪')
});
app.listen(3000, () => {
  console.log('Now rockin\' out to port 3000! \\m/(>.<)\\m/');
});