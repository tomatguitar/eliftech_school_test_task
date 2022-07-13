const Order = require('../models/orderModel');

exports.placeOrder = async (req, res, next) => {
  const doc = await Order.create(req.body);

  res.status(201).send({
    status: 'success',
    data: doc,
  });
};
