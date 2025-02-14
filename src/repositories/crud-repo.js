const { Logger } = require("../../config");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (err) {
      Logger.error("Something went wrong in Crud Repository (create method)");
      throw err;
    }
  }

  async destroy(id) {
    try {
      const response = await this.model.destroy({
        where: {
          id: id,
        },
      });
      return response;
    } catch (err) {
      Logger.error("Something went wrong in Crud Repository (destroy method)");
      throw err;
    }
  }

  async get(id) {
    try {
      const response = await this.model.findByPk(id); // Corrected method name
      return response;
    } catch (err) {
      Logger.error("Something went wrong in Crud Repository (get method)");
      throw err;
    }
  }

  async update(data, id) {
    try {
      const response = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return response;
    } catch (err) {
      Logger.error("Something went wrong in Crud Repository (update method)");
      throw err;
    }
  }
}

module.exports = CrudRepository;
