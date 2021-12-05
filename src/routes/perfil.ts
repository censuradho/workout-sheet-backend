import { Router } from 'express'
import validator from 'middlewares/validator'

import { perfilController, createPerfilValidator } from 'modules/user/useCases/perfil'

const perfilRoutes = Router()

perfilRoutes.post('/', validator(createPerfilValidator), (request, response) => perfilController.store(request, response))
perfilRoutes.get('/:user_id', (request, response) => perfilController.show(request, response))

export { perfilRoutes }

