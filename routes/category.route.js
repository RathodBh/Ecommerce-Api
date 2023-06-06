const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/CategoryController");
const signupValidation = require("../middlewares/signupValidation.middleware");
const loginValidation = require("../middlewares/loginValidation.middleware");
const authJwtMiddleware = require("../middlewares/authJwt.middleware");

router.get("/names", CategoryController.names);

module.exports = router;
