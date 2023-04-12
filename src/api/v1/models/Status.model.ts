import {
  Table,
  Column,
  Model,
  DataType,
  HasMany
} from 'sequelize-typescript'
import Installation from './Installation.model'

interface StatusAttributes {
  id: string
  name: string
}

@Table({
  tableName: 'status'
})
class Status extends Model<StatusAttributes> {
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

  @HasMany(() => Installation)
    installation!: Installation[]
}

export default Status
