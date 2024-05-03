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

  async getUserByEmail(email: string): Promise<User | null> {
    try {
      const user = await this.repository.findOne({
        where: {
          email,
        },
      })
      return user
    } catch (error) {
      throw new Error('Error when getting user by email')
    }
  }

  async getUserInformation(id: string): Promise<User | null> {
    try {
      const user = await this.repository.findOne({
        where: {
          id,
        },
      })
      return user
    } catch (error) {
      throw new Error('Error when getting user information')
    }
  }
}
