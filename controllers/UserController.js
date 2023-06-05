const jwt = require("jsonwebtoken");
const { showAll, create, findOneData } = require("../services");
const { userLogin } = require("../services/user.services");

const self = {};
const modelName = "user";

self.show = async (req, res) => {
  const allData = await showAll(modelName);
  res.status(200);
};

self.signup = async (req, res) => {
  const allData = await create(modelName, req.body);
  res.status(200);
};

self.login = async (req, res) => {
  const allData = await findOneData(modelName, req.body);
  if (allData) {
    const data = allData?.dataValues;
    const token = jwt.sign(data, process.env.JWT_KEY);
    res.status(200).send(token);
  }
  res.status(400).send("Invalid credential");
};

module.exports = self;
