const axios = require("axios");
const config = require("config");
const mapboxToken = config.get("MAPBOX_TOKEN");
const { ApiError } = require("../util/error");

const mapService = {};

mapService.getCity = async (lat, lon) => {
  try {
    const response = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${lon},${lat}.json?access_token=${mapboxToken}`
    );
    const place = response.data.features.find((o) => {
      return o.place_type.includes("region");
    });
    return place;
  } catch (error) {
    throw new ApiError(
      error.response.status ? error.response.status : "404",
      "api error",
      error.response.data.message
    );
  }
};

module.exports = mapService;
