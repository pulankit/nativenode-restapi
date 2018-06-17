import Response from "./response";
import Route from "./route";

const http = require("http");
const parseUrl = require("url").parse;

export default class App {
  constructor(options) {
    let { host, port } = options;
    this.host = host || "127.0.0.1";
    this.port = port || 3000;
    this.server = http.createServer(this.requestListner.bind(this));
    this.routes = [];
  }
  async requestListner(req, res) {
    let route = this.getRoute(req);
    if (!route) {
      return Response.sendError(res, "Not Found", 404);
    }
    let body = [];
    req
      .on("error", err => {
        console.error("Request Error", err);
        req.abort;
      })
      .on("data", chunk => {
        body.push(chunk);
      })
      .on("end", () => {
        req.body = Buffer.concat(body).toString();
        if (route.isValidRequest(req))
          return this.routeRequest(route, req, res);
        else return Response.sendError(res, "Bad Request", 400);
      });
  }

  addRoute(path, model) {
    let route = new Route(path, model);
    this.routes.push(route);
  }

  async routeRequest(route, req, res) {
    const { method } = req;
    let data;
    try {
      switch (method) {
        case "GET":
          data = await route.get(req);
          break;
        case "POST":
          data = await route.post(req);
          break;
        case "PUT":
          data = await route.put(req);
          break;
        case "DELETE":
          data = await route.delete(req);
          break;
      }
      Response.sendSuccess(res, data);
    } catch (e) {
      console.error("Error Occured:", e);
      let statusCode = e.statusCode;
      let message = e.code || e.message;
      Response.sendError(res, message, statusCode);
    }
  }

  start() {
    let server = this.server;
    server.listen(this.port);
    return new Promise((resolve, reject) => {
      server.on("listening", () => {
        return resolve(`Server Started On Port: ${this.port}`);
      });
    });
  }
  getRoute(req) {
    // based on the request Path filter route
    if (!this.routes.length) {
      return;
    }
    let reqUrl = req.url;
    let matchingRoute = { path: "" };
    let parsedUrl = parseUrl(reqUrl, true);
    this.routes.forEach((route, index) => {
      let path = route.getPath();
      // search for route  with maximum match with url
      if (
        parsedUrl.pathname.indexOf(path) == 0 &&
        matchingRoute.path.length < path.length
      ) {
        // @todo seperate function for getting param and query
        let params = parsedUrl.pathname.split("/");
        params = params.filter(param => {
          if (param.length && `/${param}` != path) return param;
        });
        req.query = parsedUrl.query;
        req.path = path;
        req.params = params;
        matchingRoute.route = route;
      }
    });
    return matchingRoute.route;
  }
}
