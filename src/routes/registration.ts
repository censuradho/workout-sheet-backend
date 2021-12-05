import { Router } from 'express'
import validator from 'middlewares/validator'

import { registrationController, createRegistrationValidator } from 'modules/user/useCases/registration'

const routesRegistration = Router()

routesRegistration.post('/', validator(createRegistrationValidator), (request, response) => registrationController.store(request, response))
routesRegistration.get('/', (request, response) => registrationController.index(request, response))
routesRegistration.delete('/:id', (request, response) => registrationController.delete(request, response))

export { routesRegistration }