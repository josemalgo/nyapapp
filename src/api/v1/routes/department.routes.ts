import { Router } from 'express'
import DepartmentController from '../controllers/department.controller'

class DepartmentRoutes {
  public router: Router
  private readonly path: string
  private readonly controller: DepartmentController

  constructor (path: string) {
    this.router = Router()
    this.path = path
    this.controller = new DepartmentController()
    this.initRoutes()
  }

  private initRoutes (): void {
    this.router.get(this.path, this.controller.getDepartments)
    this.router.get(`${this.path}/:id`, this.controller.getDepartmentById)
    this.router.get(this.path, this.controller.createDepartment)
    this.router.get(`${this.path}/:id`, this.controller.updateDepartment)
    this.router.get(`${this.path}/:id`, this.controller.deleteDepartment)
  }
}

export default DepartmentRoutes
