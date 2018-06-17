exports.up = async function(knex) {
  await knex("Manager").insert([
    {
      EmployeeId: 2,
      Specialization: "Ecommerce"
    },
    {
      EmployeeId: 6,
      Specialization: "Food Industry"
    }
  ]);
};

exports.down = async function(knex) {
  await knex("Manager")
    .whereIn("EmployeeId", [2, 6])
    .del();
};
