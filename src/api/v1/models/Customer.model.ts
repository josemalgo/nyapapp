import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
  ForeignKey,
  HasMany
} from 'sequelize-typescript'
import Address from './Address.model'
import Installation from './Installation.model'

interface CustomerAttributes {
  id: string
  nif: string
  name: string
  firstname: string
  lastname: string
  email: string
  telephone: number
  mobilphone: number
}

@Table({
  tableName: 'customer'
})
class Customer extends Model<CustomerAttributes> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true
  })
    id!: string

  @Column({
    type: DataType.STRING(9),
    unique: true,
    allowNull: false
  })
    nif!: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
    name!: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
    firstname!: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
    lastname!: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
    email!: string

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
    telephone!: number

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
    movilphone!: number

  @ForeignKey(() => Address)
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4
  })
    idAddress!: string

  @BelongsTo(() => Address)
    address!: Address

  @HasMany(() => Installation)
    installation!: Installation[]
}

export default Customer
