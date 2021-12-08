import { SignOutController } from './signOut.controller'
import { SignOutService } from './signOut.service'

const signOutService = new SignOutService()
export const signOutController = new SignOutController(signOutService)