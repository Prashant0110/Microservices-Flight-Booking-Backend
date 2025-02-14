const { AirplaneService } = require("../services");
const { StatusCodes } = require("http-status-codes");

async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "successfully created airplane",
      data: response,
      error: {},
    });
  } catch (error) {
    throw error;
  }
}

module.exports = { createAirplane };
