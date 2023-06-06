"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("product", [
      {
        name: "Moto g72",
        description: "108 MP Ultra Pixel Camera System for incredible pictures",
        brand_name: "Moto",
        price: "14999",
        cross_price: "17999",
        img_url:
          "https://motorolain.vtexassets.com/arquivos/ids/157793-800-auto?width=800&height=auto&aspect=true",
      },
      {
        name: "Apple iPhone 14 pro max",
        description:
          "17.00 cm (6.7-inch) Super Retina XDR display featuring Always-On and ProMotion, Dynamic Island, a magical new way to interact with iPhone",
        brand_name: "iPhone",
        price: "127999",
        cross_price: "139900",
        img_url:
          "https://m.media-amazon.com/images/I/31DaY6l18YL._SY445_SX342_QL70_FMwebp_.jpg",
      },
      {
        name: "Black T-Shirt, Men Color Block Round Neck Cotton Blend Blue",
        description:
          "Good T-shirt in low budget buy now, Men Color Block Round Neck Cotton Blend Blue",
        brand_name: "AUSK",
        price: "219",
        cross_price: "1499",
        img_url:
          "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/r/v/k/m-ausk0165-ausk-original-imaghu9fbhcgf2za.jpeg?q=70",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("product", null, {});
  },
};
