import { CreateUserDTO } from '../models/DTO/createuser.dto'
import { UserRepository } from '../repositories/user.repository'
import { TokenResponse } from '../models/interfaces/tokenResponse.interface'
import bcrypt from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import environment from '../config/environment'
import { LoginUserDto } from '../models/DTO/loginuser.dto'

export class UserService {
  userRepository: UserRepository
  constructor() {
    this.userRepository = new UserRepository()
  }

  async createUser(body: CreateUserDTO): Promise<TokenResponse> {
    const salt = bcrypt.genSaltSync(environment.saltRounds)
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
      environment.jwtSecret as string,
    )
    return {
      message: 'SUCCESS',
      data: {
        token,
      },
    }
  }

  async loginUser(body: LoginUserDto): Promise<TokenResponse> {
    const user = await this.userRepository.getUserByEmail(body.email)
    if (!user) {
      throw new Error('No user was found')
    }
    const passwordsMatch = bcrypt.compareSync(body.password, user.password)
    if (!passwordsMatch) {
      throw new Error('Invalid password')
    }
    const token = sign(
      {
        id: user.id,
      },
      environment.jwtSecret as string,
    )
    return {
      message: 'SUCCESSFUL LOGIN',
      data: {
        token,
      },
    }
  }
}
