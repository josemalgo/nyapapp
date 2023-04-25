import { CustomerAttributes } from '../models/Customer.model'
import { SupplierAttributes } from '../models/Supplier.model'

export type NewCustomer = Omit<CustomerAttributes, 'id'>
export type NewSupplier = Omit<SupplierAttributes, 'id'>

export interface Entity {
  findByPk: Function
}
