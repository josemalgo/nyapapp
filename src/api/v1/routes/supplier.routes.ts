import { Router } from 'express'
import SupplierController from '../controllers/supplier.controller'
import { wrapAsync } from '../helpers'
import { validateId, validateSupplier } from '../validators/supplier.validator'

class SupplierRoutes {
  public router: Router
  private readonly path: string
  private readonly controller: SupplierController

  constructor (path: string) {
    this.router = Router()
    this.path = path
    this.controller = new SupplierController()
    this.initRoutes()
  }

  private initRoutes (): void {
    this.router.get(this.path, wrapAsync(this.controller.getSuppliers))
    this.router.get(`${this.path}/:id`, validateId, wrapAsync(this.controller.getSupplierById))
    this.router.get(this.path, validateSupplier, wrapAsync(this.controller.createSupplier))
    this.router.get(`${this.path}/:id`, validateId, validateSupplier, wrapAsync(this.controller.updateSupplier))
    this.router.get(`${this.path}/:id`, validateId, wrapAsync(this.controller.deleteSupplier))
  }
}

export default SupplierRoutes
