"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    static associate(models) {
      order.belongsTo(models.user_order, {
        foreignKey: "user_order_id",
      });

      order.belongsTo(models.product, {
        foreignKey: "prod_id",
      });
    }
  }
  order.init(
    {
      user_order_id: DataTypes.INTEGER,
      prod_id: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      total: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "order",
      freezeTableName: true,
    }
  );
  return order;
};
