import { Router } from 'express'
import StatusController from '../controllers/status.controller'

class StatusRoutes {
  public router: Router
  private readonly path: string
  private readonly controller: StatusController

  constructor (path: string) {
    this.router = Router()
    this.path = path
    this.controller = new StatusController()
    this.initRoutes()
  }

  private initRoutes (): void {
    this.router.get(this.path, this.controller.getAllStatus)
    this.router.get(`${this.path}/:id`, this.controller.getStatusById)
    this.router.get(this.path, this.controller.createStatus)
    this.router.get(`${this.path}/:id`, this.controller.updateStatus)
    this.router.get(`${this.path}/:id`, this.controller.deleteStatus)
  }
}

export default StatusRoutes
