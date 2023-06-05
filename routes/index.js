const express = require("express");

const router = express.Router();
const UserRoutes = require("./user.route");
const ProductRoutes = require("./product.route");

router.get("/", (req, res) => {
  res.send("Success!");
});

router.use("/user", UserRoutes);
router.use("/product", ProductRoutes);

module.exports = router;
