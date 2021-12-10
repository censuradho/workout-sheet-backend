import { Router } from 'express'

import { analyticsController } from 'modules/account/useCases'

import authorizate from 'middlewares/authorizate'
const analyticsRoutes = Router()

analyticsRoutes.get('/', authorizate,  (request, response, next) => analyticsController.index(request, response, next))

export { analyticsRoutes }