import { Router } from 'express'
import { goalController } from 'modules/user/useCases/goal'

const goalRoutes = Router()

goalRoutes
	.post('/', (request, response) => goalController.store(request, response))
	.get('/', (request, response) => goalController.index(request, response))
	.delete('/:id', (request, response) => goalController.delete(request, response))

export { goalRoutes}