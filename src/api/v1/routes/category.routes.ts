import { Router } from 'express'
import CategoryController from '../controllers/category.controller'

class CategoryRoutes {
  public router: Router
  private readonly path: string
  private readonly controller: CategoryController

  constructor (path: string) {
    this.router = Router()
    this.path = path
    this.controller = new CategoryController()
    this.initRoutes()
  }

  private initRoutes (): void {
    this.router.get(this.path, this.controller.getCategories)
    this.router.get(`${this.path}/:id`, this.controller.getCategoryById)
    this.router.get(this.path, this.controller.createCategory)
    this.router.get(`${this.path}/:id`, this.controller.updateCategory)
    this.router.get(`${this.path}/:id`, this.controller.deleteCategory)
  }
}

export default CategoryRoutes
