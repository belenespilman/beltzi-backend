import { Repository } from 'typeorm'
import { User } from '../models/entities/user.entity'
import dataSource from '../config/dataSource'

export class UserRepository {
  repository: Repository<User>

  constructor() {
    this.repository = dataSource.getRepository(User)
  }
  async create(data: Partial<User>): Promise<User> {
    try {
      const user = await this.repository.save(data)
      return user
    } catch (error) {
      throw new Error('Error when creating user')
    }
  }
}
