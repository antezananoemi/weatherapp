const cron = require("node-cron");
const config = require("config");
const fs = require("fs");

module.exports = () => {
  if (config.get("cron.enabled")) {
    cron
      .schedule(config.get("cron.interval"), () => {
        fs.writeFile(config.get("cache.file"), "", function (err) {
          if (err) throw err;
          console.log("Cache file cleared");
        });
        console.log(new Date());
      })
      .start();
  }
};
