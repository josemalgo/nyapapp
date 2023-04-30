import { NextFunction, Request, Response } from 'express'
import { HttpStatusCodes } from '../enums/enums'
import { validateRequest } from '../helpers'
import CategoryService from '../services/category.service'

class CategoryController {
  public categoryService: CategoryService

  constructor () {
    this.categoryService = new CategoryService()
  }

  async getSuppliers (_req: Request, res: Response, _next: NextFunction): Promise<void> {
    const allCategory = await this.categoryService.getAllCategory()
    res.status(HttpStatusCodes.OK).json(allCategory)
  }

  async getSupplierById (req: Request, res: Response, _next: NextFunction): Promise<void> {
    const { id } = req.params
    validateRequest(req)

    const category = await this.categoryService.getCategory(id)
    res.status(HttpStatusCodes.OK).json(category)
  }

  async createSupplier (req: Request, res: Response, _next: NextFunction): Promise<void> {
    validateRequest(req)
    const newCategory = req.body
    const addedCategory = await this.categoryService.createCategory(newCategory)
    res.status(HttpStatusCodes.CREATED).json(addedCategory)
  }

  async updateSupplier (req: Request, res: Response, _next: NextFunction): Promise<void> {
    validateRequest(req)
    const category = req.body
    const updatedCategory = await this.categoryService.updateCategory(category)
    res.status(HttpStatusCodes.OK).json(updatedCategory)
  }

  async deleteSupplier (req: Request, res: Response, _next: NextFunction): Promise<void> {
    validateRequest(req)
    const { id } = req.params
    await this.categoryService.deleteCategory(id)
    res.status(HttpStatusCodes.OK)
  }
}

export default CategoryController
