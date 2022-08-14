const express = require("express");
const router = express.Router();

const shortenerController = require("../controllers/shortener_controller.js");

router.post("/shortner", shortenerController.urlShortner);

module.exports = router;
