import Employee from "./entity/employee";
import Project from "./entity/project";
import Manager from "./entity/manager";
import ProjectEmployee from "./entity/project-employee";

export default class OfficeDB {
  constructor(knex) {
    this.store = knex;
  }
  employee() {
    return new Employee(this.store);
  }

  project() {
    return new Project(this.store);
  }
  manager() {
    return new Manager(this.store);
  }
  projectEmployee() {
    return new ProjectEmployee(this.store);
  }
}
