const { pool, calculateQueryRange } = require('../database.js');

const getProducts = (req, res) => {
  let { page, count } = req.query;
  !page && (page = 1);
  !count && (count = 5);
  const { start, end } = calculateQueryRange(page, count);


  const productsQuery = {
    text: `
    SELECT ARRAY_AGG(
      JSON_BUILD_OBJECT(
        'id', products.product_id,
        'name', products.name,
        'slogan', products.slogan,
        'description', products.description,
        'category', products.category,
        'default_price', products.default_price
      )
    ) as product_results
    FROM
      products
    WHERE
        products.product_id BETWEEN $1 AND $2
     ;`,
    values: [start, end]
  };

  pool
    .query(productsQuery)
    .then((results) => {
      res.status(200).send(results.rows[0].product_results);
    })
    .catch((err) => {
      console.log('error querying for multiple products', err);
      res.status(500).send(err);
    });
}

module.exports = { getProducts };