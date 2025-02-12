const express = require("express");
const app = express();
const apiRoutes = require("./routes");

const serverConfig = require("../config/server-config");
const logger = require("../config/logger-config");

app.use("/api", apiRoutes);

app.listen(serverConfig.PORT, () => {
  console.log(`Server is running on port ${serverConfig.PORT}`);
  logger.info("successully started server", "root", {});
});
