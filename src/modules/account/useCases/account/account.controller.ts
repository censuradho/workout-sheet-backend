import { Request, Response } from 'express'

import { AccountService } from './account.service'

export class AccountController {
	constructor (private readonly service: AccountService) {}

	async store (request: Request, response: Response) {
		try {
          
			const result = await this.service.create(request.body)

			response.json(result)

		} catch (error) {
			if (!(error instanceof Error)) return response.sendStatus(500)

			console.log(error)
			return response.status(400).json({
				error: {
					message: error.message
				}
			})
		}

	}

	async show (request: Request, response: Response) {
		const user_id = request.params.user_id

		const result = await this.service.findOne(user_id)

		return response.json(result)

	}
}