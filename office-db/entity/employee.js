import BaseModel from "./base-model";
import Util from "./util";

export default class Employee extends BaseModel {
  constructor(store) {
    super({
      tableName: "Employee",
      primaryKey: "EmployeeId",
      store,
      keys: [
        "EmployeeId",
        "FirstName",
        "LastName",
        "PhoneNumber",
        "Email",
        "Designation"
      ]
    });
  }

  async findOne(employeeId) {
    let employeeData = super.findOne(employeeId);
    let employeeProjects = Util.getAllProjectOfEmployee(this.store, employeeId);
    let [employeeArray, project] = await Promise.all([
      employeeData,
      employeeProjects
    ]);
    let employee = employeeArray[0];
    if (!employee) throw { statusCode: 404, message: "Not Found" };
    employee.Projects = project;
    return employee;
  }
}
