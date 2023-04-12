import * as dotenv from 'dotenv'
dotenv.config()

export const mySqlConfig = {
  DB_HOST: process.env.DB_MYSQL_HOST,
  DB_USER: process.env.DB_MYSQL_USER,
  DB_PASSWORD: process.env.DB_MYSQL_PASSWORD,
  DB_NAME: process.env.DB_MYSQL_NAME
}
