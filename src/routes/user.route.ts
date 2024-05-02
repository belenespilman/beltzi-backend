import { Router, Request, Response } from 'express'
import { createUserSchema } from '../models/DTO/createuser.dto'
import { UserService } from '../services/user.service'
import { TokenResponse } from '../models/interfaces/tokenResponse.interface'

const userRouter: Router = Router()
const userService: UserService = new UserService()

userRouter.post('/register', async (req: Request, res: Response) => {
  try {
    const { error } = createUserSchema.validate(req.body)
    if (error) {
      return res.json(error.details)
    }

    const response: TokenResponse = await userService.createUser(req.body)
    res.status(201).json(response)
  } catch (error) {
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    res.json((error as any).message)
  }
})

export { userRouter }
