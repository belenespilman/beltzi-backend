import { Router } from 'express'
import { baseRouter } from './base.route'
import { userRouter } from './user.route'

const v1Router: Router = Router()

v1Router.use(baseRouter)
v1Router.use('/user', userRouter)

export { v1Router }
