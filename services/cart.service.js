const models = require("../models");
const myModal = models.cart;

const self = {};

self.CartData = async (id, onlyID = false) => {
  try {
    const allData = await myModal.findAll({
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
    const allData = await myModal.findAll({
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
    const allData = await myModal.findAll({
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

module.exports = self;
