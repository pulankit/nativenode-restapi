exports.up = async function(knex) {
  await knex("Project").insert([
    {
      ProjectName: "Project-one",
      Description: "something something",
      ProjectManager: 1
    },
    {
      ProjectName: "Project-two",
      Description: "something something",
      ProjectManager: 2
    },
    {
      ProjectName: "Project-three",
      Description: "something something",
      ProjectManager: 1
    },
    {
      ProjectName: "Project-four",
      Description: "something something",
      ProjectManager: 2
    },
    {
      ProjectName: "Project-five",
      Description: "something something",
      ProjectManager: 1
    },
    {
      ProjectName: "Project-six",
      Description: "something something",
      ProjectManager: 2
    }
  ]);
  await knex("ProjectEmployee").insert([
    {
      ProjectId: 1,
      EmployeeId: 1
    },
    {
      ProjectId: 1,
      EmployeeId: 3
    },
    {
      ProjectId: 1,
      EmployeeId: 6
    },
    {
      ProjectId: 2,
      EmployeeId: 3
    },
    {
      ProjectId: 2,
      EmployeeId: 5
    },
    {
      ProjectId: 3,
      EmployeeId: 4
    },
    {
      ProjectId: 4,
      EmployeeId: 4
    },
    {
      ProjectId: 4,
      EmployeeId: 2
    },
    {
      ProjectId: 5,
      EmployeeId: 1
    }
  ]);
};

exports.down = async function(knex) {
  await knex("Project")
    .whereIn("ProjectName", [
      "Project-one",
      "Project-two",
      "Project-three",
      "Project-four",
      "Project-five",
      "Project-six"
    ])
    .del();
};
