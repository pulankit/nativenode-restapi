require("babel-core/register");
const officeApp = require("./office-app");
const fs = require("fs");
// start the App
officeApp.start().then(console.log);

// Attach listener For UnCaughtErrors for logging Errors and exit Process to restartApp.

process.on("uncaughtException", reason => {
  console.log("Unhandled Exception :", "reason:", reason);
  process.exit(1);
});

process.on("unhandledRejection", (reason, p) => {
  console.log("Unhandled Rejection at:", p, "reason:", reason);
  process.exit(1);
});
