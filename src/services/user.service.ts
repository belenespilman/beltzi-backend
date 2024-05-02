import { CreateUserDTO } from '../models/DTO/createuser.dto'
import { UserRepository } from '../repositories/user.repository'
import { TokenResponse } from '../models/interfaces/tokenResponse.interface'
import bcrypt from 'bcryptjs'
import { sign } from 'jsonwebtoken'

export class UserService {
  userRepository: UserRepository
  constructor() {
    this.userRepository = new UserRepository()
  }

  async createUser(body: CreateUserDTO): Promise<TokenResponse> {
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(body.password, salt)

    const userData: CreateUserDTO = {
      ...body,
      password: hashedPassword,
    }
    const user = await this.userRepository.create(userData)
    const token = sign(
      {
        id: user.id,
      },
      'admin123',
    )
    return {
      message: 'SUCCESS',
      data: {
        token,
      },
    }
  }
}
