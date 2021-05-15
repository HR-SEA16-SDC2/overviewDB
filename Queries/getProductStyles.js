const { pool } = require('../database.js');

const getProductStyles = (req, res) => {
  const productId = req.params.product_id;

  const productStylesQuery = {
    text: `
      WITH style_table AS (
        SELECT
          styles.style_id as style_id,
          styles.name,
          styles.original_price,
          styles.sale_price,
          styles.default_style AS "default?"
      FROM styles
      WHERE styles.product_id = $1
      ), photo_table AS (
        SELECT
        photos.style_id as style_id,
        ARRAY_AGG(
          JSON_BUILD_OBJECT(
            'thumbnail_url', photos.thumbnail_url,
            'url', photos.photo_url
          )
        ) as photos
        FROM photos, style_table
        WHERE style_table.style_id = photos.style_id
        GROUP BY photos.style_id
      ), skus_table AS (
        SELECT
        skus.style_id as style_id,
        JSON_OBJECT_AGG(
          skus.sku_id, JSON_BUILD_OBJECT(
            'quantity', skus.quantity,
            'size', skus.size
          )
        ) as skus
        FROM skus, style_table
        WHERE style_table.style_id = skus.style_id
        GROUP BY skus.style_id
      )

    SELECT * FROM style_table
    LEFT JOIN photo_table ON style_table.style_id = photo_table.style_id
    LEFT JOIN skus_table ON skus_table.style_id = style_table.style_id
     ;`,
    values: [productId],
  };

  pool
    .query(productStylesQuery)
    .then((results) => {
      const responseBody = {
        product_id: productId,
        results: results.rows
      }
      res.status(200).send(responseBody);
    })
    .catch((err) => {
      console.log('error querying for product styles', err);
      res.status(500).send(err);
    });
}

module.exports = { getProductStyles };