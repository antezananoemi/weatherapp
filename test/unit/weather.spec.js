const request = require("supertest");
const { expect } = require("chai");
const start = require("../server-app");

describe("Test : weather api", () => {
  // start app
  before((done) => {
    start().then(({ server }) => {
      app = server;
      done();
    });
  });

  after((done) => {
    return app.close((err) => {
      if (err) done(err);
      else {
        console.log("app closed");
        done();
      }
    });
  });

  it("Should check the coordinates response", (done) => {
    request(app)
      .get("/api/weather/-68.1500015/-16.5")
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        else {
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
        }
      });
  });

  it("Should retornar error on incorrect coordinates", (done) => {
    request(app)
      .get("/api/weather/-68.1500015/-1a6.5")
      .expect(422)
      .end((err, res) => {
        if (err) done(err);
        else {
          expect(res.body).to.have.property("error");
          expect(res.body.error).to.equal(
            "Please provide correct values for latitude and longitude"
          );
          done();
        }
      });
  });
});
