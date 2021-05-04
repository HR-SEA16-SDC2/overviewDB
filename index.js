const express = require('express');

const app = express();


app.get('/', (req, res) => {
  res.send('Booyah!')
});

app.listen(3000, () => {
  console.log('Now rockin\' out to port 3000! \\m/(>.<)\\m/');
});