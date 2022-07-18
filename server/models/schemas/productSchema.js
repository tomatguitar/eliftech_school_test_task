const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, 'A product must have an id'],
    unique: true,
    trim: true,
    minLength: [2, 'A product name must have more or equal then 2 chars'],
  },
  title: {
    type: String,
    required: [true, 'A product must have a title'],
    unique: true,
    trim: true,
    minLength: [5, 'A product title must have more or equal then 5 chars'],
  },
  description: {
    type: String,
    unique: true,
    trim: true,
    minLength: [
      5,
      'A product description must have more or equal then 5 chars',
    ],
  },
  imgLink: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'A product must have a price'],
  },
});

module.exports = productSchema;
