import { Router } from 'express'

import { signInController } from 'modules/user/useCases/signIn'
import { refrashTokenController } from 'modules/user/useCases/refrashToken'
import { signOutController } from 'modules/user/useCases/signOut'

const authRoutes = Router()

authRoutes.post('/sign-in', (request, response) => signInController.store(request, response))
authRoutes.get('/sign-out', (request, response, next) => signOutController.execute(request, response, next))
authRoutes.get('/refrash-token', (request, response, next) => refrashTokenController.execute(request, response, next))

export { authRoutes }

