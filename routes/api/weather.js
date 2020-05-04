const express = require("express");
const router = express.Router();
const fs = require("fs");
const config = require("config");
const apiUrl = config.get("RAPID_API_URL.currentWeather");
const cacheFile = config.get("cache.file");
const weatherService = require("../../services/weather.service");
const mapboxService = require("../../services/mapbox.service");

// @route GET api/weather
// @desc Get actual weather
// @access Public
router.get("/:lat/:lon", async (req, res) => {
  //TODO add city name
  let { lat, lon } = req.params;
  const place = await mapboxService.getCity(lat, lon);
  let rawdata = fs.readFileSync(config.cache.file);
  let weatherResult =
    Object.keys(rawdata).length !== 0 ? JSON.parse(rawdata) : [];

  const onCache = weatherResult.find((o) => {
    return (
      o.coord.lon == parseFloat(lon).toFixed(2) &&
      o.coord.lat == parseFloat(lat).toFixed(2)
    );
  });

  if (!onCache) {
    const weatherParams = {
      ...req.params,
      apiUrl,
    };
    weatherService
      .getWeather(weatherParams)
      .then((result) => {
        weatherResult.push({ ...result, place });
        fs.writeFileSync(cacheFile, JSON.stringify(weatherResult));
        return res.send({ ...result, place });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  } else {
    console.log("desde cache..");
    return res.send(onCache);
  }
});

module.exports = router;
