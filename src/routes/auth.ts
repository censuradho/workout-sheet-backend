import { Router } from 'express'

import { signInController } from 'modules/user/useCases/signIn'
import { refrashTokenController } from 'modules/user/useCases/refrashToken'

const authRoutes = Router()

authRoutes.post('/sign-in', (request, response) => signInController.store(request, response))
authRoutes.post('/refrash-token', (request, response) => refrashTokenController.handle(request, response))

export { authRoutes }

