'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product - Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product - Category.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product-Category',
  });
  return Product - Category;
};