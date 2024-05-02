import Joi from 'joi'

export const createUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
})

export interface CreateUserDTO {
  email: string
  password: string
  firstName: string
  lastName: string
}
