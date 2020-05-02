const express = require("express");
const router = express.Router();

// @route GET api/weather
// @desc Get actual weather
// @access Public
router.get("/", (req, res) => {
  res.send("forecast route");
});

module.exports = router;
