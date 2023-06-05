"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("category", [
      {
        name: "Electronics",
        description: "All the products of electronics is here...",
      },
      {
        name: "Clothes",
        description: "All the products of clothes is here...",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("category", null, {});
  },
};
