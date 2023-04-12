import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType
} from 'sequelize-typescript'
import Employee from './Employee.model'
import Installation from './Installation.model'

@Table({
  tableName: 'installation_employee'
})
class InstallationEmployee extends Model {
  @ForeignKey(() => Installation)
  @Column({
    type: DataType.UUID,
    primaryKey: true
  })
    idInstallation!: string

  @ForeignKey(() => Employee)
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true
  })
    idEmployee!: string
}

export default InstallationEmployee
