"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("product_category", [
      {
        prod_id: 1,
        cat_id: 1,
      },
      {
        prod_id: 2,
        cat_id: 1,
      },
      {
        prod_id: 3,
        cat_id: 2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("product_category", null, {});
  },
};
