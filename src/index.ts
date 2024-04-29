import express, { Express } from 'express'
import { v1Router } from './routes'
import env from './config/environment'
import { connectDatabase } from './config/database'

const app: Express = express()

connectDatabase()
//Config
app.set('port', env.app.port)

//Middlewares

//Routes
app.use('/v1', v1Router)

//Inicialization
app.listen(app.get('port'), () => {
  console.log(`Server is running on port ${app.get('port')}`)
})
