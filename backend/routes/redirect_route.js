const express = require("express");
const router = express.Router();

const redirectController = require("../controllers/redirect_controller.js");

router.get("/:generatedCode", redirectController.checkShortUrl);

module.exports = router;
