import { Router } from 'express'

import { signInController } from 'modules/user/useCases/signIn'

const signInRoutes = Router()

signInRoutes.post('/', (request, response) => signInController.store(request, response))

export { signInRoutes }

