const express = require("express");
const cors = require("cors");
const cron = require("./util/cron");

const app = express();

app.use(cors());

app.get("/", (req, res) => res.send("Api running"));

//Define Routes
app.use("/api/weather", require("./routes/api/weather"));
app.use("/api/forecast", require("./routes/api/forecast"));

const PORT = process.env.PORT || 5000;

return Promise.all([cron()]).then(() => {
  const env = process.env.NODE_ENV || "development";

  return new Promise((resolve) => {
    app.listen(PORT, () => {
      console.log(`App running at port ${PORT}`);
      resolve({ app });
    });
  });
});
