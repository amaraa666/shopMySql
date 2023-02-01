


const express = require('express');


const router = express.Router();
const products = require('../controllers/product.controller.js');

router.get('/products' , products.getAll);
router.get('/product/:id' , products.get);
router.post('/products' , products.create);
router.put('/product' , products.uptade);
router.delete('/products/:id', products.delete);

module.exports = router;
