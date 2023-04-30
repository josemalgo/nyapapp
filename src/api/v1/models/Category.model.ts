import {
  Table,
  Column,
  Model,
  DataType,
  HasMany
} from 'sequelize-typescript'
import Product from './Product.model'

export interface CategoryAttributes {
  id: string
  name: string
}

@Table({
  tableName: 'category'
})
class Category extends Model<CategoryAttributes> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true
  })
    id!: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
    name!: string

  @HasMany(() => Product)
    products!: Product[]
}

export default Category
