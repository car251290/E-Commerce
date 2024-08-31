const express = require('express');
const {getProducts, getProducts} = require('../controllers/productController');


router.get('/', getProducts);

router.get('/:id', getProductById);
module.exports = router; 
