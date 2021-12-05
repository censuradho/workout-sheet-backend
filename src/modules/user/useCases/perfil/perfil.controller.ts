import { Response, Request} from 'express'

import { PerfilService } from './perfil.service'

export class PerfilController {
	constructor (private readonly service: PerfilService) {}

	async store (request: Request, response: Response) {
		try {
			await this.service.create(request.body)

			return response.sendStatus(201)

		} catch (err) {
			if (!(err instanceof Error)) return response.sendStatus(500)

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