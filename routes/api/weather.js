const express = require("express");
const router = express.Router();
const fs = require("fs");
const config = require("config");
const apiUrl = config.get("RAPID_API_URL.currentWeather");
const cacheFile = config.get("cache.file");
const weatherService = require("../../services/weather.service");
const mapboxService = require("../../services/mapbox.service");
const latlon = require("../../util/latlon");

const getCache = () => {
  let rawdata = fs.readFileSync(config.cache.file);
  return Object.keys(rawdata).length !== 0 ? JSON.parse(rawdata) : [];
};

// @route GET api/weather
// @desc Get actual weather
// @access Public
router.get("/:lat/:lon", async (req, res) => {
  let { lat, lon } = req.params;
  if (!latlon.checkLatLon(lat, lon)) {
    res.status(422).send({
      error: "Please provide correct values for latitude and longitude",
    });
  } else {
    let weatherResult = getCache();
    const onCache = weatherResult.find(
      (o) =>
        o.coord.lon == parseFloat(lon).toFixed(2) &&
        o.coord.lat == parseFloat(lat).toFixed(2)
    );

    if (!onCache) {
      const weatherParams = {
        ...req.params,
        apiUrl,
      };
      try {
        const place = await mapboxService.getCity(lat, lon);
        const weather = await weatherService.getWeather(weatherParams);
        weatherResult.push({ ...weather, place });
        fs.writeFileSync(cacheFile, JSON.stringify(weatherResult));
        return res.send({ ...weather, place });
      } catch (error) {
        res.status(error.code).send({ error: error.message });
      }
    } else {
      console.log("desde cache..");
      return res.send(onCache);
    }
  }
});

module.exports = router;
