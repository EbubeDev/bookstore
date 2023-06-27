const path = require('path');

const express = require('express');
const shopController = require('../controllers/products.js')
const router = express.Router();

router.get('/', shopController.getProducts);

module.exports = router;  