const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController');

router.route('/').get(ordersController.getOrders).post(ordersController.placeOrder);

module.exports = router;