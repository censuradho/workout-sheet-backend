import { Router } from 'express'
import validator from 'middlewares/validator'

import { perfilController, createPerfilValidator } from 'modules/user/useCases/perfil'

import authorize from 'middlewares/authorizate'

const perfilRoutes = Router()

perfilRoutes.post('/', authorize, validator(createPerfilValidator), (request, response, next) => perfilController.store(request, response, next))
perfilRoutes.get('/:user_id', (request, response, next) => perfilController.show(request, response, next))

export { perfilRoutes }

