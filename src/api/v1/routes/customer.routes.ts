import { Router } from 'express'
import CustomerController from '../controllers/customer.controller'

class CustomerRoutes {
  public router: Router
  private readonly path: string
  private readonly controller: CustomerController

  constructor (path: string) {
    this.router = Router()
    this.path = path
    this.controller = new CustomerController()
    this.initRoutes()
  }

  private initRoutes (): void {
    this.router.get(this.path, this.controller.getAllCustomers)
    this.router.get(`${this.path}/:id`, this.controller.getCustomerById)
    this.router.get(this.path, this.controller.createCustomer)
    this.router.get(`${this.path}/:id`, this.controller.updateCustomer)
    this.router.get(`${this.path}/:id`, this.controller.deleteCustomer)
  }
}

export default CustomerRoutes
