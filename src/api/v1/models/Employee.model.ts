import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
  ForeignKey,
  BelongsToMany
} from 'sequelize-typescript'
import Address from './Address.model'
import Department from './Department.model'
import Installation from './Installation.model'
import InstallationEmployee from './InstallationEmployee.model'

interface EmployeeAttributes {
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
  tableName: 'employee'
})
class Employee extends Model<EmployeeAttributes> {
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

  @ForeignKey(() => Department)
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4
  })
    idDepartment!: string

  @BelongsTo(() => Department)
    department!: Department

  @BelongsToMany(() => Installation, () => InstallationEmployee)
    installations!: Installation
}

export default Employee
