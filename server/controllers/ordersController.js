const Order = require('../models/orderModel');

const sendRespose = (res, httpCode, status, payload) => {
  return res.status(httpCode).send({
    status: status,
    data: payload,
  });
};

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
  const queryObject = {};
  const queryOrderId = req.query.orderId;
  const queryEmail = req.query.email;
  const queryPhone = req.query.phone;

  if (queryOrderId) {
    queryObject.orderId = queryOrderId;
  } else if (queryEmail && queryPhone) {
    queryObject['userData.email'] = queryEmail;
    queryObject['userData.phone'] = queryPhone;
  } else {
    return sendRespose(res, 400, 'error', `One of the fields wasn't set!`);
  }

  const doc = await Order.find(queryObject).sort({ createdAt: 1 });

  sendRespose(res, 200, 'success', doc);
};
