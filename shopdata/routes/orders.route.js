

const express = require('express');

const router = express.Router();
const orders = require('../controllers/order.controller.js');

router.get('/orders' , orders.getAll);
router.get('/orders/:id' , orders.get);
router.post('/orders' , orders.create);
router.put('/orders/:id' , orders.update);
router.delete('/orders/:id', orders.delete);

module.exports = router;