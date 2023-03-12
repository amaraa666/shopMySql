



const express = require('express');

const router = express.Router();
const orderDet = require('../controllers/order-details.controller.js');

router.get('/orderDet' , orderDet.getAll);
router.get('/orderDet/:id' , orderDet.get);
router.post('/orderDet' , orderDet.create);
router.put('/orderDet/:id' , orderDet.update);
router.delete('/orderDet/:id', orderDet.delete);

module.exports = router;