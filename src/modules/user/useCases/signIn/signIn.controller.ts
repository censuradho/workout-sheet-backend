import{ Request, Response } from 'express'

import { SignInService } from './signIn.service'

export class SignInController {
	constructor (private readonly service: SignInService) {}

	async store (request: Request, response: Response) {
    
		try {
			const result = await this.service.create(request.body)

			return response.json(result)
      
		} catch (error) {
			if (!(error instanceof Error)) return response.sendStatus(500)

			return response.status(401).json({
				error: {
					message: error.message
				}
			})
		}
	}
}