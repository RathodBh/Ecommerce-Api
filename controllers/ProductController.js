// const { showAll, getSingleProduct } = require("../services/ProductService");
const { showAll, getSingleItem } = require("../services");
const { ProductWithCat } = require("../services/product.service");

const self = {};
const modelName = "product";

self.show = async (req, res) => {
  const allData = await showAll("product");
  return res.status(200).send(allData);
};

self.showAllWithCategory = async (req, res) => {
  const allData = await ProductWithCat();
  return res.status(200).send(allData);
};

self.getProduct = async (req, res) => {
  const id = parseInt(req.params.id);
  const allData = await getSingleItem(modelName, id);
  return res.status(200).send(allData);

};

module.exports = self;
