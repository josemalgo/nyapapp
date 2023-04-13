import { CustomerAttributes } from '../models/Customer.model'

export type NewCustomer = Omit<CustomerAttributes, 'id'>
