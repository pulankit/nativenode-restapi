try {
  // read env varriables from env FIle.
  require("dotenv").load();
} catch (e) {
  console.warn(e);
}
module.exports = {
  connectionConfig: {
    host: process.env.DB_HOST || "127.0.0.1",
    user: process.env.DB_USER || null,
    password: process.env.DB_PASS || null,
    database: process.env.DB_NAME || "dev"
  }
};
