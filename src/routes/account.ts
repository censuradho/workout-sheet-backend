import { Router } from 'express'

import { accountController } from 'modules/account/useCases/account'

import authorizate from 'middlewares/authorizate'

const accountRoutes = Router()

accountRoutes.get('/user/:user_id', authorizate, (request, response, next) => accountController.show(request, response, next))

export { accountRoutes }