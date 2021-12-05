import{ Request, Response } from 'express'

import { TransactionService } from './transaction.service'
import { CreateTransactionValidator } from './transaction.validator'

export class TransactionController {
	constructor (private readonly service: TransactionService) {}

	async store (request: Request, response: Response) {


		try {
			const result = await this.service.create(request.body)

			return response.status(201).json(result)
      
		} catch (error) {
			if (!(error instanceof Error)) return response.sendStatus(500)

			return response.status(400).json({
				error: {
					message: error.message
				}
			})
		}
	}

	async show (request: Request, response: Response) {
		const account_id = request.params.account_id

		const result = await this.service.findMany(account_id, request.paginate)

		return response.json(result)
	}


}