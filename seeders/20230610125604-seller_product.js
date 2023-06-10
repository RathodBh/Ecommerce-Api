"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("seller_product", [
      {
        seller_id: 1,
        prod_id: 1,
      },
      {
        seller_id: 2,
        prod_id: 2,
      },
      {
        seller_id: 2,
        prod_id: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("seller_product", null, {});
  },
};
