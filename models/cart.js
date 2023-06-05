"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      cart.belongsTo(models.user, {
        foreignKey: "user_id",
      });

      cart.belongsToMany(models.product, {
        through: "product_cart"
      });
    }
  }
  cart.init(
    {
      user_id: DataTypes.INTEGER,
      
    },
    {
      sequelize,
      modelName: "cart",
    }
  );
  return cart;
};
