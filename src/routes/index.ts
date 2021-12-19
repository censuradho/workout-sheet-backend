import { Router } from 'express'

import { routesRegistration } from './registration'
import { authRoutes } from './auth'
import { goalRoutes } from './goal'
import { fitLevel } from './fitLevel'

const routes = Router()

routes.use('/registration', routesRegistration)
routes.use('/auth', authRoutes)
routes.use('/goal', goalRoutes)
routes.use('/fit-level', fitLevel)

export { routes }