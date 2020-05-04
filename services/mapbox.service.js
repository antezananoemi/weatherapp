const axios = require("axios");
const config = require("config");
const mapboxToken = config.get("MAPBOX_TOKEN");

const mapService = {};

mapService.getCity = (lat, lon) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lon},${lat}.json?access_token=${mapboxToken}`,
    })
      .then((res) => {
        const place = res.data.features.find((o) => {
          return o.place_type.includes("region");
        });
        return resolve(place);
      })
      .catch((err) => {
        console.log(err);
        return reject(err);
      });
  });
};

module.exports = mapService;
