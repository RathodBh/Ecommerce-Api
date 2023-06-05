"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user_order.belongsTo(models.user, {
        foreignKey: "user_id",
      });

      user_order.hasMany(models.order, {
        foreignKey: "user_order_id",
      });
    }
  }
  user_order.init(
    {
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "user_order",

    }
  );
  return user_order;
};
