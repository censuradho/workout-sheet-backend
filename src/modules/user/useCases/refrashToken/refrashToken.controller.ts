import { Request, Response } from 'express'
import logger from 'utils/logger'
import { RefrashTokenService } from './refrashToken.service'

export class RefrashTokenController {
	constructor (private readonly service: RefrashTokenService) {}
  
	async handle (request: Request, response: Response) {
		try {
			const refrash_token = request.cookies

			const token = await this.service.execute(refrash_token)
	
			return response.json(token)
		} catch (err) {
			logger.error(err)
		}
	}
}