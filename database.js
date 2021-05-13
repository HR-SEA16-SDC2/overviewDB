const { Pool, Client } = require('pg');
const { config } = require('./dbConfig.js');

const pool = new Pool(config);
pool.connect((err, success) => {
  if (err) {
    console.log('error connecting to database', err);
  } else {
  console.log('successfully connected to the database!');
  }
});

//Query Helper Funcs:
const calculateQueryRange = (page, count) => {

  const queryRange = {
    start: (count * page) - count + 1,
    end: count * page,
  };
  return queryRange;
}


module.exports = {
  pool, calculateQueryRange,
}