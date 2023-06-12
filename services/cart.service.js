const models = require("../models");
const Cart = models.cart;
const Product_cart = models.product_cart;

const self = {};

self.CartData = async (id, onlyID = false) => {
  try {
    const allData = await Cart.findAll({
      attributes: [],
      where: {
        user_id: id,
      },
      include: {
        model: models.product,
        through: { attributes: [] },
      },
    });
    return allData;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

self.CartDataID = async (id) => {
  try {
    const allData = await Cart.findAll({
      attributes: [],
      where: {
        user_id: id,
      },
      include: {
        model: models.product,
        attributes: ["id"],
        through: { attributes: [] },
      },
    });
    return allData;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

self.GetCartID = async (id) => {
  try {
    const allData = await Cart.findAll({
      where: {
        user_id: id,
      },
    });
    return allData;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

self.updateQuantity = async (condition, data) => {
  try {
    const allData = await Product_cart.update(data, {
      where: condition,
    });
    return allData;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

module.exports = self;
