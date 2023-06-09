const {
  showAll,
  createData,
  bulkCreateData,
  findOneData,
  findAllData,
} = require("../services");

const self = {};

self.addOrder = async (req, res) => {
  const user_order_data = {
    user_id: req.user.id,
    add_id: req.body.add_id,
    total: req.body.data
      ?.map((cur) => cur.total)
      .reduce((tot = 0, cur) => (tot += cur)),
  };

  const user_order_result = await createData("user_order", user_order_data);

  const order_data = req.body.data?.map((cur) => {
    return {
      user_order_id: user_order_result.id,
      prod_id: cur.prod_id,
      quantity: cur.quantity,
      price: cur.price,
      total: cur.total,
    };
  });

  const order_result = await bulkCreateData("order", order_data);

  return res.status(200).send(user_order_result);
};
self.lastOrder = async (req, res) => {
  const user_id = req.user.id;
  const userOrder = await findAllData("user_order", { user_id });
  const userOrderResult = userOrder[userOrder.length - 1];
  const orderAddress = await findAllData("address", {
    id: userOrderResult.add_id,
  });

  const allOrderResult = await findAllData("order", {
    user_order_id: parseInt(userOrderResult.id),
  });

  return res
    .status(200)
    .send({ products: allOrderResult, address: orderAddress });
};
module.exports = self;
