import { User } from '../entities/user.entity'

export interface GetUserProfileResponse {
  message: string
  data: Omit<User, 'password'>
}
