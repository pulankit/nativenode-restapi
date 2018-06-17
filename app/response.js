export default class Response {
  static sendSuccess(res, data = {}) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ success: true, data }));
  }
  static sendError(res, message, code) {
    code = code && !isNaN(code) ? code : 500;
    message = message || "Something Went Wrong!";
    res.statusCode = code;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ success: false, message }));
  }
}
