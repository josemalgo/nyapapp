import { Router } from 'express'
import CustomerController from '../controllers/customer.controller'
import { wrapAsync } from '../helpers'
import { validateNewCustomer, validateId } from '../validators/customer.validator'
import { oneOf } from 'express-validator/src/middlewares/one-of'

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
    this.router.get(`${this.path}/:id`, wrapAsync(this.controller.getCustomerById))
    this.router.post(this.path, validateNewCustomer, wrapAsync(this.controller.createCustomer))
    this.router.put(`${this.path}/:id`, oneOf([validateId, validateNewCustomer]), wrapAsync(this.controller.updateCustomer))
    this.router.delete(`${this.path}/:id`, validateId, wrapAsync(this.controller.deleteCustomer))
  }
}

export default CustomerRoutes
