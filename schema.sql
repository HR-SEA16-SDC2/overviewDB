DROP TABLE IF EXISTS products;
CREATE TABLE products (
  product_id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  slogan VARCHAR(500),
  description TEXT,
  category VARCHAR(100),
  default_price DECIMAL
);

DROP TABLE IF EXISTS styles;
CREATE TABLE styles (
  style_id SERIAL PRIMARY KEY,
  product_id INT NOT NULL,
  name VARCHAR(100) NOT NULL,
  original_price DECIMAL NOT NULL,
  sale_price DECIMAL,
  default_style BOOLEAN,
  thumbnail_url TEXT,
  photo_url TEXT,
  FOREIGN KEY (product_id)
    REFERENCES products (product_id)
);

DROP TABLE IF EXISTS skus;
CREATE TABLE skus (
  sku_id SERIAL PRIMARY KEY,
  style_id INT NOT NULL,
  size VARCHAR(20) NOT NULL,
  quantity INT,
  FOREIGN KEY (style_id)
    REFERENCES styles (style_id)
);

DROP TABLE IF EXISTS features;
CREATE TABLE features (
  feature_id SERIAL PRIMARY KEY,
  product_id INT NOT NULL,
  feature_name VARCHAR(100) NOT NULL,
  feature_value VARCHAR(100) NOT NULL,
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