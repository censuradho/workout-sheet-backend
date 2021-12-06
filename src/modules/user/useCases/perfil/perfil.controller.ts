import { Response, Request} from 'express'
import logger from 'utils/logger'

import { PerfilService } from './perfil.service'

export class PerfilController {
	constructor (private readonly service: PerfilService) {}

	async store (request: Request, response: Response) {
		try {
			const { id } = request.user_info

			const user_id = request.body.user_id || id
			
			await this.service.create({
				...request.body,
				user_id
			})

			return response.sendStatus(201)

		} catch (err) {
			if (!(err instanceof Error)) {
				logger.error(err)
				return response.sendStatus(500)
			}

			return response.status(400).json({
				error: {
					message: err.message
				}
			})
		}
	}

	async show (request: Request, response: Response) {
		const user_id = String(request.params.user_id)

		const perfil = await this.service.findByUserId(user_id)

		return response.json(perfil)
	}
}