//controller->services->uses repository- to interact with database

const { AirplaneRepository } = require("../repositories");

const airplaneRepository = new AirplaneRepository();
async function createAirplane(data) {
  try {
    return await airplaneRepository.create(data);
  } catch (error) {
    throw error;
  }
}

module.exports = { createAirplane };
