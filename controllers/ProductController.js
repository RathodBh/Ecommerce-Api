// const { showAll, getSingleProduct } = require("../services/ProductService");
const { showAll, getSingleItem } = require("../services");

const self = {};
const modelName = "product"

self.show = async (req, res) => {
  const allData = await showAll("product");
  res.json(allData);
};

self.getProduct = async (req, res) => {
  const id = parseInt(req.params.id);
  const allData = await getSingleItem(modelName, id);
  res.json(allData);
};

module.exports = self;
