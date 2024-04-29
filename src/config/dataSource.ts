import { DataSource } from 'typeorm'
import env from './environment'
import { join } from 'path'
import { User } from '../models/entities/user.entity'

const dataSource = new DataSource({
  type: 'postgres',
  host: env.database.host,
  port: env.database.port,
  database: env.database.name,
  username: env.database.username,
  password: env.database.password,
  entities: [User],
  migrationsTableName: 'migrations',
  migrations: [join(__dirname, '../migrations/*.ts')],
  synchronize: false,
  logging: false,
})

export default dataSource
