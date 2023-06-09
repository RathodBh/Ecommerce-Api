'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product_category.init(
    {
      prod_id: DataTypes.INTEGER,
      cat_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "product_category",
      freezeTableName: true,
    }
  );
  return product_category;
};