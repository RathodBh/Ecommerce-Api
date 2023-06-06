const jwt = require("jsonwebtoken");
const { showAll, create, findOneData } = require("../services");
const { userLogin } = require("../services/user.service");

const self = {};
const modelName = "user";

self.show = async (req, res) => {
  const allData = await showAll(modelName);
  return res.status(200).send(allData);
};

self.signup = async (req, res) => {
  const allData = await create(modelName, req.body);
  return res.status(200).send("Signup successfully");
};

self.login = async (req, res) => {
  const allData = await findOneData(modelName, req.body);
  if (allData) {
    const { password, ...rest } = allData?.dataValues;
    console.log("rest", rest);
    const token = jwt.sign(rest, process.env.JWT_KEY, { expiresIn: "1h" });
    return res.status(200).send(token);
  }
  return res.status(400).send("Invalid credential");
};

self.data = async (req, res) => {
  if (req.user) return res.status(200).send(req.user);
  else return res.status(401).send("Invalid data");
};

module.exports = self;
