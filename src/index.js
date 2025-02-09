const express = require("express");
const app = express();
const apiRoutes = require("./routes");
const Logger = require("./config/logger-config");
const serverConfig = require("./config/server-config");

app.use("/api", apiRoutes);

app.listen(serverConfig.PORT, () => {
  console.log(`Server is running on port ${serverConfig.PORT}`);
  Logger.info("successully started server", "root", {});
});
