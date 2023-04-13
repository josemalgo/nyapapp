import { NewCustomer } from '../interfaces/types'
import { Customer } from '../models'
import { v4 as uuidv4 } from 'uuid'

class CustomerService {
  async getCustomers (): Promise<Customer[]> {
    const customers = await Customer.findAll()
    return customers
  }

  async getCustumer (id: string): Promise<Customer> {
    const customer = await Customer.findByPk(id)
    if (customer == null) {
      // throw new Api404Error(`Player with id: ${id} not found.`)
      throw new Error(`Player with id: ${id} not found.`)
    }
    return customer
  }

  async createCustomer (newCustomer: NewCustomer): Promise<Customer> {
    const customer = await Customer.create({
      id: uuidv4(),
      ...newCustomer
    })

    return customer
  }
}

export default CustomerService
