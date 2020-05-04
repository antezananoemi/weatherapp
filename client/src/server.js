import { Server } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  return new Server({
    environment,
    seeds(server) {
      server.loadFixtures();
    },
    routes() {
      this.passthrough("https://api.mapbox.com/**");
      this.passthrough("https://events.mapbox.com/**");
      this.urlPrefix = process.env.REACT_APP_API_ENDPOINT;

      this.get("/weather/:lat/:lon", () => {
        return {
          coord: { lon: -68.13, lat: -16.5 },
          weather: [
            {
              id: 803,
              main: "Clouds",
              description: "broken clouds",
              icon: "04d",
            },
          ],
          base: "stations",
          main: {
            temp: 8,
            feels_like: 5.18,
            temp_min: 8,
            temp_max: 8,
            pressure: 1038,
            humidity: 75,
          },
          visibility: 10000,
          wind: { speed: 2.1, deg: 260 },
          clouds: { all: 75 },
          dt: 1588598269,
          sys: {
            type: 1,
            id: 8648,
            country: "BO",
            sunrise: 1588589117,
            sunset: 1588630388,
          },
          timezone: -14400,
          id: 3911925,
          name: "La Paz",
          cod: 200,
          place: {
            id: "region.10680675081527180",
            type: "Feature",
            place_type: ["region"],
            relevance: 1,
            properties: { short_code: "BO-L", wikidata: "Q272784" },
            text: "La Paz",
            place_name: "La Paz, Bolivia",
            bbox: [
              -69.6664921265065,
              -18.0390789963685,
              -66.758451015568,
              -11.9048530281903,
            ],
            center: [-68.33333, -15],
            geometry: { type: "Point", coordinates: [-68.33333, -15] },
            context: [
              {
                id: "country.11551293440284370",
                short_code: "bo",
                wikidata: "Q750",
                text: "Bolivia",
              },
            ],
          },
        };
      });
      this.get(
        "/forecast",
        (schema, req) => {
          const { cnt } = req.queryParams;
          const forecast = {
            city: {
              id: 3911925,
              name: "La Paz",
              coord: {
                lon: -68.15,
                lat: -16.5,
              },
              country: "BO",
              population: 0,
              timezone: -14400,
            },
            cod: "200",
            message: 9.0170041,
            cnt: 14,
            list: [
              {
                dt: 1588435200,
                sunrise: 1588416287,
                sunset: 1588457647,
                temp: {
                  day: 10.13,
                  min: 7.95,
                  max: 12.91,
                  night: 7.95,
                  eve: 12.49,
                  morn: 8,
                },
                feels_like: {
                  day: 6.64,
                  night: 3.91,
                  eve: 7.08,
                  morn: 6.42,
                },
                pressure: 1033,
                humidity: 46,
                weather: [
                  {
                    id: 500,
                    main: "Rain",
                    description: "light rain",
                    icon: "10d",
                  },
                ],
                speed: 1.95,
                deg: 144,
                clouds: 42,
                rain: 1.1,
              },
              {
                dt: 1588521600,
                sunrise: 1588502704,
                sunset: 1588544019,
                temp: {
                  day: 12.39,
                  min: 6.18,
                  max: 14.83,
                  night: 8.32,
                  eve: 14.49,
                  morn: 6.18,
                },
                feels_like: {
                  day: 6.89,
                  night: 4.59,
                  eve: 10.09,
                  morn: 2.69,
                },
                pressure: 1019,
                humidity: 17,
                weather: [
                  {
                    id: 500,
                    main: "Rain",
                    description: "light rain",
                    icon: "10d",
                  },
                ],
                speed: 3.29,
                deg: 269,
                clouds: 100,
                rain: 1.66,
              },
              {
                dt: 1588608000,
                sunrise: 1588589121,
                sunset: 1588630393,
                temp: {
                  day: 12.96,
                  min: 7.89,
                  max: 15.78,
                  night: 7.95,
                  eve: 14.23,
                  morn: 7.89,
                },
                feels_like: {
                  day: 8.35,
                  night: 3.44,
                  eve: 10.71,
                  morn: 3.46,
                },
                pressure: 1015,
                humidity: 16,
                weather: [
                  {
                    id: 500,
                    main: "Rain",
                    description: "light rain",
                    icon: "10d",
                  },
                ],
                speed: 1.99,
                deg: 240,
                clouds: 100,
                rain: 1.05,
              },
              {
                dt: 1588694400,
                sunrise: 1588675539,
                sunset: 1588716767,
                temp: {
                  day: 13.01,
                  min: 5.68,
                  max: 16.07,
                  night: 6.59,
                  eve: 14.43,
                  morn: 5.68,
                },
                feels_like: {
                  day: 7.57,
                  night: 2.74,
                  eve: 8.49,
                  morn: 1.21,
                },
                pressure: 1015,
                humidity: 14,
                weather: [
                  {
                    id: 803,
                    main: "Clouds",
                    description: "broken clouds",
                    icon: "04d",
                  },
                ],
                speed: 3.04,
                deg: 264,
                clouds: 53,
              },
              {
                dt: 1588780800,
                sunrise: 1588761957,
                sunset: 1588803142,
                temp: {
                  day: 12.73,
                  min: 2.97,
                  max: 15.35,
                  night: 6.2,
                  eve: 13.75,
                  morn: 2.97,
                },
                feels_like: {
                  day: 9.21,
                  night: 1.64,
                  eve: 7.52,
                  morn: -0.78,
                },
                pressure: 1019,
                humidity: 15,
                weather: [
                  {
                    id: 500,
                    main: "Rain",
                    description: "light rain",
                    icon: "10d",
                  },
                ],
                speed: 0.36,
                deg: 158,
                clouds: 3,
                rain: 0.25,
              },
              {
                dt: 1588867200,
                sunrise: 1588848375,
                sunset: 1588889518,
                temp: {
                  day: 11.45,
                  min: 3.96,
                  max: 14.25,
                  night: 5.31,
                  eve: 12.97,
                  morn: 3.96,
                },
                feels_like: {
                  day: 6.67,
                  night: 0.75,
                  eve: 7.93,
                  morn: 0.25,
                },
                pressure: 1021,
                humidity: 17,
                weather: [
                  {
                    id: 804,
                    main: "Clouds",
                    description: "overcast clouds",
                    icon: "04d",
                  },
                ],
                speed: 2.19,
                deg: 231,
                clouds: 100,
              },
              {
                dt: 1588953600,
                sunrise: 1588934794,
                sunset: 1588975895,
                temp: {
                  day: 11.84,
                  min: 3.47,
                  max: 14.68,
                  night: 6.37,
                  eve: 12.71,
                  morn: 3.47,
                },
                feels_like: {
                  day: 7.14,
                  night: 2.23,
                  eve: 6.89,
                  morn: -0.72,
                },
                pressure: 1021,
                humidity: 14,
                weather: [
                  {
                    id: 804,
                    main: "Clouds",
                    description: "overcast clouds",
                    icon: "04d",
                  },
                ],
                speed: 1.92,
                deg: 172,
                clouds: 100,
              },
              {
                dt: 1589040000,
                sunrise: 1589021212,
                sunset: 1589062273,
                temp: {
                  day: 13.06,
                  min: 3.93,
                  max: 15,
                  night: 7.09,
                  eve: 13.62,
                  morn: 3.93,
                },
                feels_like: {
                  day: 8.5,
                  night: 2.95,
                  eve: 8.65,
                  morn: 0.32,
                },
                pressure: 1019,
                humidity: 13,
                weather: [
                  {
                    id: 500,
                    main: "Rain",
                    description: "light rain",
                    icon: "10d",
                  },
                ],
                speed: 1.72,
                deg: 214,
                clouds: 51,
                rain: 0.48,
              },
              {
                dt: 1589126400,
                sunrise: 1589107631,
                sunset: 1589148651,
                temp: {
                  day: 12.53,
                  min: 5.21,
                  max: 14.39,
                  night: 5.99,
                  eve: 14.03,
                  morn: 5.21,
                },
                feels_like: {
                  day: 7.39,
                  night: 1.45,
                  eve: 9.43,
                  morn: 1.2,
                },
                pressure: 1019,
                humidity: 15,
                weather: [
                  {
                    id: 800,
                    main: "Clear",
                    description: "sky is clear",
                    icon: "01d",
                  },
                ],
                speed: 2.66,
                deg: 238,
                clouds: 2,
              },
              {
                dt: 1589212800,
                sunrise: 1589194050,
                sunset: 1589235031,
                temp: {
                  day: 11.73,
                  min: 2.91,
                  max: 14.08,
                  night: 4.29,
                  eve: 13.68,
                  morn: 2.91,
                },
                feels_like: {
                  day: 6.09,
                  night: -0.19,
                  eve: 7.73,
                  morn: -1.6,
                },
                pressure: 1019,
                humidity: 8,
                weather: [
                  {
                    id: 800,
                    main: "Clear",
                    description: "sky is clear",
                    icon: "01d",
                  },
                ],
                speed: 2.86,
                deg: 238,
                clouds: 0,
              },
              {
                dt: 1589299200,
                sunrise: 1589280470,
                sunset: 1589321411,
                temp: {
                  day: 11.1,
                  min: 1.84,
                  max: 13.31,
                  night: 4.75,
                  eve: 12.37,
                  morn: 1.84,
                },
                feels_like: {
                  day: 5.44,
                  night: 0.12,
                  eve: 7.66,
                  morn: -2.77,
                },
                pressure: 1018,
                humidity: 9,
                weather: [
                  {
                    id: 800,
                    main: "Clear",
                    description: "sky is clear",
                    icon: "01d",
                  },
                ],
                speed: 2.93,
                deg: 251,
                clouds: 1,
              },
              {
                dt: 1589385600,
                sunrise: 1589366889,
                sunset: 1589407792,
                temp: {
                  day: 10.97,
                  min: 1.58,
                  max: 13.55,
                  night: 4.92,
                  eve: 12.69,
                  morn: 1.58,
                },
                feels_like: {
                  day: 6.35,
                  night: -0.05,
                  eve: 8.33,
                  morn: -2.17,
                },
                pressure: 1020,
                humidity: 12,
                weather: [
                  {
                    id: 802,
                    main: "Clouds",
                    description: "scattered clouds",
                    icon: "03d",
                  },
                ],
                speed: 1.63,
                deg: 185,
                clouds: 41,
              },
              {
                dt: 1589472000,
                sunrise: 1589453309,
                sunset: 1589494174,
                temp: {
                  day: 10.61,
                  min: 1.56,
                  max: 13.31,
                  night: 5.35,
                  eve: 12.73,
                  morn: 1.56,
                },
                feels_like: {
                  day: 5.85,
                  night: -0.08,
                  eve: 7.64,
                  morn: -2.18,
                },
                pressure: 1020,
                humidity: 15,
                weather: [
                  {
                    id: 803,
                    main: "Clouds",
                    description: "broken clouds",
                    icon: "04d",
                  },
                ],
                speed: 1.99,
                deg: 191,
                clouds: 78,
              },
              {
                dt: 1589558400,
                sunrise: 1589539729,
                sunset: 1589580557,
                temp: {
                  day: 10.67,
                  min: 3.15,
                  max: 12.53,
                  night: 4.97,
                  eve: 8.6,
                  morn: 3.15,
                },
                feels_like: {
                  day: 6.19,
                  night: -0.35,
                  eve: 3.86,
                  morn: -0.95,
                },
                pressure: 1020,
                humidity: 15,
                weather: [
                  {
                    id: 500,
                    main: "Rain",
                    description: "light rain",
                    icon: "10d",
                  },
                ],
                speed: 1.59,
                deg: 110,
                clouds: 60,
                rain: 1.26,
              },
            ],
          };

          forecast.list = forecast.list.slice(0, cnt);

          return forecast;
        },
        { timing: 1000 }
      );
    },
  });
}
