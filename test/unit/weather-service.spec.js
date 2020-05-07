const { expect } = require("chai");

let weatherService;

describe("Test : weather api service", () => {
  before((done) => {
    weatherService = require("../../services/weather.service");
    done();
  });

  it("Should api error on bad params lat lon", (done) => {
    const weatherParams = {
      city: "",
      lat: "-68dd.15",
      lon: "-16.5",
      apiUrl: "https://community-open-weather-map.p.rapidapi.com/weather",
    };

    weatherService
      .getWeather(weatherParams)
      .then()
      .catch((err) => {
        expect(err.type).to.equal("api error");
        done();
      });
  });
  it("Should not respond without the url", (done) => {
    const weatherParams = {
      city: "",
      lat: "-68.15",
      lon: "-16.5",
      apiUrl: "",
    };

    weatherService
      .getWeather(weatherParams)
      .then()
      .catch((err) => {
        expect(err.message).to.equal(
          "Cannot read property 'status' of undefined"
        );
        done();
      });
  });
  it("Should return nothing to geocode without lat lon", (done) => {
    const weatherParams = {
      city: "",
      lat: "",
      lon: "",
      apiUrl: "https://community-open-weather-map.p.rapidapi.com/weather",
    };

    weatherService
      .getWeather(weatherParams)
      .then()
      .catch((err) => {
        expect(err.message).to.equal("Nothing to geocode");
        done();
      });
  });

  it("On success should return data", (done) => {
    const weatherParams = {
      city: "",
      lat: "-68.15",
      lon: "-16.5",
      apiUrl: "https://community-open-weather-map.p.rapidapi.com/weather",
    };

    weatherService
      .getWeather(weatherParams)
      .then((res) => {
        expect(res.body).to.have.property("coord");
        expect(res.body.coord).to.have.property("lon");
        expect(res.body.coord).to.have.property("lat");
        expect(res.body).to.have.property("weather");
        expect(res.body).to.have.property("base");
        expect(res.body).to.have.property("main");
        expect(res.body).to.have.property("wind");
        expect(res.body).to.have.property("clouds");
        expect(res.body).to.have.property("dt");
        expect(res.body).to.have.property("sys");
        expect(res.body).to.have.property("timezone");
        expect(res.body).to.have.property("id");
        expect(res.body).to.have.property("name");
        expect(res.body).to.have.property("cod");
        expect(res.body.cod).to.equal(200);
        done();
      })
      .catch((err) => {
        done();
      });
  });
});
