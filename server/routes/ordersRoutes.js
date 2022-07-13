const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController');

router.route('/').post(ordersController.placeOrder);

module.exports = router;