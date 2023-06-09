"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      const result = await queryInterface.sequelize.transaction(async (t) => {
        await queryInterface.addConstraint(
          "order",
          {
            fields: ["prod_id"],
            type: "foreign key",
            name: "product_fk_order",
            references: {
              table: "product",
              field: "id",
            },
          },
          { transaction: t }
        );
        await queryInterface.addColumn(
          "order", // table name
          "price", // new field name
          {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          { transaction: t }
        );

        await queryInterface.addColumn(
          "order", // table name
          "total", // new field name
          {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          { transaction: t }
        );
        await queryInterface.addColumn(
          "user_order", // table name
          "total", // new field name
          {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          { transaction: t }
        );
        await queryInterface.renameColumn("user_order", "userId", "user_id", {
          transaction: t,
        });
      });
    } catch (err) {
      console.log(err);
    }
  },

  async down(queryInterface, Sequelize) {
    try {
      const result = await queryInterface.sequelize.transaction(async (t) => {
        await queryInterface.removeConstraint("order", "product_fk_order", {
          transaction: t,
        });
        await queryInterface.removeColumn("order", "price", { transaction: t });
        await queryInterface.removeColumn("order", "total", { transaction: t });
        await queryInterface.removeColumn("user_order", "total", {
          transaction: t,
        });
        await queryInterface.renameColumn("user_order", "user_id", "userId", {
          transaction: t,
        });
      });
    } catch (err) {
      console.log(err);
    }
  },
};
