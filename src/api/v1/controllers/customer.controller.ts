import { NextFunction, Request, Response } from 'express'
import { HttpStatusCodes } from '../enums/enums'
import { isValidId, validateRequest } from '../helpers'
import CustomerService from '../services/customer.service'

class CustomerController {
  public customerService: CustomerService

  constructor () {
    this.customerService = new CustomerService()
  }

  async getAllCustomers (_req: Request, res: Response, _next: NextFunction): Promise<void> {
    const allCustomers = await this.customerService.getCustomers()
    res.status(HttpStatusCodes.OK).json(allCustomers)
  }

  async getCustomerById (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const { id } = req.params
    isValidId(id)

    const customer = await this.customerService.getCustumer(id)
    res.status(HttpStatusCodes.OK).json(customer)
  }

  async createCustomer (req: Request, res: Response, _next: NextFunction): Promise<void> {
    validateRequest(req)
    const newCustomer = req.body
    const addedCustomer = await this.customerService.createCustomer(newCustomer)
    res.status(HttpStatusCodes.CREATED).json(addedCustomer)
  }

  async updateCustomer (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const { id } = req.params
    isValidId(id)
    validateRequest(req)
    const customerToUpdate = req.body
    const updatedCustomer = await this.customerService.updateCustomer(customerToUpdate)
    res.status(HttpStatusCodes.OK).json(updatedCustomer)
  }

  deleteCustomer (): void {

  }
}

export default CustomerController
