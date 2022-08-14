const express = require("express");
const router = express.Router();

const shortenerController = require("../controllers/shortener_controller.js");

router.post("/shortener", shortenerController.urlShortner);

module.exports = router;
