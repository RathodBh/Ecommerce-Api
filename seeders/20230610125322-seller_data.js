"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("seller", [
      {
        name:"Kishan",
        email: "kishan@gmail.com",
        password: "Kishan@123",
      },
      {
        name: "Carry",
        email: "carry@gmail.com",
        password: "Carry@123",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("seller", null, {});
  },
};
