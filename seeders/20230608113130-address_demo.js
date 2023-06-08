"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("address", [
      {
        user_id: 1,
        addr: "14, K. K., Ahmedabad, 380061",
        city: "Ahmedabad",
        state: "Gujrat",
      },
      {
        user_id: 1,
        addr: "B/H Shree Swaminarayan temple Anand",
        city: "Anand",
        state: "Gujrat",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("address", null, {});
  },
};
