import {
  Table,
  Column,
  Model,
  DataType,
  HasMany
} from 'sequelize-typescript'
import Customer from './Customer.model'
import Employee from './Employee.model'

interface AddressAttributes {
  id: string
  street: string
  number: number
  floor: number
  door: number
  zip_code: number
  city: string
  country: string
}

@Table({
  tableName: 'address'
})
class Address extends Model<AddressAttributes> {
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
    street!: string

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
    number!: string

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
    floor!: string

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
    door!: string

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
    zip_code!: number

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
    city!: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
    country!: string

  @HasMany(() => Customer)
    customers!: Customer[]

  @HasMany(() => Employee)
    employees!: Employee[]
}

export default Address
