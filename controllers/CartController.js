const {
  createData,
  deleteData,
  updateData,
  findAllData,
  findOneData,
} = require("../services");
const {
  CartData,
  GetCartID,
  CartDataID,
  updateQuantity,
} = require("../services/cart.service");

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
  const allData = await findOneData("product_cart", req.body);
  if (allData) {
    const newQuantity = parseInt(allData?.quantity) + 1;
    await updateQuantity(req.body, { quantity: newQuantity });
    return res.status(200).send({ msg: "Updated" });
  } else {
    const allData = await createData("product_cart", req.body);
    return res.status(200).send(allData);
  }
};

self.delItem = async (req, res) => {
  const allData = await deleteData("product_cart", req.query);
  return res.status(200).send({
    prod_id: req.query.prod_id,
  });
};

self.delAll = async (req, res) => {
  const allData = await deleteData("product_cart", req.query);
  return res.status(200).send({
    cart_id: req.query.cart_id,
  });
};

self.updateQuantity = async (req, res) => {
  const allData = await updateData("product_cart", req.params.id, req.body);
  return res.status(200).send({
    prod_id: req.query.prod_id,
  });
};

module.exports = self;
