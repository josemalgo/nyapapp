import { NextFunction, Request, Response } from 'express'
import { HttpStatusCodes } from '../enums/enums'
import { isValidId, validateRequest } from '../helpers'
import SupplierService from '../services/supplierService'

class SupplierController {
  public supplierService: SupplierService

  constructor () {
    this.supplierService = new SupplierService()
  }

  async getSuppliers (_req: Request, res: Response, _next: NextFunction): Promise<void> {
    const allSuppliers = await this.supplierService.getAllSuppliers()
    res.status(HttpStatusCodes.OK).json(allSuppliers)
  }

  async getSupplierById (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const { id } = req.params
    validateRequest(req)

    const supplier = await this.supplierService.getSupplier(id)
    res.status(HttpStatusCodes.OK).json(supplier)
  }

  async createSupplier (req: Request, res: Response, _next: NextFunction): Promise<void> {
    validateRequest(req)
    const newSupplier = req.body
    const addedSupplier = await this.supplierService.createSupplier(newSupplier)
    res.status(HttpStatusCodes.CREATED).json(addedSupplier)
  }

  updateSupplier (): void {

  }

  deleteSupplier (): void {

  }
}

export default SupplierController
