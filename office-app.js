"use strict";

import App from "./app";
import OfficeDB from "./office-db/";

// DataBase Configurations
const dbConfig = require("./knexfile");
const knex = require("knex")(dbConfig);

const officeDb = new OfficeDB(knex);

// Load Model Objects
const employeeModel = officeDb.employee();
const projectModel = officeDb.project();
const managerModel = officeDb.manager();
const projectEmployeeModel = officeDb.projectEmployee();

const port = process.env.PORT || 3000;
const app = new App({ port });

// Attach models with route path
app.addRoute("/employees", employeeModel);
app.addRoute("/projects", projectModel);
app.addRoute("/managers", managerModel);
app.addRoute("/project-employee", projectEmployeeModel);

module.exports = app;
