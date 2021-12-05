import{ Request, Response } from 'express'

import { TransactionService } from './transaction.service'

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


	async delete (request: Request, response: Response) {
		const { account_id, transactions_id } = request.body

		try {
			await this.service.delete(account_id, transactions_id)

			return response.sendStatus(204)
		}
		catch (error) {
			if (!(error instanceof Error)) return response.sendStatus(500)

			return response.status(400).json({
				error: {
					message: error.message
				}
			})
		}
	}
}