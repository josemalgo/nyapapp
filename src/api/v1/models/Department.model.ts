import {
  Table,
  Column,
  Model,
  DataType,
  HasMany
} from 'sequelize-typescript'
import Employee from './Employee.model'

interface DepartmentAttributes {
  id: string
  name: string
}

@Table({
  tableName: 'department'
})
class Department extends Model<DepartmentAttributes> {
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

  @HasMany(() => Employee)
    employees!: Employee[]
}

export default Department
