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

const testQueryStr = {
  text: 'Select * from skus where style_id = $1',
  values: [1],
};

pool
.query(testQueryStr)
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
})