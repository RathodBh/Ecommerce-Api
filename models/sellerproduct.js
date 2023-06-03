'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SellerProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SellerProduct.init({
    seller_id: DataTypes.INTEGER,
    prod_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SellerProduct',
  });
  return SellerProduct;
};