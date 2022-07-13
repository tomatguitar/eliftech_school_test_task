const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userData: {
    name: {
      type: String,
      required: [true, 'Please tell us your name!'],
    },
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      lowercase: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  products: [
    {
      id: String,
      title: String,
      price: Number,
      quantity: Number,
      total: Number,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  totalPrice: Number,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
