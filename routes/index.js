const express = require("express");

const router = express.Router();
const UserRoutes = require("./user.route");
const ProductRoutes = require("./product.route");
const CategoryRoutes = require("./category.route");
const CartRoutes = require("./cart.route");
const OrderRoutes = require("./order.route");

router.get("/", (req, res) => {
  res.send("Success!");
});

router.use("/user", UserRoutes);
router.use("/product", ProductRoutes);
router.use("/category", CategoryRoutes);
router.use("/cart", CartRoutes);
router.use("/order", OrderRoutes);

module.exports = router;
