import express from 'express'
import cors from 'cors'

import cookieParser from 'cookie-parser'

import 'dotenv'


import { routes } from 'routes'

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use(routes)

export default app