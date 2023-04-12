import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  BelongsToMany
} from 'sequelize-typescript'
import Employee from './Employee.model'
import Status from './Status.model'
import Customer from './Customer.model'
import InstallationType from './InstallationType.model'
import InstallationEmployee from './InstallationEmployee.model'

interface InstallationAttributes {
  id: string
  entryTime: Date
  departureTime: Date
  observations: string
}

@Table({
  tableName: 'installation'
})
class Installation extends Model<InstallationAttributes> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true
  })
    id!: string

  @Column({
    type: DataType.DATE,
    allowNull: false
  })
    entryTime!: Date

  @Column({
    type: DataType.DATE,
    allowNull: false
  })
    departureTime!: Date

  @ForeignKey(() => Status)
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4
  })
    idStatus!: string

  @BelongsTo(() => Status)
    status!: Status

  @ForeignKey(() => Customer)
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4
  })
    idCustomer!: string

  @BelongsTo(() => Customer)
    customer!: Customer

  @ForeignKey(() => InstallationType)
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4
  })
    idInstallationType!: string

  @BelongsTo(() => InstallationType)
    installationType!: InstallationType

  @BelongsToMany(() => Employee, () => InstallationEmployee)
    employees!: Employee[]
}

export default Installation
