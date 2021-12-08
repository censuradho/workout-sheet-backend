import{ NextFunction, Request, Response } from 'express'
import logger from 'utils/logger'

import { TransactionService } from './transaction.service'

export class TransactionController {
	constructor (private readonly service: TransactionService) {}

	async store (request: Request, response: Response, next: NextFunction) {

		const { account_id } = request.user_info

		try {
			const result = await this.service.create({
				account_id,
				...request.body
			})

			return response.status(201).json(result)
      
		} catch (error) {
			logger.error(error)
			next(error)
		}
	}

	async show (request: Request, response: Response, next: NextFunction) {
		try {
			const { account_id } = request.user_info

			const result = await this.service.findMany(account_id, request.paginate)
	
			return response.json(result)
		} catch (err) {
			logger.error(err)
			next(err)
		}
	}


	async delete (request: Request, response: Response, next: NextFunction) {
		const { transactions_id } = request.body

		const { account_id } = request.user_info

		try {
			await this.service.delete(account_id, transactions_id)

			return response.sendStatus(204)
		}
		catch (error) {
			logger.error(error)
			next(error)

		}
	}
}