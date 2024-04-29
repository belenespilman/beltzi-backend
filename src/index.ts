import express, { Express } from 'express'
import { v1Router } from './routes'

const app: Express = express()

//Config
app.set('port', 3000)

//Middlewares

//Routes
app.use('/v1', v1Router)

//Inicialization
app.listen(app.get('port'), () => {
  console.log(`Server is running on port ${app.get('port')}`)
})
