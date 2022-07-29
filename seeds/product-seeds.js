const { Product } = require('../models');

const productData = [
  {
    product_name: 'socks',
    price: 7.99,
    stock: 22,
    category_id: 1,
  },
  {
    product_name: 'hat',
    price: 20.25,
    stock: 25,
    category_id: 5,
  },
  {
    product_name: '511 tactial pants',
    price: 55.99,
    stock: 10,
    category_id: 4,
  },
  {
    product_name: 'wrangler jeans',
    price: 12.99,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: 'boots',
    price: 100.99,
    stock: 88,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
