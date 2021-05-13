const { Pool } = require('pg');
const { config } = require('./dbConfig.js');
//---------------------------------------------------

const pool = new Pool(config);
pool.connect((err, success) => {
  if (err) {
    console.log('😢 error connecting to database 😞', err);
  } else {
  console.log('👍👍 Successfully connected to the database! 🔥🔥🔥');
  }
});


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