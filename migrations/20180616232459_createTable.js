exports.up = async function(knex) {
  await knex.schema.createTable("Employee", function(table) {
    table
      .increments("EmployeeId")
      .unsigned()
      .primary();
    table.string("FirstName", 15).notNull();
    table.string("LastName", 15).notNull();
    table.bigInteger("PhoneNumber").unique();
    table.string("Email", 20).unique();
    table.string("Designation").notNull();
  });
  await knex.schema.createTable("Manager", function(table) {
    table
      .increments("ManagerId")
      .unsigned()
      .primary();
    table
      .integer("EmployeeId")
      .unsigned()
      .unique()
      .references("EmployeeId")
      .inTable("Employee")
      .notNull()
      .onDelete("cascade");
    table.string("Specialization");
  });
  await knex.schema.createTable("Project", function(table) {
    table
      .increments("ProjectId")
      .unsigned()
      .primary();
    table.string("ProjectName", 15).notNull();
    table.string("Description");
    table
      .integer("ProjectManager")
      .default(null)
      .unsigned()
      .references("ManagerId")
      .inTable("Manager")
      .onDelete("set null");
  });
  await knex.schema.createTable("ProjectEmployee", function(table) {
    table.primary(["EmployeeId", "ProjectId"]);
    table
      .integer("EmployeeId")
      .unsigned()
      .references("EmployeeId")
      .inTable("Employee")
      .notNull()
      .onDelete("cascade");
    table
      .integer("ProjectId")
      .unsigned()
      .references("ProjectId")
      .inTable("Project")
      .notNull()
      .onDelete("cascade");
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("ProjectEmployee");
  await knex.schema.dropTableIfExists("Project");
  await knex.schema.dropTableIfExists("Manager");
  await knex.schema.dropTableIfExists("Employee");
};
