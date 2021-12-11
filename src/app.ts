import express from 'express'
import cors from 'cors'

import cookieParser from 'cookie-parser'

import { errorHandler } from 'middlewares/error'

import 'dotenv'
import 'express-async-errors'

import { routes } from 'routes'

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use(routes)
app.use(errorHandler)



export default app