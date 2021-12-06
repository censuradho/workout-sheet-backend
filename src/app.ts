import express from 'express'
import cors from 'cors'

import 'dotenv'

import swaggerSetup from 'doc'

import { routes } from 'routes'

const app = express()

const { server, setup } = swaggerSetup()

app.use(express.json())
app.use('/docs', server, setup)
app.use(cors())
app.use(routes)

export default app