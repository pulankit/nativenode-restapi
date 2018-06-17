import BaseModel from "./base-model";
import Util from "./util";

export default class Employee extends BaseModel {
  constructor(store) {
    super({
      tableName: "Manager",
      primaryKey: "ManagerId",
      store,
      keys: ["EmployeeId", "ManagerId", "Specialization"]
    });
  }

  async findOne(managerId) {
    let managerData = Util.getProjectManagerDetail(this.store, managerId);
    let projectData = Util.getAllProjectsOfManager(this.store, managerId);
    let [manager, projects] = await Promise.all([managerData, projectData]);
    if (!manager) throw { statusCode: 404, message: "Not Found" };
    manager.Projects = projects;
    return manager;
  }
}
