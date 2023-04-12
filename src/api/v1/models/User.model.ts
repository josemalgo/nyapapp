import {
  Table,
  Column,
  Model,
  DataType
} from 'sequelize-typescript'

interface UserAttributes {
  id: string
  name: string
  password: string
}

@Table({
  tableName: 'user'
})
class User extends Model<UserAttributes> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true
  })
    id!: string

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false
  })
    name!: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
    password!: string
}

export default User
