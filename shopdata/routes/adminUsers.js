

const express = require("express");
const router = express.Router();
const adminUsers = require('../controllers/AdminUsers.controller.js');

router.get('/adminUsers', adminUsers.getAll);
router.get('/adminUsers/:id', adminUsers.get);
router.post('adminUsers/', adminUsers.create);
router.put('/adminUsers/:id', adminUsers.uptade);
router.delete('/adminUsers/:id', adminUsers.delete);

module.exports = router;