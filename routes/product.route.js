const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");
const auth = require("../middlewares/authJwt.middleware");

router.get("/", ProductController.show);
router.get("/with_category", ProductController.showAllWithCategory);
router.get("/:id", ProductController.getProduct);

module.exports = router;
