"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    static associate(models) {
      product.belongsToMany(models.cart, {
        through: "product_cart",
      });

      product.belongsToMany(models.category, {
        through: "product_category",
      });

      product.belongsToMany(models.seller, {
        through: "seller_product",
      });
    }
  }
  product.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      brand_name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      cross_price: DataTypes.INTEGER,
      is_active: DataTypes.BOOLEAN,
      stock: DataTypes.INTEGER,
      img_url: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "product",
      freezeTableName: true,
    }
  );
  return product;
};
