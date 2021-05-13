const express = require('express');
const {
  getSingleProduct,
} = require('./Queries/index.js');
const app = express();


//----- Routes -----//

app.get('/product/:product_id', getSingleProduct);
// app.get('/product/:product_id/styles', getProductStyles);



app.get('/', (req, res) => {
  res.status(200).send('♪┏(・o･)┛♪┗ ( ･o･) ┓♪♪   ♪⁽⁽٩( ᐖ )۶⁾⁾♪♪₍₍٩( ᐛ )۶₎₎♪   ♪└[∵┌]♪└[ ∵ ]┘[┐∵]┘♪♪')
});
app.listen(3000, () => {
  console.log('Now rockin\' out to port 3000! \\m/(>.<)\\m/');
});