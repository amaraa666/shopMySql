


const express = require('express');


const router = express.Router();
const products = require('../controllers/product.controller.js');

router.get('/products' , products.getAll);
router.get('/products/:id' , products.get);
router.post('/products' , products.create);
router.put('/products/:id' , products.update);
router.delete('/products/:id', products.delete);

module.exports = router;
