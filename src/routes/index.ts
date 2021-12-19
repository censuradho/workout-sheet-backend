import { Router } from 'express'

import { routesRegistration } from './registration'
import { authRoutes } from './auth'
import { goalRoutes } from './goal'

const routes = Router()

routes.use('/registration', routesRegistration)
routes.use('/auth', authRoutes)
routes.use('/goal', goalRoutes)

export { routes }