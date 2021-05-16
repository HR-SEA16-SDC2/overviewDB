const { Pool } = require('pg');
const { config } = require('./dbConfig.js');
//---------------------------------------------------

const pool = new Pool(config);

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