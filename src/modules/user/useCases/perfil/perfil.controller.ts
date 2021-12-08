import { Response, Request, NextFunction} from 'express'
import logger from 'utils/logger'

import { PerfilService } from './perfil.service'

export class PerfilController {
	constructor (private readonly service: PerfilService) {}

	async store (request: Request, response: Response, next: NextFunction) {
		try {
			const { id } = request.user_info

			const user_id = request.body.user_id || id
			
			await this.service.create({
				...request.body,
				user_id
			})

			return response.sendStatus(201)

		} catch (err) {
			logger.error(err)
			next(err)

		}
	}

	async show (request: Request, response: Response, next: NextFunction) {
		try {
			const user_id = String(request.params.user_id)

			const perfil = await this.service.findByUserId(user_id)
	
			return response.json(perfil)
		} catch (err) {
			logger.info(err)
			next(err)
		}
	}
}