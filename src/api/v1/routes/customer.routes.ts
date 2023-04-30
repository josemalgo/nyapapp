import { Router } from 'express'
import CustomerController from '../controllers/customer.controller'
import { wrapAsync } from '../helpers'
import { validateCustomer, validateId } from '../validators/customer.validator'

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
    this.router.get(this.path, wrapAsync(this.controller.getAllCustomers))
    this.router.get(`${this.path}/:id`, validateId, wrapAsync(this.controller.getCustomerById))
    this.router.post(this.path, validateCustomer, wrapAsync(this.controller.createCustomer))
    this.router.put(`${this.path}/:id`, validateId, validateCustomer, wrapAsync(this.controller.updateCustomer))
    this.router.delete(`${this.path}/:id`, validateId, wrapAsync(this.controller.deleteCustomer))
  }
}

export default CustomerRoutes
