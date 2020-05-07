const express = require("express");
const router = express.Router();
const fs = require("fs");
const config = require("config");
const apiUrl = config.get("RAPID_API_URL.currentWeather");
const cacheFile = config.get("cache.file");
const weatherService = require("../../services/weather.service");
const mapboxService = require("../../services/mapbox.service");

const checkLatLon = (lat, lon) => {
  const regex = /^(\-?([0-8]?[0-9](\.\d+)?|90(.[0]+)?)\s?[,]\s?)+(\-?([1]?[0-7]?[0-9](\.\d+)?|180((.[0]+)?)))$/;
  return regex.test(`${lat},${lon}`);
};

// @route GET api/weather
// @desc Get actual weather
// @access Public
router.get("/:lat/:lon", async (req, res) => {
  let { lat, lon } = req.params;
  if (!checkLatLon(lat, lon)) {
    res.status(422).send({
      err: "Please provide correct values for latitude and longitude",
    });
  } else {
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
      const place = await mapboxService.getCity(lat, lon);
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
  }
});

module.exports = router;
