const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/OrderController");
const authJwtMiddleware = require("../middlewares/authJwt.middleware");

// router.get("/data", authJwtMiddleware, CartController.userCart);
// router.get("/id", authJwtMiddleware, CartController.getCart);
router.post("/add", authJwtMiddleware, OrderController.addOrder);
router.get("/all_orders", authJwtMiddleware, OrderController.allOrders);
// router.delete("/delete", authJwtMiddleware, CartController.delItem);
// router.patch(
//   "/quantity/:id",
//   authJwtMiddleware,
//   quantityValidationMiddleware,
//   CartController.updateQuantity
// );

module.exports = router;
