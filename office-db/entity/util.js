export default class Util {
  static async getAllProjectOfEmployee(store, employeeId) {
    return store
      .select(
        "Project.ProjectId",
        "ProjectName",
        "Description",
        "ProjectManager"
      )
      .from("ProjectEmployee")
      .innerJoin("Project", "ProjectEmployee.ProjectId", "Project.ProjectId")
      .where("EmployeeId", employeeId);
  }

  static async getProjectManagerDetail(store, managerId) {
    let data = await store
      .select(
        "ManagerId",
        "Employee.EmployeeId",
        "FirstName",
        "LastName",
        "PhoneNumber",
        "Email"
      )
      .from("Employee")
      .innerJoin("Manager", "Manager.EmployeeId", "Employee.EmployeeId")
      .where("Manager.ManagerId", managerId);
    return data[0];
  }

  static async getAllProjectEmployees(store, projectId) {
    return store
      .select(
        "Employee.EmployeeId",
        "FirstName",
        "LastName",
        "PhoneNumber",
        "Email",
        "Designation"
      )
      .from("Employee")
      .innerJoin(
        "ProjectEmployee",
        "Employee.EmployeeId",
        "ProjectEmployee.EmployeeId"
      )
      .where("ProjectId", projectId);
  }

  static async addEmployeesToProject(store, projectId, employees) {
    if (Array.isArray(employees)) {
      let multipleInserts = employees.map(employee => {
        return store("ProjectEmployee").insert({
          ProjectId: projectId,
          EmployeeId: employee
        });
      });
      return Promise.all(multipleInserts);
    }
    return store("ProjectEmployee").insert({
      ProjectId: projectId,
      EmployeeId: employees
    });
  }

  static async getAllProjectsOfManager(store, managerId) {
    let projects = await store
      .select("ProjectName", "Description", "ProjectId")
      .from("Project")
      .where("ProjectManager", managerId);

    let getEmployeePromises = [];
    if (projects.length) {
      projects.forEach(project => {
        getEmployeePromises.push(
          this.getAllProjectEmployees(store, project.ProjectId)
        );
      });
      let employeeData = await Promise.all(getEmployeePromises);
      projects = projects.map((project, index) => {
        project.Employees = employeeData[index];
        return project;
      });
    }
    return projects;
  }
}
