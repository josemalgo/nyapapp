import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType
} from 'sequelize-typescript'
import Installation from './Installation.model'
import Product from './Product.model'

@Table({
  tableName: 'installation_product'
})
class InstallationProduct extends Model {
  @ForeignKey(() => Installation)
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true
  })
    idInstallation!: string

  @ForeignKey(() => Product)
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true
  })
    idProduct!: string

  @Column({
    type: DataType.SMALLINT,
    allowNull: false
  })
    quantity!: number

  @Column({
    type: DataType.DECIMAL(7, 2)
  })
    discount!: number
}

export default InstallationProduct
