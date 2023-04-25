import {
  Table,
  Column,
  Model,
  DataType,
  HasMany
} from 'sequelize-typescript'
import Product from './Product.model'

export interface SupplierAttributes {
  id: string
  name: string
}

@Table({
  tableName: 'supplier'
})
class Supplier extends Model<SupplierAttributes> {
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

export default Supplier
