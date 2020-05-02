const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => res.send("Api running"));

//Define Routes
app.use("/api/weather", require("./routes/api/weather"));
app.use("/api/forecast", require("./routes/api/forecast"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
