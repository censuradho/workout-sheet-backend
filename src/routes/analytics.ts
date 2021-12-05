import { Router } from 'express'

import { analyticsController } from 'modules/account/useCases'

const analyticsRoutes = Router()

analyticsRoutes.get('/', (request, response) => analyticsController.index(request, response))

export { analyticsRoutes }