require("babel-core/register");
const config = require("./config/");
module.exports = {
  client: "mysql",
  connection: config.connectionConfig,
  pool: {
    min: 2,
    max: 10
  }
};
