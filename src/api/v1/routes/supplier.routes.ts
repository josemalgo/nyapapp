import { Router } from 'express'
import SupplierController from '../controllers/supplier.controller'

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
    this.router.get(this.path, this.controller.getSuppliers)
    this.router.get(`${this.path}/:id`, this.controller.getSupplierById)
    this.router.get(this.path, this.controller.createSupplier)
    this.router.get(`${this.path}/:id`, this.controller.updateSupplier)
    this.router.get(`${this.path}/:id`, this.controller.deleteSupplier)
  }
}

export default SupplierRoutes
