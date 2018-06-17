import BaseModel from "./base-model";
import Util from "./util";

export default class Employee extends BaseModel {
  constructor(store) {
    super({
      tableName: "Project",
      primaryKey: "ProjectId",
      store,
      keys: ["ProjectId", "ProjectName", "Description", "ProjectManager"]
    });
  }

  async findOne(projectId) {
    let projectData = super.findOne(projectId);
    let projectEmployee = Util.getAllProjectEmployees(this.store, projectId);
    let [projectArray, employees] = await Promise.all([
      projectData,
      projectEmployee
    ]);
    let project = projectArray[0];
    if (!project) throw { statusCode: 404, message: "Not Found" };
    let managerId = project.ProjectManager;
    project.Employees = employees;
    project.ProjectManager = await Util.getProjectManagerDetail(
      this.store,
      managerId
    );
    return project;
  }
}
