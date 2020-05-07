const axios = require("axios");
const config = require("config");
const apiToken = config.get("RAPID_API_KEY");
const { ApiError } = require("../util/error");

const wheater = {};

wheater.getWeather = async ({ city, lat, lon, apiUrl }) => {
  try {
    const response = await axios({
      method: "GET",
      url: apiUrl,
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": apiToken,
      },
      params: {
        q: city,
        lat: city ? "" : lat,
        lon: city ? "" : lon,
        units: "metric",
      },
    });
    return response.data;
  } catch (error) {
    throw new ApiError(
      error.response.status ? error.response.status : error.response.data.cod,
      "api error",
      error.response.data.message
    );
  }
};

module.exports = wheater;
