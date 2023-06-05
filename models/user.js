"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      user.hasMany(models.user_order, {
        foreignKey: "user_id",
      });

      user.hasMany(models.address, {
        foreignKey: "user_id",
      });

      user.hasOne(models.cart, {
        foreignKey: "user_id",
      });
    }
  }
  user.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      mobile: DataTypes.BIGINT,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
      freezeTableName: true,
    }
  );
  return user;
};
