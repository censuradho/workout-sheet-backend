import { Router } from 'express'

import validator from 'middlewares/validator'

import { registrationController, createRegistrationValidator } from 'modules/user/useCases/registration'

const routesRegistration = Router()

routesRegistration.post('/', validator(createRegistrationValidator), (request, response, next) => registrationController.store(request, response, next))
routesRegistration.get('/', (request, response, next) => registrationController.index(request, response, next))
routesRegistration.delete('/:id', (request, response, next) => registrationController.delete(request, response, next))

export { routesRegistration }