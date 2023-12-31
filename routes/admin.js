const path = require('path');
// const rootDir = require('../util/path.js')

const express = require('express');

const router = express.Router();
const productsController = require('../controllers/products.js')


router.get('/add-product', productsController.getAddProduct);

router.post('/add-product', productsController.postAddProduct);

module.exports = router;
