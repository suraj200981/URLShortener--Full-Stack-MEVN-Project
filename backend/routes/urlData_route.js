const express = require("express");
const router = express.Router();

const urlDataController = require("../controllers/urlData_controller.js");

//api/urldata/
router.get("/:data", urlDataController.getAllData);

module.exports = router;
