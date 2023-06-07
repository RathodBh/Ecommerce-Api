const express = require("express");
const router = express.Router();
const CartController = require("../controllers/CartController");
const authJwtMiddleware = require("../middlewares/authJwt.middleware");

router.get("/data", authJwtMiddleware, CartController.userCart);
router.get("/id", authJwtMiddleware, CartController.getCart);
router.post("/add", authJwtMiddleware, CartController.addItem);
router.delete("/delete", authJwtMiddleware, CartController.delItem);

module.exports = router;
