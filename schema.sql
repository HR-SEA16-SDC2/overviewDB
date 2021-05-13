DROP TABLE IF EXISTS products;
CREATE TABLE products (
  product_id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  slogan VARCHAR,
  description VARCHAR,
  category VARCHAR,
  default_price VARCHAR
);

DROP TABLE IF EXISTS styles;
CREATE TABLE styles (
  style_id SERIAL PRIMARY KEY,
  product_id INT NOT NULL,
  name VARCHAR NOT NULL,
  sale_price VARCHAR,
  original_price VARCHAR,
  default_style BOOLEAN,
  FOREIGN KEY (product_id)
    REFERENCES products (product_id)
);

DROP TABLE IF EXISTS skus;
CREATE TABLE skus (
  sku_id SERIAL PRIMARY KEY,
  style_id INT NOT NULL,
  size VARCHAR NOT NULL,
  quantity VARCHAR NOT NULL,
  FOREIGN KEY (style_id)
    REFERENCES styles (style_id)
);

DROP TABLE IF EXISTS features;
CREATE TABLE features (
  feature_id SERIAL PRIMARY KEY,
  product_id INT NOT NULL,
  feature_name VARCHAR NOT NULL,
  feature_value VARCHAR,
  FOREIGN KEY (product_id)
    REFERENCES products (product_id)
);

DROP TABLE IF EXISTS related_products;
CREATE TABLE related_products (
  id SERIAL NOT NULL PRIMARY KEY,
  product_id INT NOT NULL,
  related_product_id INT NOT NULL,
  FOREIGN KEY (product_id)
    REFERENCES products (product_id)
);

CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  style_id INT NOT NULL,
  photo_url VARCHAR,
  thumbnail_url VARCHAR
);