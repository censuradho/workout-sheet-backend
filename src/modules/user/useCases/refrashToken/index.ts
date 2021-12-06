import { RefrashTokenController } from './refrashToken.controller'
import { RefrashTokenService } from './refrashToken.service'

const refrashTokenService = new RefrashTokenService()
export const refrashTokenController = new RefrashTokenController(refrashTokenService)