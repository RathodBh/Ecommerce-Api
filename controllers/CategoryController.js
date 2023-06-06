
const { showAll } = require("../services");

const self = {};
const modelName = "category";

self.names = async (req, res) => {
  const allData = await showAll(modelName);
  const catNames = allData?.map((cat)=>cat?.name)
  console.log("🚀 ~ file: CategoryController.js:11 ~ self.names= ~ catNames:", catNames)
  return res.status(200).send(catNames);
};


module.exports = self;
