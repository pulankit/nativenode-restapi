import BaseModel from "./base-model";
import Util from "./util";

export default class ProjectEmployee extends BaseModel {
  constructor(store) {
    super({
      tableName: "ProjectEmployee",
      primaryKey: "ProjectId-EmployeeId",
      store,
      keys: ["ProjectId", "EmployeeId"]
    });
  }

  async addNew(projectEmployee) {
    let { ProjectId, EmployeeId } = projectEmployee;
    let data = await this.store
      .select("EmployeeId")
      .from("Project")
      .innerJoin("Manager", "Project.ProjectManager", "Manager.ManagerId")
      .where("ProjectId", ProjectId);
    let managerEmployeeId;
    if (data.length) managerEmployeeId = data[0].EmployeeId;
    if (managerEmployeeId === EmployeeId) {
      throw {
        statusCode: 500,
        message: "This Employee is Manager of this Project!"
      };
    }
    super.addNew(projectEmployee);
  }

  async update(projectId) {
    // update Not Needed.
    throw { statusCode: 404, message: "Not Found!" };
  }

  async delete(projectId, data) {
    let EmployeeId = data.EmployeeId || null;
    if (!EmployeeId || !projectId)
      throw { statusCode: 400, message: "Bad Request" };
    let search = { ProjectId: projectId, EmployeeId };
    return this.store(this.table)
      .where(search)
      .del();
  }

  async findOne(projectId) {
    let employees = await Util.getAllProjectEmployees(this.store, projectId);
    return employees;
  }
}
