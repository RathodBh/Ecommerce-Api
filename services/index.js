const models = require("../models");

const self = {};

self.showAll = async (modelName) => {
  const myModal = models[modelName];
  try {
    const allData = await myModal.findAll();
    return allData;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

self.getSingleItem = async (modelName, id) => {
  const myModal = models[modelName];

  try {
    const allData = await myModal.findByPk(id);
    return allData;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

self.findOneData = async (modelName, data, includeData = {}) => {
  const myModal = models[modelName];

  try {
    return await myModal.findOne({ ...includeData, where: data });
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

self.findAllData = async (modelName, condition, includeData = {}) => {
  const myModal = models[modelName];
  try {
    const allData = await myModal.findAll({
      ...includeData,
      where: condition,
    });
    return allData;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

self.createData = async (modelName, data) => {
  const myModal = models[modelName];

  try {
    const allData = await myModal.create(data);
    return allData;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

self.bulkCreateData = async (modelName, data) => {
  const myModal = models[modelName];
  try {
    const allData = await myModal.bulkCreate(data);
    return allData;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

self.deleteData = async (modelName, condition) => {
  const myModal = models[modelName];

  try {
    const allData = await myModal.destroy({
      where: condition,
    });

    return allData;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

self.updateData = async (modelName, id, body) => {
  const myModal = models[modelName];

  try {
    const allData = await myModal.update(body, {
      where: { id },
    });

    return allData;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

module.exports = self;
