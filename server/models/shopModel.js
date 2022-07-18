const mongoose = require('mongoose');
const productSchema = require('./schemas/productSchema');

const shopSchema = new mongoose.Schema({
  shop: {
    type: String,
    required: [true, 'A shop must have a name!'],
    unique: true,
    trim: true,
  },
  products: [productSchema],
});

const Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;

// products: [
//   {
//     id: {
//       type: String,
//       required: [true, 'A product must have an id'],
//       unique: true,
//       trim: true,
//       minLength: [2, 'A product name must have more or equal then 2 chars'],
//     },
//     title: {
//       type: String,
//       required: [true, 'A product must have a title'],
//       unique: true,
//       trim: true,
//       minLength: [5, 'A product title must have more or equal then 5 chars'],
//     },
//     description: {
//       type: String,
//       required: [true, 'A product must have a description'],
//       unique: true,
//       trim: true,
//       minLength: [
//         5,
//         'A product description must have more or equal then 5 chars',
//       ],
//     },
//     imgLink: {
//       type: String,
//       required: [true, 'A product must have an image link'],
//       trim: true,
//     },
//     price: {
//       type: Number,
//       required: [true, 'A product must have a price'],
//     },
//   },
// ],

// products: [
//   {
//     type: mongoose.Schema.ObjectId,
//     ref: 'Product',
//     required: [true, 'Product must belong to a shop!'],
//   },
// ],
