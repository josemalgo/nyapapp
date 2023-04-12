import { Router } from 'express'
import CategoryRoutes from './category.routes'
import DepartmentRoutes from './department.routes'
import LoginRoutes from './login.routes'
import StatusRoutes from './status.routes'
import SupplierRoutes from './supplier.routes'
import CustomerRoutes from './customer.routes'

class Routes {
  private readonly routes: Router

  constructor () {
    this.routes = Router()
    this.initRoutes()
  }

  private initRoutes (): void {
    this.routes.use(new LoginRoutes('/login').router)
    this.routes.use(new CategoryRoutes('/category').router)
    this.routes.use(new StatusRoutes('/status').router)
    this.routes.use(new DepartmentRoutes('/department').router)
    this.routes.use(new SupplierRoutes('/supplier').router)
    this.routes.use(new CustomerRoutes('/customer').router)
  }

  getRouter (): Router {
    return this.routes
  }
}

export default Routes
