const router = require('express').Router();
const db = require('./database.js');



router.get('/test', db.singleProduct);

module.exports = router;