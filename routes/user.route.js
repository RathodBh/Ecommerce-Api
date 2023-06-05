const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.get("/", UserController.show);
router.post("/signup", UserController.signup);
router.post("/login", UserController.login);

module.exports = router;
