const axios = require("axios");
const config = require("config");
const apiToken = config.get("RAPID_API_KEY");

const wheater = {};

wheater.getWeather = ({ city, lat, lon, apiUrl }) => {
  return new Promise((resolve, reject) => {
    axios({
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
    })
      .then((res) => {
        return resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        return reject(err);
      });
  });
};

module.exports = wheater;
