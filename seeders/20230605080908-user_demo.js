"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("user", [
      {
        first_name: "Bhavesh",
        last_name: "Rathod",
        email: "bh@gmail.com",
        mobile: 7600636383,
        password: "Bh@123",
      },
      {
        first_name: "John",
        last_name: "Doe",
        email: "johndoe@gmail.com",
        mobile: 9898767890,
        password: "John@123",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user", null, {});
  },
};
