const express = require("express");
const router = express.Router();
const CartController = require("../controllers/CartController");
const authJwtMiddleware = require("../middlewares/authJwt.middleware");

router.get("/data", authJwtMiddleware, CartController.userCart);

module.exports = router;
