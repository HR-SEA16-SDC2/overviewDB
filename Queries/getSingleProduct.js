const { pool } = require('../database.js');

const getSingleProduct = (req, res) => {
  const productId = req.params.product_id;

  const productInfoQuery = {
    text: `
    SELECT
      JSON_BUILD_OBJECT(
        'id', products.product_id,
        'name', products.name,
        'slogan', products.slogan,
        'description', products.description,
        'category', products.category,
        'default_price', products.default_price,
        'features', ARRAY_AGG(
          JSON_BUILD_OBJECT(
            'feature', features.feature_name,
            'value', features.feature_value
          )
        )
      ) as product_info
    FROM
      products
    INNER JOIN features
      ON products.product_id = features.product_id
    WHERE
        products.product_id = $1
    GROUP BY
        products.product_id
     ;`,
    values: [productId],
  };

  pool
    .query(productInfoQuery)
    .then((results) => {
      res.status(200).send(results.rows[0].product_info);
    })
    .catch((err) => {
      console.log('error querying for single product', err);
      res.status(500).send(err);
    });
}

module.exports = { getSingleProduct };