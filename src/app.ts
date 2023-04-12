import express, { Application } from 'express'
import Routes from './api/v1/routes'
import { Sequelize } from 'sequelize-typescript'
import { mySqlConfig } from './config/DatabaseConfig'
import {
  Address,
  Category,
  Customer,
  Department,
  Employee,
  Installation,
  InstallationEmployee,
  InstallationProduct,
  InstallationType,
  Product,
  Status,
  Supplier,
  User
} from './api/v1/models'

class App {
  private readonly app: Application
  private readonly port: number

  constructor (port: number) {
    this.app = express()
    this.port = port

    this.initialiseDatabase()
    this.initialiseMiddleware()
    this.initialiseRoutes()
    // this.initialiseErrorHandling()
  }

  async listen (): Promise<void> {
    this.app.listen(this.port, () => {
      console.log(`App listening on port ${this.port}`)
    })
  }

  private initialiseDatabase (): void {
    const sequelize = new Sequelize({
      host: mySqlConfig.DB_HOST,
      database: mySqlConfig.DB_NAME,
      username: mySqlConfig.DB_USER,
      password: mySqlConfig.DB_PASSWORD,
      dialect: 'mysql'
    })

    sequelize.authenticate()
      .then(() => console.log('Connection has been established succesfully.'))
      .catch((error) => console.error('Unable to connect to the database: ', error))

    sequelize.addModels([
      Address,
      Category,
      Customer,
      Department,
      Employee,
      Installation,
      InstallationEmployee,
      InstallationProduct,
      InstallationType,
      Product,
      Status,
      Supplier,
      User])

    sequelize.sync().then(() => {
      console.log('Tables created successfully!')
    }).catch((error) => {
      console.error('Unable to create tables : ', error)
    })
  }

  private initialiseMiddleware (): void {
    this.app.use(express.json())
  }

  private initialiseRoutes (): void {
    const routes = new Routes().getRouter()
    this.app.use('/api', routes)
  }
}

export default App
