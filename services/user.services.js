const self = {};

self.userLogin = async (modelName, data) => {
  const myModal = models[modelName];
  try {
    const allData = await myModal.findOne(data);
    return allData;
  } catch (err) {
    console.log("err", err);
    return err;
  }
};

module.exports = self;
