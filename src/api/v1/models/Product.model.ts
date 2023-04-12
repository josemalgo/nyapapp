import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo
} from 'sequelize-typescript'
import Category from './Category.model'
import Supplier from './Supplier.model'

interface ProductAttributes {
  id: string
  name: string
  model: string
  reference: string
  price: number
  description: string
  measures: string
}

@Table({
  tableName: 'product'
})
class Product extends Model<ProductAttributes> {
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

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
    model!: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
    reference!: string

  @Column({
    type: DataType.DECIMAL,
    allowNull: false
  })
    price!: number

  @Column({
    type: DataType.TEXT,
    allowNull: false
  })
    description!: string

  @Column({
    type: DataType.STRING
  })
    measures!: string

  @ForeignKey(() => Supplier)
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4
  })
    idSupplier!: string

  @BelongsTo(() => Supplier)
    supplier!: Supplier

  @ForeignKey(() => Category)
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4
  })
    idCategory!: string

  @BelongsTo(() => Category)
    category!: Category
}

export default Product
