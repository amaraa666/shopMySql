

const express = require('express');

const router = express.Router();
const menus = require('../controllers/menu.controller.js');

router.get('/menus', menus.getAll);
router.get('/menu/:id', menus.get);
router.post('/menus', menus.create);
router.put('/menu/:id', menus.uptade);
router.delete('/menus/:id', menus.delete);

module.exports = router;