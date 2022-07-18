const Order = require('../models/orderModel');

exports.placeOrder = async (req, res, next) => {
  await Order.create(req.body, function (err, order) {
    const date = new Date();
    order.set(
      'orderId',
      `WD${date.getFullYear()}${date.getMonth()}${date.getDay()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}${date.getMilliseconds()}`
    );
    order.save();

    return res.status(201).send({
      status: 'success',
      data: {
        responseMessage: order.orderId,
      },
    });
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
