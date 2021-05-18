require('newrelic');
const express = require('express');
const {
  getSingleProduct,
  getProducts,
  getProductStyles,
  getRelatedProducts,
} = require('./Queries/index.js');
const app = express();


//----- Routes -----//
app.get('/products/:product_id', getSingleProduct);
app.get('/products', getProducts);
app.get('/products/:product_id/styles', getProductStyles);
app.get('/products/:product_id/related', getRelatedProducts);
app.get('/loaderio-21293d4c32d9b6c93aac648b1e27fa59.txt', (req, res) => {
  res.sendfile('./loaderio-21293d4c32d9b6c93aac648b1e27fa59.txt')
})



app.get('/', (req, res) => {
  res.status(200).send('♪┏(・o･)┛♪┗ ( ･o･) ┓♪♪   ♪⁽⁽٩( ᐖ )۶⁾⁾♪♪₍₍٩( ᐛ )۶₎₎♪   ♪└[∵┌]♪└[ ∵ ]┘[┐∵]┘♪♪')
});
app.listen(3000, () => {
  console.log('Now rockin\' out to port 3000! \\m/(>.<)\\m/');
});