import { RegistrationController } from './registration.controller'
import { RegistrationService } from './registration.service'

export * from './registration.validator'

const registrationService = new RegistrationService()
export const registrationController = new RegistrationController(registrationService)
