

const express = require('express');


const router = express.Router();
const users = require('../controllers/user.controller.js');

router.get('/users', users.getAll);
router.get('/users/:id', users.get);
router.post('/users', users.create);
router.post('/users/login', users.login);
router.put('/users/:id', users.uptade);
router.delete('/users/:id', users.delete);


module.exports = router;