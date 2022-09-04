const express = require("express");
const router = express.Router();

const auth_controller = require("../controllers/auth_controller.js");

router.get("/login", auth_controller.getLogin);

module.exports = router;
