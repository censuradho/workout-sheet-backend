import{ Request, Response } from 'express'
import logger from 'utils/logger'

import { RegistrationService } from './registration.service'

export class RegistrationController {
	constructor (private readonly service: RegistrationService) {}

	async store (request: Request, response: Response) {
    
		try {
			await this.service.create(request.body)

			return response.sendStatus(201)
      
		} catch (error) {
			if (!(error instanceof Error)) return response.sendStatus(500)

			return response.status(400).json({
				error: {
					message: error.message
				}
			})
		}
	}

	async index (request: Request, response: Response) {
		const users = await this.service.findMany()

		return response.json(users)
	}

	async delete (request: Request, response: Response) {
        
		const id = String(request.params.id)

		try {
			await this.service.delete(id)

			return response.sendStatus(204)
      
		} catch (error) {
			if (!(error instanceof Error)) {
				logger.error(error)
				return response.sendStatus(500)
			}

			return response.status(400).json({
				error: {
					message: error.message
				}
			})
		}
	}
}