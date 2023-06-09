const express = require("express");
const router = express.Router();
const CartController = require("../controllers/CartController");
const authJwtMiddleware = require("../middlewares/authJwt.middleware");
const quantityValidationMiddleware = require("../middlewares/quantityValidation.middleware");

router.get("/data", authJwtMiddleware, CartController.userCart);
router.get("/id", authJwtMiddleware, CartController.getCart);
router.post("/add", authJwtMiddleware, CartController.addItem);
router.delete("/delete", authJwtMiddleware, CartController.delItem);
router.delete("/delete_all", authJwtMiddleware, CartController.delAll);
router.patch(
  "/quantity/:id",
  authJwtMiddleware,
  quantityValidationMiddleware,
  CartController.updateQuantity
);

module.exports = router;
