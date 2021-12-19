import { Router } from 'express'
import { goalController } from 'modules/user/useCases/goal'

const goalRoutes = Router()

goalRoutes
	.post('/', (request, response) => goalController.store(request, response))


export { goalRoutes}