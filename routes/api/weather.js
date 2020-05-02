const express = require("express");
const router = express.Router();
const url = require("url");
const axios = require("axios");
const config = require("config");
const apiToken = config.get("RAPID_API_KEY");

// @route GET api/weather
// @desc Get actual weather
// @access Public
router.get("/", (req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const { city, lat = "", lon = "" } = queryObject;

  axios({
    method: "GET",
    url: "https://community-open-weather-map.p.rapidapi.com/weather",
    headers: {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      "x-rapidapi-key": apiToken,
    },
    params: {
      q: city,
      lat,
      lon,
    },
  })
    .then(async (result) => {
      res.send(result.data);
    })
    .catch((error) => {
      console.log(error);
    });
  //res.send("ss");
});

module.exports = router;
