const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const signupValidation = require("../middlewares/signupValidation.middleware");
const loginValidation = require("../middlewares/loginValidation.middleware");
const authJwtMiddleware = require("../middlewares/authJwt.middleware");

router.get("/", UserController.show);
router.post("/signup", signupValidation, UserController.signup);
router.post("/login", loginValidation, UserController.login);
router.get("/data", authJwtMiddleware, UserController.data);
router.get("/address", authJwtMiddleware, UserController.address);
router.post("/address/add", authJwtMiddleware, UserController.addAddress);
router.patch("/address/edit/:id", authJwtMiddleware, UserController.editAddress);

module.exports = router;
