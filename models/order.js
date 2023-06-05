'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       order.belongsTo(models.user_order, {
         foreignKey: "user_order_id",
       });
    }
  }
  order.init(
    {
      user_order_id: DataTypes.INTEGER,
      prod_id: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "order",
      freezeTableName: true,
    }
  );
  return order;
};