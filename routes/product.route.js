const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");
const auth = require("../middlewares/authJwt.middleware");

router.get("/", auth, ProductController.show);
router.get("/:id", auth, ProductController.getProduct);

module.exports = router;
