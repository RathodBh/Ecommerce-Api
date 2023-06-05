'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    
    static associate(models) {
      category.belongsToMany(models.product, {
        through: "product_category",
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
      
    }
  );
  return category;
};