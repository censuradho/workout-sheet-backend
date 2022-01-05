import { Router } from 'express'

import { routesRegistration } from './registration'
import { authRoutes } from './auth'
import { trainingSheetRoutes } from './trainingSheet'

const routes = Router()

routes.use('/registration', routesRegistration)
routes.use('/auth', authRoutes)
routes.use('/training-sheet', trainingSheetRoutes)

export { routes }