import { Router } from 'express'
import { fitLevelController } from 'modules/user/useCases/fitLevel'

const fitLevel = Router()

fitLevel
	.post('/', (request, response) => fitLevelController.store(request, response))
	.get('/', (request, response) => fitLevelController.index(request, response))
	.delete('/:id', (request, response) => fitLevelController.delete(request, response))

export { fitLevel}