import { Supplier } from '../models'
import { v4 as uuidv4 } from 'uuid'
import { NewSupplier } from '../interfaces/types'
import { SupplierAttributes } from '../models/Supplier.model'

class SupplierService {
  async getAllSuppliers (): Promise<Supplier[]> {
    const suppliers = await Supplier.findAll()
    return suppliers
  }

  async getSupplier (id: string): Promise<Supplier> {
    const supplier = await this.findSupplierById(id)
    return supplier
  }

  async createSupplier (newSupplier: NewSupplier): Promise<Supplier> {
    const supplier = await Supplier.create({
      id: uuidv4(),
      ...newSupplier
    })
    return supplier
  }

  async updateSupplier (updateSupplier: SupplierAttributes): Promise<Supplier> {
    const supplier = await this.findSupplierById(updateSupplier.id)
    await supplier.update(updateSupplier)
    return supplier
  }

  async deleteSupplier (id: string): Promise<void> {
    await Supplier.destroy({ where: { id } })
  }

  private async findSupplierById (id: string): Promise<Supplier> {
    const supplier = await Supplier.findByPk(id)
    if (supplier === null) {
      // throw new Api404Error(`Player with id: ${id} not found.`)
      throw new Error(`Player with id: ${id} not found.`)
    }
    return supplier
  }
}

export default SupplierService
