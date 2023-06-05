"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("product", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      description: {
        type: Sequelize.STRING,
      },
      brand_name: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      cross_price: {
        type: Sequelize.INTEGER,
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue:true
      },
      stock: {
        type: Sequelize.INTEGER,
        defaultValue:1
      },
      img_url: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("product");
  },
};
