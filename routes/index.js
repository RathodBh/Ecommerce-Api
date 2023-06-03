const express = require("express");

const router = express.Router();
const UserRoutes = require("./user.route");

router.get("/", (req, res) => {
  res.send("Success!");
});

router.use("/user", UserRoutes);

module.exports = router;
