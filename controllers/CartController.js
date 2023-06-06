const { cartData } = require("../services/cart.service");

const self = {};
const modelName = "category";

self.userCart = async (req, res) => {
  console.log("req.user", req.user);
  const allData = await cartData(req?.user?.id);
  console.log("🚀 ~ file: CartController.js:9 ~ self.userCart= ~ allData:", allData)
  console.log(
    "🚀 ~ file: CartController.js:9 ~ self.userCart= ~ PRODUCT:",
    allData?.products
  );
  return res.status(200).send(allData);
};

module.exports = self;
