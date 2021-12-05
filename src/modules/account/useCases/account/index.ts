import { AccountController } from './account.controller'
import { AccountService } from './account.service'

const accountService = new AccountService()
export const accountController = new AccountController(accountService)