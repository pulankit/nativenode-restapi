import Response from "./response";

export default class Route {
  constructor(path, model) {
    if (path[0] !== "/") {
      path = "/" + path;
    }
    this.basePath = path;
    this.model = model;
  }

  async get(req) {
    let filter = req.query;
    let id = req.params[0] || null;
    if (this.validateParam(id)) return this.model.find(id, filter);
  }

  async post(req) {
    let body = JSON.parse(req.body);
    return this.model.addNew(body);
  }

  async put(req) {
    let body = JSON.parse(req.body);
    let id = req.params[0];
    if (this.validateParam(id)) return this.model.update(id, body);
  }
  async delete(req) {
    let id = req.params[0];
    let data;
    try {
      data = JSON.parse(req.body);
    } catch (e) {
    } finally {
      if (this.validateParam(id)) return this.model.delete(id, data);
    }
  }
  isValidRequest(req) {
    let { body, method } = req;
    if (method == "POST" || method == "PUT") {
      try {
        body = JSON.parse(body);
        return this.model.isValidData(body);
      } catch (e) {
        return false;
      }
    }
    return true;
  }
  validateParam(param) {
    // allow null or integer
    if (!isNaN(param)) return true;
    else {
      throw { statusCode: 400, message: "Bad Request!" };
    }
  }
  getPath() {
    return this.basePath;
  }
}
