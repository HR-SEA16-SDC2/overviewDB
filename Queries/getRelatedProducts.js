const { pool } = require('../database.js');

const getRelatedProducts = (req, res) => {
  const productId = req.params.product_id;

  const relatedProductsQuery = {
    text: `
    SELECT
      ARRAY_AGG(related_products.related_product_id) as related_products
    FROM
      related_products
    WHERE
      related_products.product_id = $1
     ;`,
    values: [productId],
  };

  pool
    .query(relatedProductsQuery)
    .then((results) => {
      res.status(200).send(results.rows[0].related_products);
    })
    .catch((err) => {
      console.log('error querying for single product', err);
      res.status(500).send(err);
    });
}

module.exports = { getRelatedProducts };