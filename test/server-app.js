const express = require("express");
const cors = require("cors");

const start = () => {
  const app = express();

  app.use(cors());

  app.get("/", (req, res) => res.send("Api running"));

  //Define Routes
  app.use("/api/weather", require("../routes/api/weather"));
  app.use("/api/forecast", require("../routes/api/forecast"));
  const PORT = process.env.PORT || 5000;

  return Promise.all([]).then(() => {
    const server = app.listen(PORT);
    server.on("listening", () => {
      console.log(`Test App running at port ${PORT}`);
    });
    return { server };
  });
};

module.exports = start;
