import { PerfilController } from './perfil.controller'
import { PerfilService } from './perfil.service'

export * from './perfil.validator'

const perfilService = new PerfilService()
export const perfilController = new PerfilController(perfilService)
