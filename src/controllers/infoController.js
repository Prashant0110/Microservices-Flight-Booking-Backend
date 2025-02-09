const { StatusCodes } = require("http-status-codes");

const info = (req, res) => {
  return res.status(StatusCodes.OK).json({
    mess: "ok",
    status: true,
  });
};

module.exports = { info };
