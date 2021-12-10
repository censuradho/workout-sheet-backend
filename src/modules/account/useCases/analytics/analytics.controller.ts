import { NextFunction, Request, Response } from 'express'

import logger from 'utils/logger'

import { AnalyticsService } from './analytics.service'

export class AnalyticsController {
	constructor (private readonly service: AnalyticsService) {}
  
	async index (request: Request, response: Response, next: NextFunction) {
		try {
			const { id,  account_id } = request.user_info
			
			const result = await this.service.handle(id, account_id)
  
			return response.json(result)
		} catch (err) {
			logger.error(err)
			next(err)
		}
	}
}