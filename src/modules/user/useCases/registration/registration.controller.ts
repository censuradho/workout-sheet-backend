import { nextDay } from 'date-fns'
import{ NextFunction, Request, Response } from 'express'
import logger from 'utils/logger'

import { RegistrationService } from './registration.service'

export class RegistrationController {
	constructor (private readonly service: RegistrationService) {}

	async store (request: Request, response: Response, next: NextFunction) {
    
		await this.service.create(request.body)

		return response.sendStatus(201)

	}

	async index (request: Request, response: Response, next: NextFunction) {
		const users = await this.service.findMany()

		return response.json(users)

	}

	async delete (request: Request, response: Response, next: NextFunction) {
        
		const id = String(request.params.id)

		await this.service.delete(id)

		return response.sendStatus(204)
      
	}
}