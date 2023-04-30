import { NewCategory } from '../interfaces/types'
import { Category } from '../models'
import { v4 as uuidv4 } from 'uuid'
import { CategoryAttributes } from '../models/Category.model'

class CategoryService {
  async getAllCategory (): Promise<Category[]> {
    const suppliers = await Category.findAll()
    return suppliers
  }

  async getCategory (id: string): Promise<Category> {
    const supplier = await this.findCategoryById(id)
    return supplier
  }

  async createCategory (newCategory: NewCategory): Promise<Category> {
    const supplier = await Category.create({
      id: uuidv4(),
      ...newCategory
    })
    return supplier
  }

  async updateCategory (updateSupplier: CategoryAttributes): Promise<Category> {
    const supplier = await this.findCategoryById(updateSupplier.id)
    await supplier.update(updateSupplier)
    return supplier
  }

  async deleteCategory (id: string): Promise<void> {
    await Category.destroy({ where: { id } })
  }

  private async findCategoryById (id: string): Promise<Category> {
    const category = await Category.findByPk(id)
    if (category === null) {
      // throw new Api404Error(`Player with id: ${id} not found.`)
      throw new Error(`Player with id: ${id} not found.`)
    }
    return category
  }
}

export default CategoryService
