import { NextFunction, Request, Response } from 'express'

import logger from 'utils/logger'

import { AnalyticsService } from './analytics.service'

export class AnalyticsController {
	constructor (private readonly service: AnalyticsService) {}
  
	async index (request: Request, response: Response, next: NextFunction) {
		try {
			const { account_id } = request.params

			const result = await this.service.handle(account_id)
  
  
			return response.json(result)
		} catch (err) {
			logger.error(err)
			next(err)
		}
	}
}