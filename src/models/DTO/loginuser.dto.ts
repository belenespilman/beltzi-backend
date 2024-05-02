import Joi from 'joi'

export const loginUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
})

export interface LoginUserDto {
  email: string
  password: string
}
