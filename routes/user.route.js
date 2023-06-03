const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.get("/show", UserController.show);

module.exports = router;
