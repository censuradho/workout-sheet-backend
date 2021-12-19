import { Router } from 'express'

import { routesRegistration } from './registration'
import { authRoutes } from './auth'

const routes = Router()

routes.use('/registration', routesRegistration)
routes.use('/auth', authRoutes)

export { routes }