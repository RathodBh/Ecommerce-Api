const jwt = require("jsonwebtoken");
const { showAll, createData, findOneData, updateData } = require("../services");

const self = {};
const modelName = "user";

self.show = async (req, res) => {
  const allData = await showAll(modelName);
  return res.status(200).send(allData);
};

self.signup = async (req, res) => {
  const allData = await createData(modelName, req.body);
  return res.status(200).send("Signup successfully");
};

self.login = async (req, res) => {
  const allData = await findOneData(modelName, req.body);
  if (allData) {
    const { password, ...rest } = allData?.dataValues;
    const token = jwt.sign(rest, process.env.JWT_KEY);
    return res.status(200).send(token);
  }
  return res.status(400).send("Invalid credential");
};

self.data = async (req, res) => {
  if (req.user) return res.status(200).send(req.user);
  else return res.status(401).send("Invalid data");
};

self.address = async (req, res) => {
  const allData = await showAll("address");
  console.log(
    "🚀 ~ file: UserController.js:35 ~ self.address= ~ allData:",
    allData
  );
  return res.status(200).send(allData);
};

self.addAddress = async (req, res) => {
  const allData = await createData("address", {
    ...req.body,
    user_id: req.user.id,
  });
  return res.status(200).send(allData);
};

self.editAddress = async (req, res) => {
  const allData = await updateData("address", req.params.id, {
    ...req.body,
    user_id: req.user.id,
  });
  return res.status(200).send(allData);
};

module.exports = self;
