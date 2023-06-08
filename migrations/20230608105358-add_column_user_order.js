"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      "user_order", // table name
      "add_id", // new field name
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "address",
          key: "id",
        },
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("user_order", "add_id");
  },
};
