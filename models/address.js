"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      address.belongsTo(models.user, {
        foreignKey: "user_id",
      });
    }
  }
  address.init(
    {
      user_id: DataTypes.INTEGER,
      addr: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "address",
      freezeTableName: true,
    }
  );
  return address;
};
