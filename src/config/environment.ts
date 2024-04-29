import { config } from 'dotenv'
config()

export default {
  database: {
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    name: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
  },

  app: {
    port: process.env.APP_PORT,
  },
}
