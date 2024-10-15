var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) 

{
  let recommended_products = [
  {"id": 1, "name": "Face Cream", "price": 15.99, "category": "Skincare"},
  {"id": 2, "name": "Serum", "price": 9.99, "category": "Makeup"},
  {"id": 3, "name": "Toner", "price": 29.99, "category": "Fragrance"},
  {"id": 4, "name": "Sunscreen", "price": 29.99, "category": "Fragrance"},]
  res.send(recommended_products);
});

module.exports = router;
