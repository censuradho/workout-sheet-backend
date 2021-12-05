import { SignInService } from './signIn.service'
import { SignInController } from './signIn.controller'

const signInService = new SignInService()
export const signInController = new SignInController(signInService)

