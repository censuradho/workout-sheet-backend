import { SERVER_ERRORS } from 'constants/errors'
import { Request, Response } from 'express'
import { AnalyticsService } from './analytics.service'

export class AnalyticsController {
	constructor (private readonly service: AnalyticsService) {}
  
	async index (request: Request, response: Response) {
		try {
			const { account_id } = request.params

			const result = await this.service.handle(account_id)
  
  
			return response.json(result)
		} catch (err) {
			if (!(err instanceof Error)) return response.status(500).json({
				error: {
					message: SERVER_ERRORS.INTERNAL
				}
			})
		}
	}
}