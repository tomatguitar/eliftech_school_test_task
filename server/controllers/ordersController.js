const Order = require('../models/orderModel');

exports.placeOrder = async (req, res, next) => {
  const doc = await Order.create(req.body);

  res.status(201).send({
    status: 'success',
    data: doc,
  });
};

exports.getOrders = async (req, res, next) => {
  const queryEmail = req.query.email;
  const queryPhone = req.query.phone;
  if (!queryEmail || !queryPhone) {
    return res.status(400).send({
      status: 'error',
      message: `Email or phone wasn't set!`,
    });
  }

  const doc = await Order.find({
    'userData.email': queryEmail,
    'userData.phone': queryPhone,
  }).sort({ createdAt: 1 });

  res.status(200).send({
    status: 'success',
    data: doc,
  });
};
