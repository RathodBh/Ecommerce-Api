const models = require("../models");

const self = {};
const modelName = models.product;
const category = models.category;

self.ProductWithCat = async () => {
  try {
    const allData = await modelName.findAll({
      include: [{
        model: category
      }],
    });
    return allData;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};



module.exports = self;
