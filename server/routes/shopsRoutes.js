const express = require('express');
const router = express.Router();
const shopsController = require('../controllers/shopsController');

router.route('/:shopId').get(shopsController.getShopProducts);

module.exports = router;
