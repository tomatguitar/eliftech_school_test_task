const Shop = require('../models/shopModel');

exports.getShopProducts = async (req, res, next) => {
  const query = await Shop.findOne({ shop: req.params.shopId });
  const shop = await query;

  res.status(200).send({
    status: 'success',
    data: shop,
  });
};
