
const { showAll } = require("../services");

const self = {};
const modelName = "category";

self.names = async (req, res) => {
  const allData = await showAll(modelName);
  const catNames = allData?.map((cat)=>cat?.name)
  return res.status(200).send(catNames);
};


module.exports = self;
