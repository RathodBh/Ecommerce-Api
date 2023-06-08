const models = require("../models");

const self = {};
const modelName = models.product;
const category = models.category;
const cart = models.cart;

self.ProductWithCat = async () => {
  try {
    const allData = await modelName.findAll({
      include: [
        {
          model: category,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
        {
          model: cart,
          attributes: ["id"],
          through: {
            attributes: ["id", "quantity"],
          },
        },
      ],
    });
    return allData;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

module.exports = self;
