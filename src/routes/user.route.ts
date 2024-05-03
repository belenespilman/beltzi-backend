import { Router, Request, Response } from 'express'
import { createUserSchema } from '../models/DTO/createuser.dto'
import { UserService } from '../services/user.service'
import { TokenResponse } from '../models/interfaces/tokenResponse.interface'
import { loginUserSchema } from '../models/DTO/loginuser.dto'
import { GetUserProfileResponse } from '../models/interfaces/getUserProfileResponse.interface'

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

userRouter.post('/login', async (req: Request, res: Response) => {
  try {
    const { error } = loginUserSchema.validate(req.body)
    if (error) {
      return res.json(error.details)
    }
    const response: TokenResponse = await userService.loginUser(req.body)
    res.status(200).json(response)
  } catch (error) {
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    res.json((error as any).message)
  }
})

userRouter.get('/profile', async (req: Request, res: Response) => {
  try {
    const token = req.headers['authorization'] as string
    const response: GetUserProfileResponse =
      await userService.getUserProfile(token)
    res.status(200).json(response)
  } catch (error) {
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    res.json((error as any).message)
  }
})

export { userRouter }
