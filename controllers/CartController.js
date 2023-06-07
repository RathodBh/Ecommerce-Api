const { createData, deleteData } = require("../services");
const { CartData, GetCartID, CartDataID } = require("../services/cart.service");

const self = {};

self.userCart = async (req, res) => {
  let allData;
  if (req.query.id) {
    allData = await CartDataID(req?.user?.id);
  } else {
    allData = await CartData(req?.user?.id);
  }
  return res.status(200).send(allData);
};

self.getCart = async (req, res) => {
  const allData = await GetCartID(req?.user?.id);
  return res.status(200).send(allData);
};

self.addItem = async (req, res) => {
  const allData = await createData("product_cart", req.body);
  return res.status(200).send(allData);
};

self.delItem = async (req, res) => {
  const allData = await deleteData("product_cart", req.query);
  return res.status(200).send({
    prod_id: req.query.prod_id
  });
};

module.exports = self;
