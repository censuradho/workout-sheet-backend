import { Router } from 'express'

import { routesRegistration } from './registration'
import { perfilRoutes } from './perfil'
import { transactionRoutes } from './transaction'
import { accountRoutes } from './account'
import { authRoutes } from './auth'
import { analyticsRoutes } from './analytics'

const routes = Router()

routes.use('/registration', routesRegistration)
routes.use('/perfil', perfilRoutes)
routes.use('/auth', authRoutes)
routes.use('/transaction', transactionRoutes)
routes.use('/account', accountRoutes)
routes.use('/analytics', analyticsRoutes)

export { routes }