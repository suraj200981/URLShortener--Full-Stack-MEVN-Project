const express = require("express");

const router = express.Router({ mergeParams: true });

const auth_controller = require("../controllers/auth_controller.js");



router.post("/login", auth_controller.postLogin);

module.exports = router;
