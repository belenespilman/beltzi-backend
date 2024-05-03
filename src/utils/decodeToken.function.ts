import { JwtPayload, verify } from 'jsonwebtoken'
import environment from '../config/environment'

export const decodeToken = (token: string): string => {
  try {
    const payload = verify(token, environment.jwtSecret as string) as JwtPayload

    return payload.id
  } catch (error) {
    throw new Error('Invalid JWT')
  }
}
