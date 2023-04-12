import {
  Table,
  Column,
  Model,
  DataType,
  HasMany
} from 'sequelize-typescript'
import Installation from './Installation.model'

interface InstallationTypeAttributes {
  id: string
  name: string
  description: string
  kit_price: number
}

@Table({
  tableName: 'installation_type'
})
class InstallationType extends Model<InstallationTypeAttributes> {
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
    description!: string

  @Column({
    type: DataType.DECIMAL(7, 2),
    allowNull: false
  })
    kit_price!: number

  @HasMany(() => Installation)
    installation!: Installation[]
}

export default InstallationType
