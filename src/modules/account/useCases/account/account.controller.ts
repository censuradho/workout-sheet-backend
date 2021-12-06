import { SERVER_ERRORS } from 'constants/errors'
import { Request, Response } from 'express'

import { AccountService } from './account.service'

export class AccountController {
	constructor (private readonly service: AccountService) {}

	async show (request: Request, response: Response) {
		try {
			const user_id = request.params.user_id

			const result = await this.service.findOne(user_id)
	
			return response.json(result)
		} catch (err) {
			if (!(err instanceof Error)) return response.status(500).json({
				error: {
					message: SERVER_ERRORS.INTERNAL
				}
			})

			return response.status(404).json({
				error: {
					message: err.message
				}
			})
		}

	}
}