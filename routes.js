const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).send('♪┏(・o･)┛♪┗ ( ･o･) ┓♪♪   ♪⁽⁽٩( ᐖ )۶⁾⁾♪♪₍₍٩( ᐛ )۶₎₎♪   ♪└[∵┌]♪└[ ∵ ]┘[┐∵]┘♪♪')
});

module.exports = router;