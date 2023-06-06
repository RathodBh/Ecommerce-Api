"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    static associate(models) {
      category.belongsToMany(models.product, {
        through: "product_category",
        foreignKey: "cat_id",
      });
    }
  }
  category.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      img_url: DataTypes.STRING,
      is_active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "category",
      freezeTableName: true,
      tableName: "category",
    }
  );
  return category;
};
