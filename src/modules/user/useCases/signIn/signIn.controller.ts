import{ Request, Response } from 'express'
import logger from 'utils/logger'

import { SignInService } from './signIn.service'

export class SignInController {
	constructor (private readonly service: SignInService) {}

	async store (request: Request, response: Response) {
    
		try {
			const result = await this.service.create(request.body)

			logger.info({
				user_id: result.id
			})

			return response.json(result)
      
		} catch (error) {
			if (!(error instanceof Error)) {
				logger.error(error)
				return response.sendStatus(500)
			}

			return response.status(401).json({
				error: {
					message: error.message
				}
			})
		}
	}
}