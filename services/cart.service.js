const models = require("../models");
const myModal = models.cart;

const self = {};

self.cartData = async (id) => {
  try {
    const allData = await myModal.findAll({
      where: {
        user_id: id,
      },
      include: {
        model: models.product,
      },
    });
    return allData;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

module.exports = self;
