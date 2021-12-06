import { Router } from 'express'

import { accountController } from 'modules/account/useCases/account'

const accountRoutes = Router()

accountRoutes.get('/user/:user_id', (request, response) => accountController.show(request, response))

export { accountRoutes }