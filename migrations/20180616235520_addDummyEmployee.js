exports.up = async function(knex) {
  await knex("Employee").insert([
    {
      FirstName: "Vikash",
      LastName: "Dahiya",
      PhoneNumber: 9908767895,
      Designation: "SDE",
      Email: "vikash@gmail.com"
    },
    {
      FirstName: "Pulankit",
      LastName: "Panjwani",
      PhoneNumber: 9760252857,
      Designation: "Developer",
      Email: "pulankit@gmail.com"
    },
    {
      FirstName: "Anurag",
      LastName: "Dahiya",
      PhoneNumber: 9991212123,
      Designation: "SDE",
      Email: "anurag@gmail.com"
    },
    {
      FirstName: "Prakash",
      LastName: "Singh",
      PhoneNumber: 9918767895,
      Designation: "BD",
      Email: "prakash@gmail.com"
    },
    {
      FirstName: "Vikram",
      LastName: "Kashyap",
      PhoneNumber: 9908767815,
      Designation: "HR",
      Email: "vikky@gmail.com"
    },
    {
      FirstName: "Praveen",
      LastName: "Dahiya",
      PhoneNumber: 9908761895,
      Designation: "SDE",
      Email: "playstore@gmail.com"
    }
  ]);
};

exports.down = async function(knex) {
  await knex("Employee")
    .whereIn("Email", [
      "vikash@gmail.com",
      "playstore@gmail.com",
      "pulankit@gmail.com",
      "vikky@gmail.com",
      "anurag@gmail.com",
      "prakash@gmail.com"
    ])
    .del();
};
