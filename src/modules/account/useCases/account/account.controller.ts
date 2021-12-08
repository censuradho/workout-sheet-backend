import { SERVER_ERRORS } from 'constants/errors'
import { NextFunction, Request, Response } from 'express'
import logger from 'utils/logger'

import { AccountService } from './account.service'

export class AccountController {
	constructor (private readonly service: AccountService) {}

	async show (request: Request, response: Response, next: NextFunction) {
		try {
			const user_id = request.params.user_id

			const result = await this.service.findOne(user_id)
	
			return response.json(result)
		} catch (err) {
			logger.error(err)
			next(err)	
		}

	}
}