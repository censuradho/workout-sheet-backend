import { Router } from 'express'

import { trainingSheetController } from 'modules/user/useCases/trainingSheet'

import validator from 'middlewares/validator'
import authorize from 'middlewares/authorizate'

import { createTrainingSheetValidator } from 'modules/user/useCases/trainingSheet'

const trainingSheetRoutes = Router()

trainingSheetRoutes
	.post('/', 
		authorize,
		validator(createTrainingSheetValidator), 
		(request, response) => trainingSheetController.store(request, response)
	)
	.get('/user', authorize, (request, response) => trainingSheetController.show(request, response))

export { trainingSheetRoutes }