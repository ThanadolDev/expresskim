const express = require("express");
const router = express.Router();
const supply_controller = require('./controllers/supplyController')

// Home page route.
router.get("/", supply_controller.index);

// About page route.

module.exports = router;