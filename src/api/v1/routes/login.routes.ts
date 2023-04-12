import { Router } from 'express'
import LoginController from '../controllers/login.controller'
import { wrapAsync } from '../helpers'

class LoginRoutes {
  public router: Router
  private readonly path: string
  private readonly controller: LoginController

  constructor (path: string) {
    this.router = Router()
    this.path = path
    this.controller = new LoginController()
    this.initRoutes()
  }

  private initRoutes (): void {
    this.router.post(this.path, wrapAsync(this.controller.validateUser))
  }
}

export default LoginRoutes
